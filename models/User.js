module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('User', {
        userId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        username: {
            type: Sequelize.TEXT
        },
        email: {
            type: Sequelize.STRING,
            // validate: {
            //     isEmail: true
            // }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        last_login: {
            type: Sequelize.DATE
        },
        last_login: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    });
    User.associate = function(models) {
        User.belongsToMany(models.Sanctuary, {
            through:'UserSanList',
            as:'Sanctuaries',
            foreignKey:'userId'
        });
        // User.hasMany(models.Post, {
        //     // as:'myPosts',
        //     // foreignKey: 'sanId'
        // });
      };
    return User;
}

