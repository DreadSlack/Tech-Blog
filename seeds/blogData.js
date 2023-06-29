const { Blog } =require('../models');

const blogData = [
    {
        name: 'MVC is Important',
        blogged:'MVC facilitiates multiple views, letting oyu develope diffrent views with less code duplication!',
        user_id: 1,
    },
    {
        name:'HTML is Super Important',
        blogged:'HTML is the structual base of the internet as far as webistes are concerned that allows browsers to see and understand how the page context.',
        user_id: 2,
    },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;