import Client  from 'node-osc';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
let OSC;

(async () => {
    OSC = await import('node-osc');
})();

app.use(bodyParser.json());

// const oscServer = new OSC.Server(8000, '0.0.0.0');
const oscClient = new OSC.Client('192.168.31.121', 7000); // IP и порт Resolume

app.post('/send-osc', (req, res) => {
    const { address, args } = req.body;
    oscClient.send(address, ...args, () => {
        console.log(`Sent OSC Message: ${address} ${args}`);
        res.send('OSC Message Sent');
    });
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});