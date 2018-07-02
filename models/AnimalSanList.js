module.exports = function (sequelize, DataTypes) {

  const AnimalSanList = sequelize.define("AnimalSanList", {
    animalSanID: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    SanctuaryName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    ImageLink:{
      type: DataTypes.STRING,
    },
    State: {
      type: DataTypes.STRING,
    },
    Phone:{
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.TEXT,
    },
    Address: {
      type: DataTypes.STRING
    },
    Website: {
      type: DataTypes.STRING
    },
    Facebook: {
      type: DataTypes.STRING
    },
    Instagram: {
      type: DataTypes.STRING
    },
    Twitter: {
      type: DataTypes.STRING
    },
    Youtube: {
      type: DataTypes.STRING
    },
    Vimeo: {
      type: DataTypes.STRING
    },
    Othermedia: {
      type: DataTypes.STRING
    },
    VolunteerPage:{
      type: DataTypes.STRING
    },
    VisitPage:{
      type: DataTypes.STRING
    },
    DonationPage: {
      type: DataTypes.STRING
    },
    EventPage: {
      type: DataTypes.STRING
    }
    ,
    BlogPage: {
      type: DataTypes.STRING
    },
    AnimalPage:{
      type: DataTypes.STRING
    },
    About:{
      type: DataTypes.STRING
    }
  });
  return AnimalSanList;
};