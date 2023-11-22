import { generateColor, generateColorRGB, generateSecondaryColor } from "@marko19907/string-to-color";


// const express = require('express')
import express from "express"
const app = express();



const port = process.env.PORT || 3002
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})

app.get('/Name/:Name', (req,res) => {
    const nameColor = generateColorRGB(req.params.Name);
    console.log("hello")
    res.send('your name color is' + nameColor );
});
