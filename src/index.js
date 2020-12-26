const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();

const giphyURL = "https://api.giphy.com/v1/stickers/search";
const giphyToken = "&api_key=VeKXOJy95MA7XhC1vEJjIkXaJMltO8VG&limit";
const searchParam = "?q=hello";

client.on('ready',() => {
	console.log("Musika Booted but !ready")
});

client.on('message',(msg) =>{
	if(msg.content === "!avatar"){
		msg.reply(msg.author.displayAvatarURL());
	}
	if(msg.content === "!hello"){
		console.log('recived msg')
		let json = getJson(giphyURL+searchParam+giphyToken);
		json.then((jsResponse) => {
			let data = jsResponse.data.data;
			let randomIdx = Math.floor(Math.random() * data.length);
			let url = data[randomIdx].images.original.url;
			let helloAttc = new Discord.MessageAttachment(url);
			msg.reply("Hi");
			msg.reply(helloAttc);
		});
	}
});

client.login('NzkwOTQwMjI4MDQyNzUyMDEx.X-H6fQ.sVMJXdfx1YCASBTopOBkppcU81w');

async function getJson(url){
	console.log(url)
	const jsonreq = await axios.get(url);
	return jsonreq;
}