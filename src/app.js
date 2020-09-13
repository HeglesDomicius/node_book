import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('1,2,3... testando'));

app.get('/products', (req, res) => res.send([{
name: 'Default product',
descripition: 'product description',
price: 100

}]));



export default app;

