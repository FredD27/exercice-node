const userInfo = require("./information");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`${userInfo.name} est sur le campus de la ${userInfo.campus}`),
    e : "oO",
    T : "U "
}));

