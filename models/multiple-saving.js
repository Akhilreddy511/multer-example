module.exports = (sequelize, DataTypes) => {
    var multiple = sequelize.define('multiple-images-gallery', {
        primary_table_id: DataTypes.INTEGER
    })
    return multiple
}