import { pool } from "config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "PUT":
      return await update(req, res);
    case "GET":
      return await fetchOne(req, res);
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
  try {
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
