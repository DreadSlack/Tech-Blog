const { User } = require('../models');

const userData = [
    {
        name: 'Phill Spencer',
        email: 'phillanator233@mail.com',
        password: 'TechBlog1',
    },
    {
        name: 'Lindon B. Jhonson',
        email: 'presidentialcan1900@mail.com',
        password: 'TechBlog1',
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
