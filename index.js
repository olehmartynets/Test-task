const express = require('express');
const Joi = require('joi');
const app = express();

const validator = require('express-joi-validation').createValidator({});

const querySchema = Joi.object({
    number: Joi.number().integer().required()
});

function getResponse (number) {
    if(number % 3 === 0 && number % 5 === 0) {
        return "GN";
    } else if(number % 3 === 0) {
        return "G";
    } else if(number % 5 === 0) {
        return "N";
    }

    return number;
};

app.get('/', validator.query(querySchema), function (req, res) {
    const inputNumber = req.query.number;
    const response = getResponse(inputNumber);
    res.json({ response });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

module.exports = getResponse;