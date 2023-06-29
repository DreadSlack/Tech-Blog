const seedUsers = require('./userData');
const seedBlog = require('./blogData');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('Database is Syncronized!');
    await seedUsers();
    console.log('Seeded User Information!');
    await seedBlog();
    console.log('Seedign of the Blog Information has finished!');
   
    process.exit(0);
};

seedAll();
