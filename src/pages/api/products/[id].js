import { pool } from "config/db";
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  switch (req.method) {
    case "PUT":
      return await update(req, res);
    case "GET":
      return await fetchOne(req, res);
    case "DELETE":
      return await deleteProduct(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const fetchOne = async (req, res) => {
  const [product] = await pool
    .query(`SELECT * FROM product WHERE id=${req.query.id}`);

  const image = product.image.toString();

  return res.status(200).json({
    ...product,
    image
  });
}

const update = async (req, res) => {
  const { image, name, description, price, unit, quantity } = req.body;
  const { token } = req.cookies;
  
  try {
    if (!token) {
      return res.status(401).send('Unauthorized');
    }
  
    const verified = jwt.verify(token, process.env.APPSECRET);
  
    if (!verified) {
      return res.status(401).send('Unauthorized');
    }
  
    const results = await pool.query('UPDATE product SET image=?,name=?,description=?,price=?,unit=?,quantity=? WHERE id=?',
    [
      image,
      name,
      description,
      price,
      unit,
      quantity,
      req.query.id,
    ]);
    return res.status(200).json(results);
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error });
  }
}

const deleteProduct = async (req, res) => {
  const { image, name, description, price, unit, quantity } = req.body;
  const { token } = req.cookies;
  
  try {
    if (!token) {
      return res.status(401).send('Unauthorized');
    }
  
    const verified = jwt.verify(token, process.env.APPSECRET);
  
    if (!verified) {
      return res.status(401).send('Unauthorized');
    }
  
    const results = await pool.query('DELETE FROM product WHERE id=?', req.query.id);
    return res.status(200).json(results);
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error });
  }
}
