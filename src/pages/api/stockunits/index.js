import { pool } from "config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getStockUnits(req, res);
    case "POST":
      return await saveStockUnit(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getStockUnits = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM stockunit");
    return res.status(200).json(results);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

const saveStockUnit = async (req, res) => {
  try {
    const {productId, unit, qty, price } = req.body;

    

    const result = await pool.query("INSERT INTO stockunit SET ?", {
      productId,
      unit,
      qty,
      price
    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};