import { pool } from "config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      console.log(req);
      return await getuser(req, res);
    case "POST":
      return await saveUser(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getUser = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM user");
    return res.status(200).json(results);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

const saveUser = async (req, res) => {
  try {
    const { name, userName, firstName, lastName, number, email, password, gender, phone, address, province, street, city, country, postalCode, userType } = req.body;

    const result = await pool.query("INSERT INTO user SET ?", {
      fName,
      lName,
      userName,
      email,
      passwword,
      cPassword,
      gender,
      phoneNumber

    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};