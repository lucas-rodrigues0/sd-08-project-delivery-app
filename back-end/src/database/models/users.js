module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  },
  {
    timestamps: false,
    });

  user.associate = (models) => {
    user.belongsTo(models.sale);
  };

  return user;
};
