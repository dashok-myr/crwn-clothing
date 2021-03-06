const express = require('express');
const cors = require('cors')
const path = require('path')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.h tml'))
    })
}

app.post('/payment', async (req, res) => {
    const {token: {id}, amount} = req.body;
    const body = {
        amount: amount,
        currency: 'usd',
        source: id,
    };

    try {
        const stripeResponse = await stripe.charges.create(body);
        res.status(200).send({success: stripeResponse})
    } catch (error) {
        res.status(500).send({error})
    }
})

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port)
})