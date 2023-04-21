import { pool } from "config/db";

export default async function handler(req, res) {
  const [product] = await pool
    .query(`SELECT * FROM product WHERE id=${req.query.id}`);

  const image = product.image.toString();

  return res.status(200).json({
    ...product,
    image
  });
}