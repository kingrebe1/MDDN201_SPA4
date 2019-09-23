let dictionary = [
	{word: "apple", emoji: "🍎"},
	{word: "cat", emoji: "🐈"}, 
	{word: "ancient", emoji: "⌛️"},
	{word: "grudge", emoji: "😡"},
	{word: "break to", emoji: "→"},
	{word: "new", emoji: "🆕"},
	{word: "mutiny", emoji: "🤼‍♂️"},
	{word: "civil", emoji: "👫👭👬"},
	{word: "blood", emoji: "🔴💧"},
	{word: "piteous", emoji: "😢"},
	{word: "death", emoji: "😵"},
	{word: "bury", emoji: "⚰️"},
	{word: "parents", emoji: "👫"},
	{word: "strife", emoji: "🤼‍♂️"},
	{word: "fearful", emoji: "😰"},
	{word: "love", emoji: "❤️"},
	{word: "continuance", emoji: "🔃"},
	{word: "rage", emoji: "🤬"},
	{word: "childrens", emoji: "👧👦"},	
	{word: "end", emoji: "🔚"},	
	{word: "naught", emoji: "0️⃣"},
	{word: "now", emoji: "⌚️"},
	{word: "hour", emoji: "⏳"},
	{word: "hours", emoji: "⏳⏳"},
	{word: "traffic", emoji: "🤝💼"},
	{word: "stage", emoji: "🎭🏟"},
	{word: "hands", emoji: "🤲"},
	{word: "unclean", emoji: "☢️"},
	{word: "fatal", emoji: "💀"},
	{word: "foes", emoji: "👿👿"},
	{word: "pair", emoji: "👥"},
	{word: "star", emoji: "✨"},
	{word: "lovers", emoji: "💏"},
	{word: "life", emoji: "😵"},
	{word: "swords", emoji: "⚔️"},
	{word: "sword", emoji: "⚔️"},
	{word: "bucklers", emoji: "💠"},
	{word: "house", emoji: "🏠"},
	{word: "households", emoji: "🏠🏠"},
	{word: "dignity", emoji: "💰👑🏆"},
	{word: "word", emoji: "🗣"},
	{word: "not", emoji: "🚫"},
	{word: "dog", emoji: "🐕"},
	{word: "runn'st", emoji: "🏃‍♂️"},
	{word: "run", emoji: "🏃‍♂️"},
	{word: "Verona", emoji: "⛪️🌉🇮🇹"},
	{word: "carry", emoji: "🛄"},
	{word: "man", emoji: "👨"},
	{word: "maid", emoji: "👩"},
	{word: "maids", emoji: "👩👩"},
	{word: "quarrel", emoji: "🤼‍♂️"},
	{word: "masters", emoji: "👴👴"},
	{word: "men", emoji: "👨👨"},
	{word: "one", emoji: "1️⃣"},
	{word: "fought", emoji: "🥊"},
	{word: "head", emoji: "👤"},
	{word: "heads", emoji: "👤"},
	{word: "flesh", emoji: "🥩"},
	{word: "fish", emoji: "🐟"},
	{word: "poor", emoji: "🚫💰"},
	{word: "tool", emoji: "🗡️"},
	{word: "two", emoji: "2️⃣"},
	{word: "pretty", emoji: "💁‍♀️"},
	{word: "fish", emoji: "🐟"},
	{word: "fish", emoji: "🐟"},
	{word: "weapon", emoji: "🗡"},
	{word: "weapons", emoji: "🗡⚔️🔫"},
	{word: "thee", emoji: "☞"},
	{word: "thou", emoji: "☞"},
	{word: "you", emoji: "☞"},
	{word: "ay", emoji: "👍"},
	{word: "Ay", emoji: "👍"},
	{word: "take", emoji: "🎬"},
	{word: "Take", emoji: "🎬"},
	{word: "maidenheads", emoji: "👩👩👤"},
	{word: "ears", emoji: "👂"},
	{word: "patient", emoji: "🙂"},
	{word: "strive", emoji: "🏋️‍♀️"},
	{word: "mend", emoji: "🤕"},
	{word: "scene", emoji: "🏞"},
];
	
let userInput = document.getElementsByClassName('textField')[0];
let output = document.getElementsByClassName('textField')[1];	

function wordTranslate(wordToTranslate){
	// https://stackoverflow.com/questions/29883892/other-ways-to-remove-or-ignore-punctuation-in-js-besides-regex
	let wordWithoutPunction = wordToTranslate.match(/[a-z]+/gi);
	let translation=dictionary.filter(words => {
		return (words.word == wordWithoutPunction)
	});
	if(translation.length == 0) {
		return wordToTranslate;
	}
	return wordToTranslate.replace(wordWithoutPunction, translation[0].emoji);
}

function strings(){
	let split=userInput.value.split(" ");
	let result = split.map(wordTranslate);
	output.value = result.join(" ");
}

document.getElementsByClassName('textField')[0].onkeyup = strings

userInput.value = `Two households, both alike in dignity,
In fair Verona, where we lay our scene,
From ancient grudge break to new mutiny,
Where civil blood makes civil hands unclean.
From forth the fatal loins of these two foes
A pair of star-cross'd lovers take their life;
Whose misadventur'd piteous overthrows
Doth with their death bury their parents' strife.
The fearful passage of their death-mark'd love,
And the continuance of their parents' rage,
Which, but their children's end, naught could remove,
Is now the two hours' traffic of our stage;
The which if you with patient ears attend,
What here shall miss, our toil shall strive to mend.`;
strings();
// 	document.getElementsByClassName('textField')[1].value =
// 	document.getElementsByClassName('textField')[0].value.split();
// }


