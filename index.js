const Discord = require('discord.js');
const bot = new Discord.Client();

const token = '';

const PREFIX = 'atomicity!';

var version = '1.1.0';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'hello':
            message.reply('Hello Friend!' + " :smile: ");
        break;
        case 'ping':
            message.channel.sendMessage('pong!');
        break;
        case 'realmeye':
            message.channel.sendMessage('https://www.realmeye.com/guild/Atomicity');
        break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version ' + version);
            }else if(args[1] === 'admin'){
                message.channel.sendMessage('CISPRASHNT - flux');
            }else{
                message.channel.sendMessage('Invalid Argument!');
            }
        break;
        case 'clear':
            if(!args[1]) return message.reply('Error');
            message.channel.bulkDelete(args[1]);
        break;  
        case 'me':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username)
            .addField('Version', version)
            .addField('Current Server', message.guild.name)
            .setColor(0xff0000)
            .setThumbnail(message.author.avatarURL)
            .setFooter('For any err contact CISPRASHNT')
            message.channel.sendEmbed(embed);
        break;
        case 'help':
            message.channel.sendMessage('Hello,\n\tThis is bot ATOMICITY by CISPRASHNT - flux\n\nPrefix is \n\t atomicity!\n\nPossible Commands are : \nhelp\nhello\nping\nrealmeye\ninfo\n\t\tadmin\n\t\tversion\nme\n\nExample: atomicity!me');
        break;
               
    }
})



bot.login(token);