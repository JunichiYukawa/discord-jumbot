// MHW nikushitsu.
const Discord = require('discord.js');

const monster_key = require('../util/monster_key');
const monster_info = require('../json/monster_info.json');

exports.run = function (client, message, args) {
    if (args == null || args.length == 0) {
        return;
    }

    for (var i = 0; i < args.length; i++) {
        if (/^(つきむら|月村|つっきー)(さん|くん|君|氏)?$/.test(args[i])) {
            message.channel.sendMessage('おやだまで　ひたいを　なぐろう。');
            break;
        }
        if (/^はぢ(さん)?$/.test(args[i])) {
            message.channel.sendMessage('なすで　なぐろう。');
            break;
        }

        const jsonKey = monster_key.getKey(args[i]);
        if (jsonKey == null) {
            message.channel.sendMessage(args[i] + 'というもんすたーは　しらないぞ。');
            break;
        }

        const img = monster_info[jsonKey].nikushitsu;
        if (img == null || img == '') {
            message.channel.sendMessage(monster_info[jsonKey].name + 'のにくしつは　まだないぞ。\nはんたーのーとのすくしょを　とってもらえると　たすかるぞ。');
            break;
        }

        const embed = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .setTitle(monster_info[jsonKey].name + 'の肉質情報だぞ。')
            .setImage('attachment://image.jpg')
            .attachFile('./image/' + monster_info[jsonKey].nikushitsu, 'image.jpg');

        message.channel.sendEmbed(embed);
    }
}
