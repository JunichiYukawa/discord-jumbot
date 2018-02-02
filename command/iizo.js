// IIZO Reaction.
exports.execute = function () {
    var rand = Math.floor(Math.random() * 20);
    if (rand < 10) {
        return 'いいぞ。';
    }
    if (rand < 15) {
        return 'もっと　がんばらないと　だめだぞ。';
    }
    if (rand < 17) {
        return 'いちりゅうの　ごるふぁーに　なれ';
    }
    if (rand < 18) {
        return 'もうめんどうみきれないよ。でも　あきらめちゃだめだぞ。';
    }
    var rareIndex = Math.floor(Math.random() * RARE_REACTIONS.length);
    return RARE_REACTIONS[rareIndex];
}

const RARE_REACTIONS = [
    'うが　いいんじゃないかな。',
    'うみから　うとう。',
    'うみきれないよ。',
    'かくかあ　きいて　くれなくちゃ　あと゛は゛いすのしようか゛',
    'かぜのきも　うとう。',
    'かぜを　つかおう。',
    'きがえよう。',
    'きがじゃまなの。',
    'きがじゃまなので　えーい',
    'きがじゃまなので　かったぞ。',
    'すぴーど　すぴーど　すぴーど',
    'だめでとうございます。',
    'ちょくせつ　ぐんか。3009000',
    'ちょくせに。',
    'で　　り',
    'ないよ。',
    'なぞ。',
    'なにを　かんがえよう。',
    'なんとたこに　た゛したほうがいいそ゛。',
    'なんどめ',
    'なんども　きをよけてうとう。むり',
    'なんどもお。',
    'なんともすの゛てるてる',
    'はつよめに。',
    'ぷにけられる。',
    'むう　ら　うとう。',
    'むらか',
    'むらから　うとう。',
    'もうかくす。',
    'もうめすて。',
    'もうめんど　はよ',
    'もうめんどうみきれよう。',
    'もすに33yだからPWをつかおう。',
    'もっとはやく　きいたな。',
    'もっとはやく　きいて　くれなくちゃ　あ　れ゛　をつかおう。',
    'もっとはやく　きいて　くれん゛',
    'もっとはやく　きいてくれなくちゃ　あとめし',
    'もっとはやく　き゛か゛',
    'もっとはやくたな。　をつかおう。',
    'もっとはやめし。',
    'もっとはやれ゛。',
    'もめし。',
    'もんとに。',
    'やく　きいてくれなくちゃ　あどは',
];