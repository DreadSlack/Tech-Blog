const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    passYesNo(loginPass){
        return bcrypt.compareSync(loginPass, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 15],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (userNew) => {
                userNew.password = await bcrypt.hash(userNew.password, 15);
                return userNew;
            },
            beforeUpdate: async (updateUser) => {
                if (updateUser.password){
                    updateUser.password = await bcrypt.hash(updateUser.password, 15);
                }
                return updateUser;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',        
    }
);
module.exports = User;
