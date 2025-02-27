const btnRed = document.getElementById("red-button");
let newMessage = document.getElementById("text-message");

let messages = ["DO NOT PRESS","*Ahem* DO NOT PRESS", "...you pressed it again. Okay punk, press it again.",
    "Yeah, that's it. Come on, one more time.", "Again.", "Do it.",
    "Okay, now you've had your fill. Stop clicking.", "You see, this is why we can't be friends",
    "You're just too selfish.", "Grr...now you've asked for it. Do NoT pReSs ThE bUtToN!",
    "You seem to be immune to my mind control.", "Time for Plan B. Press it. You know you want to.",
    "MwaHAHAHAH! Now let's see you press it! LOSER!", "...this displeases me.",
    "HA! I have replaced the button with this penguin. Now what are you going to do?", "...I hate you.",
    "In that 'cut off your head with a toothbrush', kind of way.", "Quick! What's that behind you!?", 
    "Which one is it? Not so smart now, are ya?", "You're a clever one. Time for Round 2.", "HAHAHAHAHAH!",
    "...", "Okay Okay. You can press the button. I don't care.", "No really I don't care anymore.", 
    "In fact I lost interest a while ago", "I'm doing this just to entertain you...you know that right?", "Really.",
    "Do you like cartoons?", "...and paint?", "Cartoons and paint?", "Well you should.", "Pick a color", "Green perfect",
    "Press the red button", "Press the green button", "Press the blue button", "See, you just can't trust me. Or can you?",
    "You know, I'm glad we get to spend so much time together.", "Doesn't it make you want to stop clicking big red buttons?",
    "No seriously", "Look deep inside you.", "Deeper", "DEEPER!", "What if I told you that the next time you press the button, the world will explode?",
    "See. You could have been dead right there.", "And there.", "....", "I'm starting to think you have a disease of some sort.....",
    "Yup.", "Diseased.", "You know, eventually I'll stop letting you get away with this.", "The world is going to explode and all you care is pressing buttons",
    "Okay, this time the world will explode. I guarantee.", "BOOM! You're dead.", "That wasn't very smart now was it?", "Everyone is dead. Even you.",
    "I'm not. I'm just text", "But you're dead.", "Ha! Dead-face!", "Stop clicking.", "Have I ever told you how much I hate you?", "Well I do.", 
    "I'm gonna start talking upside down if you click one more time", "HA! can't read me now, can you?", "What? You didn't want to read me anyway?", 
    "Well then, I'll show you!", "You really are stubborn", "Stop clicking please.", "See look you have reduced me to begging. So please stop.", "PLEASE!!!",
    "I'll give you a nickle", "Dime?", "Quarter?", "Aww come on! Just stop!", "That does it! Time to unleash my master plan!", "BEHOLD! The awesome power of animation!",
    "H8!", "Let's get funky!", "I'll be you're starting to wonder why you've been doing this for so long.", "Like jeez, all you've been doing is clicking a red button",
    "How lame is that?", "But there is a bonus to all of this", "But it's a secret. So I can't tell you.", "I got you going didn't I?",
    "You should've seen the look on your face! HA!", "But seriously, there is a secret. There's been one the whole time.", "You've been busy clicking away at this big red button...",
    "...when all the while a little white button has watched your every move", "MWAHAHAHAHAH!", "HAHAHAH!", "BWHAHAHAH!","MWHAAAAH!", "HAHA!", "hehe", "lol",
    "rofl", "and so on so forth", "...", "*whistles*", "Find it yet?", "BRB 97"
];
let index = 0;

btnRed.onclick = function(){
    newMessage.textContent = messages[index];
    index = (index + 1) % messages.length;
}