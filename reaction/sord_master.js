// Sord Master.
exports.isTarget = function (message) {
    return /ソードマスター/.test(message.content);
}

exports.run = function (client, message) {
    message.channel.sendMessage(REACTIONS[Math.floor(Math.random() * REACTIONS.length)]);
}

const REACTIONS = [
    "うむ",
    "承知"
]
