import 'dotenv/config';
import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Hello World, this is the server app for Attik's!`);
})



export default app;