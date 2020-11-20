import { Sequelize } from 'sequelize';

console.log('Connecting to the DB...');
const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        dialect: 'postgres'
    }
);
console.log('Connected to the DB.');

const models = {
    Song: sequelize.import('./song')
};

Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export { sequelize };
export default models;