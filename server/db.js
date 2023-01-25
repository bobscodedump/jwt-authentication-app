const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "leephengpii",
    host: "localhost",
    port: 5432,
    database: "jwt_app"
});