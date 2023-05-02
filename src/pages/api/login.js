import { pool } from "config/db";
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (!req.method === 'POST') {
    return res.status(400).send("Method not allowed");
  }

  try {
    const { username, password } = req.body;
    const [{ result, id, name, firstName, lastName, userType }] = await pool.query("SELECT COUNT(*) as result, id, name, firstName, lastName, userType FROM user WHERE username=? AND password=?", [username, password]);

    if (result) {
      const token = jwt.sign({
        id,
        name,
        firstName,
        lastName,
        userType,
      }, process.env.APPSECRET);

      res.status(200).send({ token });
    }

    return res
        .status(401)
        .send({ message: 'Authentication failed' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
}