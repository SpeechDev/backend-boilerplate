module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email_verified_at: {
      type: Sequelize.DATEONLY,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    customer_id: {
        type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.INTEGER,
    },
    reset_token: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    created_at: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    updated_at: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    opt_in: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
  },
  {
    timestamps: false
  });
  return Users;
};