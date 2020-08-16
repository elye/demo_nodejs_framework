const app = require('./app')

const port = 3000;

function startService() {
    app.listen(port, (error) => {
        if (error) {
            console.error('error starting service: ', port);
        } else {
            console.log(`Example app listening on port ${port}!`);
        }
    });
}

module.exports = {
    startService,
};
