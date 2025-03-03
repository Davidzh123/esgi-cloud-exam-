const { Sequelize } = require('sequelize');

// Utilisation directe de l'URL de connexion
const sequelize = new Sequelize(
  'postgresql://esgi_cloud_exam_db_b9nd_user:tH7hT4VSAYBiGfUQK9Ign8PXRkc0Y4NH@dpg-cv2tfq5svqrc7398a730-a/esgi_cloud_exam_db_b9nd',
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// Authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;
