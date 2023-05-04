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

    const result = await pool.query("SELECT * FROM jusay_fishport_db.order INNER JOIN jusay_fishport_db.orderDetail");

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

    const orderItems = items.map((i) => ({
      ...i,
      orderId: order.insertId,
      status: 0
    }));

    const orderDetails = await pool.query('INSERT INTO orderDetail SET ?', [ orderItems ]);

    return res.status(200).json({ message: 'Order successful' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};