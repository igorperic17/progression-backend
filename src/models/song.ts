
const song = (sequelize, DataTypes) => {
  const Song = sequelize.define("song", {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    chords: DataTypes.TEXT,
    progression: DataTypes.STRING
  });
  return Song;
};


export default song;

