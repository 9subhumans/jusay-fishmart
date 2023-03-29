import { pool } from "config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getUsers(req, res);
    case "POST":
      return await saveUser(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getUsers = async (req, res) => {
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
    const { name, username, firstName, lastName, number, email, password, gender, phone, address, provice, street, city, country, postalCode, userType } = req.body;

    const result = await pool.query("INSERT INTO user SET ?", {
      name: firstName + ' ' +  lastName,
      username,
      firstName,
      lastName,
      email,
      password,
      gender: "",
      phone: "",
      address: "",
      provice: "",
      street: "",
      city: "",
      country: "",
      postalCode: "",
      userType: 2,
      number: '',
    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};