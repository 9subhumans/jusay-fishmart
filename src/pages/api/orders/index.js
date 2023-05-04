import { pool } from "config/db";
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getOrders(req, res);
    case "POST":
      return await saveOrder(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getOrders = async (req, res) => {
  try {
    const { total, userId, paymentmethod } = req.body;

    const result = await pool.query(`
      SELECT t1.id, t1.total, t1.userId, t1.paymentmethod, t1.shipto_addres, t1.shipto_city, t1.shipto_state, t1.shipto_zip, t1.createdAt, t2.productId, t2.qty, t2.subtotal, t2.status
      FROM jusay_fishport_db.order t1
      LEFT JOIN jusay_fishport_db.orderDetail t2 ON t1.id=t2.orderId;
    `);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const saveOrder = async (req, res) => {
  try {
    let { userId } = req.body;
    const {
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      phoneNumber,
      paymentmethod,
      items
    } = req.body;

    let user;
    if (!userId) {
      user = await pool.query('INSERT INTO user SET ?', {
        firstName,
        name: `${firstName} ${lastName}`,
        number: phoneNumber,
      })
    }

    const total = items.reduce((acc, obj) => {
      return acc + obj.subtotal;
    }, 0);

    const order = await pool.query("INSERT INTO jusay_fishport_db.order SET ?", {
      total,
      userId: user.insertId,
      paymentmethod,
      shipto_addres: address,
      shipto_city: city,
      shipto_state: state,
      shipto_zip: zip,
      cash: ''
    });

    const orderItems = items.map(({
      productId,
      qty,
      subtotal,
    }) => ([
      productId,
      order.insertId,
      qty,
      subtotal,
      0
    ]));

    const orderDetails = await pool.query(`
      INSERT INTO orderDetail (
        productId,
        orderId,
        qty,
        subtotal,
        status
      ) VALUES ?
    `, [orderItems]);

    return res.status(200).json({ message: 'Order successful' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};