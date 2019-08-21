/*const fs = require('fs');
const path = require('path');

module.exports = (server) => {
    fs.readdirSync('server/routes/api').forEach((file) => {
        require(`./api/${file.substr(0, file.indexOf('.'))}`)(server);
    })
};*/