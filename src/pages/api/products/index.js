import { pool } from "config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      console.log(req);
      return await getProducts(req, res);
    case "POST":
      return await saveProduct(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM product");
    const products = result.map((item) => {
      const imageBuffer = item.image;
      const image = imageBuffer.toString();
      return ({
        ...item,
        image
      })
    });

    console.log(products);

    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

const saveProduct = async (req, res) => {
  try {
    const { image, name, description, price, unit, quantity } = req.body;  

    const result = await pool.query("INSERT INTO product SET ?", {

      image,
      name,
      description,
      price,
      unit,
      quantity,

    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};