import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: "Localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "jusay_fishport_db",
  },
});

export { pool };