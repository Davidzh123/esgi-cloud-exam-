const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres: postgresql://esgi_cloud_exam_db_b9nd_user:tH7hT4VSAYBiGfUQK9Ign8PXRkc0Y4NH@dpg-cv2tfq5svqrc7398a730-a/esgi_cloud_exam_db_b9nd', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;