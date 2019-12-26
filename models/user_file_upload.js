module.exports = (sequelize, DataTypes) => {
    var File = sequelize.define('file_upload', {

        fileName: DataTypes.STRING
    });

    // File.associate = function (models) {
    //     models.File.hasMany(models.Task);
    // };

    return File;
};