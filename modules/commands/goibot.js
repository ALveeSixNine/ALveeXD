 const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "....",
  description: "goibot",
  commandCategory: "game",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["-আ'স'সা'লা'মু আ'লা'ই'কু'ম 🤗 -আমি SagorXALvee 🥀🤖  বট বলছি!বলেন আপনার কি হেল্প করতে পারি 🖤"];
  var rand = tl[Math.floor(Math.random() * tl.length)]


   if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ngại lắm thôi yêu admin của bot nhé :))", threadID);
  };

   if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("dạ" ,threadID);
  };


  
   if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "chào")) {
    return api.sendMessage("আসসালামু আলাইকুম সাগর এর বট বলছি কিভাবে সাহায্য করতে পারি, হ্যা বলো শুনছি, হ্যা বন্ধু বলো, সাগর এর পক্ষ থেকে ভালোবাসা অবিরাম🥰❤️, আমি তোমাকে ভালোবাসি, আমাকে কেন ডেকেছো?, তোমার দিনটি আজ শুভ হোক, সাগরের বট বলছি কি জানতে চাও আমার কাছে💔", threadID);
  };



  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }