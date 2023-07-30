const { Telegraf } = require("telegraf");
const express = require("express");
const app = express();
const { waifu,
        ayaka,
        bocchi,
        bunny,
        genshin,
        osakana } = require("zeev.io");
const Token = process.env.BOT_TOKEN || "6268859723:AAHcb3ZiN2WQapIXWDRnhtamHL06C1tstT8";
const bot = new Telegraf(Token);
const port = process.env.PORT || 8080;

app.listen(port,() => {
  console.log("Open http://localhost:"+port);
});

app.get("/",async(req,res) => {
  res.send("<h1>Bot ini sudah berjalan silahkan coba</h1>");
});

bot.start((ctx) => {
  ctx.reply("Hai saya adalah bot.");
});

bot.command("menu", (ctx) => {
  var messMenu = `MENU BOT \n
    Nsfw Menu\n
   /aiwaifu -> Gambar nsfw AI
   /ayaka -> Gambar cosplay nsfw Kamisato Ayaka
   /bocchi -> Gambar cosplay nsfw bocchi
   /bunny -> Gambar cosplay nsfw Bunny Girls
   /genshin -> Gambar nsfw Genshin impact
   /osakana -> Gambar cosplay nsfw Osakana Chan
                  `;
  ctx.reply(messMenu);
});

bot.command("aiwaifu", (ctx) => {
  waifu().then( data => {
    var result = data.url;
    bot.telegram.sendPhoto(ctx.chat.id, result,{caption:"Kamisato Ayaka"});
  });
});

bot.command("ayaka", (ctx) => {
  ayaka().then( data => {
    var result = data.url;
    bot.telegram.sendPhoto(ctx.chat.id, result,{caption:"Kamisato Ayaka"});
  });
});

bot.command("bocchi", (ctx) => {
  bocchi().then( data => {
    var result = data.url;
    bot.telegram.sendPhoto(ctx.chat.id, result,{caption:"Bocchi"});
  });
});

bot.command("bunny", (ctx) => {
  bunny().then( data => {
    var result = data.url;
    bot.telegram.sendPhoto(ctx.chat.id, result,{caption:"Bunny Girls"});
  });
});

bot.command("genshin", (ctx) => {
  genshin().then( data => {
    var result = data.url;
    bot.telegram.sendPhoto(ctx.chat.id, result,{caption:"Genshin impact"});
  });
});

bot.command("osakana", (ctx) => {
  osakana().then( data => {
    var result = data.url;
    bot.telegram.sendPhoto(ctx.chat.id, result,{caption:"Osakana Chan"});
  });
});

bot.on("message",async(ctx) => {
  var user = ctx.from.first_name;
  var mess = ctx.message.text;
  var result = user + " : " + mess;
  console.log(result);
});

bot.launch();
