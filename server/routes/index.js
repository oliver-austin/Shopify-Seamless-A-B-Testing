const fs = require('fs');
const path = require('path');

module.exports = async (router) => {
    fs.readdirSync('server/routes/api').forEach((file) => {
        require(`./api/${file.substr(0, file.indexOf('.'))}`)(router);
    })
};