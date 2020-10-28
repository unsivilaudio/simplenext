const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('/p/:id', (req, res) => {
        const { id } = req.params;
        app.render(req, res, '/post', { id });
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, err => {
        if (err) throw new Error('Something went Wrong.');
        console.log('> [Next] Server listening on port 3000');
    });
});
