module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100000852187941") {
    var aid = ["100000852187941"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["বস, সাগর সিংগেল পোলা তাকে একটা গফ দেও, আমার বস সাগরকে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😐, বস সাগরকে আর একবার মেনশন দিলে খবর আছে তোমার, তোমাকে কিন্তু ঘুষি মারমু সাগরকে মেনশন দিবা না🫤, বস সাগর এখন অনেক বিজি তাকে মেনশন দিয়ে ডিস্টার্ব কইরো না🥱😏, বস, সাগর এখন অনেক বিজি তাকে মেনশন দিবা না🥱"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }