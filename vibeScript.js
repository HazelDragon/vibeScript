
import { generateColor, generateColorRGB, generateSecondaryColorRGB, generateSecondaryColor } from "@marko19907/string-to-color";
import express from "express"
import cors from 'cors'

const app = express();
app.use(cors({
    origin: '*'
}));

const vibes = ['intense','reserved','mysterious','bubbly','kind','calm'];
let x;
const message = {
    name: [],
    primaryColor: [],
    secondaryColor: [],
    luck: [],
    vibe: [],
}


const port = process.env.PORT || 3002
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})

app.get('/name/:name', (req,res) => {
    message.name = req.params.name
    message.primaryColor = generateColorRGB(req.params.name);
    message.secondaryColor = generateSecondaryColorRGB(req.params.name);
    if (JSON.stringify(message.primaryColor) < JSON.stringify(message.secondaryColor))
    {
        console.log("yas");
        x = Math.floor(Math.random() * 3)*2;
        message.luck = Math.floor(Math.random()*11);
    }
    else 
    {
        console.log("flop");
        x = (Math.floor(Math.random() * 3));
        message.luck = (Math.ceil(Math.random()*11));
    }
    message.vibe = vibes[x];

    res.send(message);
});




