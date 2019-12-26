module.exports = (sequelize, DataTypes) => {
    var registration = sequelize.define('registration', {
        gender: {
            type: DataTypes.ENUM('male', 'female'),
            validate: {
                notEmpty: true,
                isIn: [['male', 'female']]
            }
        },
        name: DataTypes.STRING
    })
    return registration
}