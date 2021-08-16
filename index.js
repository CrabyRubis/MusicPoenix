const Aoijs = require("aoi.js")
 
const bot = new Aoijs.Bot({
token: "ODcyNjU5MTA4MjkyMDY3MzQ4.YQtFIA.9CsapwaQpv1TfAI34GhGRzbq9GE", 
prefix: "$getServerVar[prefix]",
errorMessage: "Une erreur est survenu",
mobile: true,
connectedBots: true
})

bot.onMessage()
bot.loadCommands(`./commands/`)

bot.status({
    text:"Codé par Craby Rubis#6666",
    type:"PLAYING",
    status:"online",
    time: 12
  })

bot.variables({
    prefix: "!",
    msg: "",
    icon: "",
    usertag: "",
    channel: ""

})