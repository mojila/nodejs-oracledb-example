const oracledb = require("oracledb");
const dotenv = require("dotenv");

dotenv.config();

const oracle = {
  getConnection: async () => {
    let connection;
    try {
      connection = await oracledb.getConnection({
        user: process.env.ORACLE_USER,
        password: process.env.ORACLE_PASSWORD,
        connectString: process.env.ORACLE_CONNECT_STRING,
      });
    } catch (err) {
      console.log("Koneksi ke database error : ", err);
    } finally {
      return connection;
    }
  },
  closeConnection: async (connection) => {
    try {
      connection.close();
    } catch (err) {
      console.log("Penutupan koneksi error : ", err);
    }
  },
};

(async () => {
  const connection = await oracle.getConnection();
  connection
    .execute("SELECT owner, table_name FROM all_tables")
    .then((res) => {
      console.log(res.rows);
    })
    .catch((err) => {
      console.error(err);
    });
})();
