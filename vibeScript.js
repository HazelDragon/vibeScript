import { generateColor, generateColorRGB, generateSecondaryColorRGB, generateSecondaryColor } from "@marko19907/string-to-color";


// const express = require('express')
import express from "express"
const app = express();
const vibes = ['intense','reserved','mysterious','bubbly','kind','calm'];
let x;

const port = process.env.PORT || 3002
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})

app.get('/name/:name', (req,res) => {
    const nameColor = generateColor(req.params.name);
    const nameColor2 = generateSecondaryColor(req.params.name);
    if (JSON.stringify(nameColor) < JSON.stringify(nameColor2))
    {
        console.log("yas");
        x = (Math.floor(Math.random() * 3))*2;
    }
    else 
    {
        console.log("flop");
        x = Math.floor(Math.random() * 3);
    }
    
    res.send(`${req.params.name} is ${vibes[x]} and colors are ${nameColor} and ${nameColor2}`);
});

