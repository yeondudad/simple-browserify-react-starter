const connect = require('connect');
const instant = require('instant');

module.exports = function() {
    return function(port) {
        const root = process.cwd() + '/build';
        const app = connect();

        app.use(instant({root: root}))
            .listen(port, function() {
                const listening = this.address().port;

                console.log('listening on port ' + listening + ' and waiting for changes.');
            });
    };
};

