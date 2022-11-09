module.exports.config = {
  name: "meta",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BotolBaba",
  description: "Simple Banglish Ai Chatbot",
  commandCategory: "Ai Robot",
  usages: "/meta [typeinBanglish]",
  cooldowns: 2,
  dependencies: {"axios" : ""}
};
module.exports.run = async({api, event, args}) => {
	
	const axios = require('axios');
	
if (args.join() == "") { 
	  return api.sendMessage Pari Na Bolun.`, event.threadID, event.messageID)}
	
	else {
		let uint = encodeURI(args.join(' '));
	const res = await axios.get(`https://simsimi.info/api/?text=${uint}&lc=bn`);
	var d1 = res.data.message
	return api.sendMessage(`${d1}`, event.threadID, event.messageID)
	
	}
		
	
	
}