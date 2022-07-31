module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "id19280859_vknadb",
  PORT : 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// module.exports = {
//   HOST: "databases-auth.000webhost.com",
//   USER: "id19280859_vknaadminuser",
//   PASSWORD: "~U3@k?!uYHq9pLk",
//   DB: "id19280859_vknadb",
//   PORT : 3306,
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };