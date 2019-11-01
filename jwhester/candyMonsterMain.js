"use strict";

//TODO: place image on screen with text
//TODO: when boy or girl is picked create var that adds character name in dialog
//TODO: when boy or girl is picked create var that changes the story line choices
//TODO: add battle feature
//TODO: target data-value when certain choices are made
//TODO: add music
//TODO: add sound effects
//TODO: add story




var textElement = document.getElementById('text');//grabs the text
var optionButtonsElement = document.getElementById('option-buttons');//grabs the buttons
var state = {};
// var hero = prompt('What is your name?');

function startGameBoy() {
    state = {};
    showTextNode(1);
    document.getElementById("girl").style.display = "none";
    document.getElementById("boy").style.display = "block";
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    document.getElementById("mainScreen").className = "rpgui-container framed lvl1";
}
function startGameGirl() {
    state = {};
    showTextNode(1);
    document.getElementById("girl").style.display = "block";
    document.getElementById("boy").style.display = "none";
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    document.getElementById("mainScreen").className = "rpgui-container framed lvl1";
}
function endGame() {
    window.location.reload();
}

function showTextNode(textNodeIndex) {
    var textNode = textNodes.find(textNode => textNode.id === textNodeIndex);//grabs the text node
    textElement.innerText = textNode.text;//enters the text onto the screen
    while (optionButtonsElement.firstChild) {//removes buttons when not needed
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    textNode.options.forEach(option => {//grabs the option from the node
        if (showOption(option)) {
            var button = document.createElement('button');
            button.innerText = option.text;//adds text to button
            button.classList.add('rpgui-button', 'golden', 'btn');//adds class
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button);
        }
    });
}



function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}


function selectOption(option) {
    var nextTextNodeId = option.nextText;
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);
    if (nextTextNodeId <= -2){
        return endGame();
    }
    switch (nextTextNodeId) {
        case -1:
            document.getElementById("mainScreen").className = "rpgui-container framed gameOver";
            break;
        case 2:
            document.getElementById("mainScreen").className = "rpgui-container framed candyCorn";
            break;
        case 3.4:
            brutality.play();
            break;
        case 3.5:
            document.getElementById("mainScreen").className = "rpgui-container framed lvl1";
            break;
        case 6:
            document.getElementById("mainScreen").className = "rpgui-container framed lvl2";
            break;
        case 9:
            document.getElementById("mainScreen").className = "rpgui-container framed lvl3";
            break;
    }
}


var textNodes = [
    {
        id: -1,
        text: "You died.",
        options: [
            {
                text: "Restart Game",
                nextText: -2
            }
        ]
    },
    {
        id: -2,
        text: "",
        options: [
            {
                text: "Restart Game",
                nextText: -2
            }
        ]
    },
    {
        id: 1,
        text: "It's Halloween night and you find yourself trick or treating. The night has not gotten off to a good start, " +
            "because this is the eighth house in a row that does not have any candy.",
        options: [
            {
                text: "Try another house",
                nextText: 1.5
            },
            {
                text: "Move to the next street",
                nextText: 2
            }
        ]
    },
    {
        id: 1.5,
        text: "There's no candy here either! There has to be candy at another house.",
        options: [
            {
                text: "Move to the next street",
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: "As you come to the next street you are bewildered by the strange sight of a large 'human-like' piece of candy.  It notices you and begins to charge towards you. What will you do?",
        options: [
            {
                text: "Fight!",
                nextText: 3
            },
            {
                text: "Talk to the candy.",
                nextText: 2.1
            }
        ]

    },
    {
        id: 2.1,
        text: "The candy monster doesn't understand and takes you down in one swoop. That's what happens when you try to talk to monsters!",
        options: [
            {
                text: "You die.",
                nextText: -1
            }
        ]

    },
    {
        id: 3,
        text: "The candy closes in on you.  What do you do?",
        options: [
            {
                text: "Dodge",
                nextText: 3.1
            },
            {
                text: "Punch",
                nextText: 3.2
            },
            {
                text: "Kick",
                nextText: 3.1
            }
        ]
    },
    {
        id: 3.1,
        text: "You slip and fall, the candy bites your leg. You lost __ HP",
        options: [
            {
                text: "Stand and fight",
                nextText: 3
            }
        ]
    },
    {
        id: 3.2,
        text: "You punch the candy straight in the face. It stumbles backwards, and looks to be dazed. Do you take advantage of the situation, and attack or do you run away?",
        options: [
            {
                text: "Run away!",
                nextText: 3.3
            },
            {
                text: "FINISH HIM!",
                nextText: 3.4
            }
        ]
    },
    {
        id: 3.3,
        text: "As you start to run away your legs get tripped up because of your costume, and you fall to the ground.  The monster has recovered and proceeds to jump you. You were never heard from again ",
        options: [
            {
                text: "Die.",
                nextText: -1
            }
        ]
    },
    {
        id: 3.4,
        text: "You run full speed at the monster, and do a flying kick to the monsters face. The monster falls backwards and doesn't get back up. VICTORY!" +
            "You received a piece of candy for beating the monster! Victory is sweet but candy is sweeter.",
        options: [
            {
                text: "Take the candy and continue to the next street.",
                nextText: 3.5
            }
        ]
    },
    {
        id: 3.5,
        text: "You hear something towards the edge of town and you go to investigate. There's two potential areas that this sound is coming from which way do you go?",
        options: [
            {
                text: "A lighted sidewalk",
                nextText: 3.6
            },
            {
                text: "An alley",
                nextText: 4
            }
        ]
    },
    {
        id: 3.6,
        text: "You go down the lighted path but you don't see anything out of the ordinary. It would probably be best to go back",
        options: [
            {
                text: "Go back",
                nextText: 3.5
            },

        ]
    },
    {
        id: 4,
        text: "You cautiously enter the alley and there is indeed something there. A monster! " +
            "But you see something isn't right. It's stuck, being a bubblegum monster must be difficult. What do you do?",
        options: [
            {
                text: "Fight the monster",
                nextText: 4.1
            },
            {
                text: "Spare the monster",
                nextText: 4.3
            }
        ]
    },
    {
        id: 4.1,
        text: "The candy monster just sits there.  What do you do?",
        options: [
            {
                text: "Punch",
                nextText: 4.2
            },
            {
                text: "Kick",
                nextText: 4.2
            }
        ]
    },
    {
        id: 4.2,
        text: "Wow, you just mercilessly killed that poor helpless monster, maybe the real monster is you...",
        options: [
            {
                text: "Keep Going",
                nextText: 5
            }
        ]
    },
    {
        id: 4.3,
        text: "For your kindness and sparing the stuck monster, it gives you a special magical boost in it's last moments alive." +
            "You feel slightly saddened for the creature",
        options: [
            {
                text: "Consume the magical boost and continue on",
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: "You finally arrived on the last street of the town right at the edge of the forest. You spy a big cauldron shaped candy bowl sitting on a table on the porch. What do you do?",
        options: [
            {
                text: "Take a piece of candy",
                nextText: 5.1
            },
            {
                text: "Take the whole bowl",
                nextText: 5.1
            }
        ]
    }, //-------------BOSS FIGHT CITY-------------------
    {
        id: 5.1,
        text: "Hah it was a trap! You're ambushed by what seems to be a much larger candy monster. It takes a swipe at you and you lose __ HP. " +
            "You have no choice but to fight for your life",
        options: [
            {
                text: "FIGHT",
                nextText: 5.2
            },
        ]
    },
    {
        id: 5.2,
        text: "The candy is getting ready to attack again. What do you do?",
        options: [
            {
                text: "Dodge",
                nextText: 5.3
            },
            {
                text: "Punch",
                nextText: 5.4
            },
            {
                text: "Kick",
                nextText: 5.4
            }
        ]
    },
    {
        id: 5.3,
        text: "Your dodge was successful! There's an opening to attack, what will you do?",
        options: [
            {
                text: "Punch",
                nextText: 5.4
            },
            {
                text: "Kick",
                nextText: 5.4
            }
        ]
    },
    {
        id: 5.4,
        text: "Your hit landed and made the monster screech. The monster frenzies and haphazardly tries to slash you. Think fast!",
        options: [
            {
                text: "Dodge Again",
                nextText: 5.5
            },
            {
                text: "Block with your halloween prop",
                nextText: 5.6
            }
        ]
    },
    {
        id: 5.5,
        text: "Your dodge failed and you take twice the damage since the monster is frenzied. __ HP lost. What's your next move?",
        options: [
            {
                text: "Punch",
                nextText: 5.7
            },
            {
                text: "Kick",
                nextText: 5.7
            }
        ]
    },
    {
        id: 5.6,
        text: "You block the incoming swipe and your prop breaks but it took most of the damage for you. You only took half damage, __ HP. What's your next move?",
        options: [
            {
                text: "Punch",
                nextText: 5.7
            },
            {
                text: "Kick",
                nextText: 5.7
            }
        ]
    },
    {
        id: 5.7,
        text: "This hit as well! With that, the monster has crumpled to the ground in pain. You can tell one more hit and the monster is done for. What do you do?",
        options: [
            {
                text: "FINISH HIM",
                nextText: 5.8
            },
            {
                text: "Spare him",
                nextText: 5.9
            }
        ]
    },
    {
        id: 5.8,
        text: "With one final blow you killed the monster that ambushed you over a bowl of candy. Wow what a night it's turning out to be! Out of the corner of your eye you see something running to the tree line of the forest. " +
            "You have a feeling that it has to do something with this whole night being weird.",
        options: [
            {
                text: "Go into the forest",
                nextText: 6
            },

        ]
    },
    {
        id: 5.9,
        text: "It was a grave mistake to try to spare the monster, it takes a cheap shot and takes you down and you aren't able to recover.",
        options: [
            {
                text: "Don't trust monsters so easily",
                nextText: -1
            },

        ]
    }, //------------START FOREST--------------
    {
        id: 6,
        text: "You walk into the forest on a path but it splits almost immediately which way do you go?",
        options: [
            {
                text: "Left",
                nextText: 6.1
            },
            {
                text: "Right",
                nextText: 6.1
            }
        ]
    },
    {
        id: 6.1,
        text: "There seems to be candy bits and wrappers on the path. This has got to be the right direction to find out where all the candy in town went. " +
            "Maybe that hooded figure that ran into the forest knows.",
        options: [
            {
                text: "Track down the hooded figure",
                nextText: 6.2
            }
        ]
    },
    {
        id: 6.2,
        text: "You finally catch up to the hooded figure and you realize when they turn around that it's a pumpkin monster! What do you do next?",
        options: [
            {
                text: "Try to talk/ be reasonable",
                nextText: 6.3
            },
            {
                text: "FIGHT",
                nextText: 6.4
            }
        ]
    },
    {
        id: 6.3,
        text: "You try to talk to the pumpkin monster and ask it why the candy was being taken.... But the pumpkin starts to insult you! You don't take insults from no one!",
        options: [
            {
                text: "FIGHT",
                nextText: 6.4
            }
        ]
    },
    {
        id: 6.4,
        text: "The candy closes in on you.  What do you do?",
        options: [
            {
                text: "Dodge",
                nextText: 6.5
            },
            {
                text: "Punch",
                nextText: 6.6
            },
            {
                text: "Kick",
                nextText: 6.5
            }
        ]
    }, //------------FIX DIALOUGE FOR FIGHT-----------------------
    {
        id: 6.5,
        text: "You slip and fall, the candy bites your leg. You lost __ HP",
        options: [
            {
                text: "Stand and fight",
                nextText: 6.4
            }
        ]
    },
    {
        id: 6.6,
        text: "You punch the candy straight in the face. It stumbles backwards, and looks to be dazed. Do you take advantage of the situation, and attack or do you run away?",
        options: [
            {
                text: "Run away!",
                nextText: 6.7
            },
            {
                text: "FINISH HIM!",
                nextText: 6.8
            }
        ]
    },
    {
        id: 6.7,
        text: "As you start to run away your legs get tripped up because of your costume, and you fall to the ground.  The monster has recovered and proceeds to jump you. You were never heard from again ",
        options: [
            {
                text: "Die.",
                nextText: -1
            }
        ]
    },
    {
        id: 6.8,
        text: "You run full speed at the monster, and do a flying kick to the monsters face. The monster falls backwards and doesn't get back up. VICTORY!" +
            "You received a piece of candy for beating the monster! Victory is sweet but candy is sweeter.",
        options: [
            {
                text: "Take the candy and continue.",
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: "It's getting foggier the deeper you go into the forest without a sense of direction since you got nothing from that confrontation with the pumpkin monster."+
            " Suddenly you hear a scream, sounds like a kid in trouble! What are you going to do?",
        options: [
            {
                text: "Investigate",
                nextText: 7.5
            },
            {
                text: "Ignore it",
                nextText: 7.1
            }
        ]
    },// ------------FIX SHORT FIGHT----------
    {
        id: 7.1,
        text: "Having made your choice you come to realize that there's a faint glow in the distance, but suddenly the glow grows brighter and you realize that it's coming towards you!" +
            " It's another kind of pumpkin monster you notice a little too late as it attacks you. You lost __ HP. You have to fight back or this won't end well.",
        options: [
            {
                text: "Punch",
                nextText: 7.2
            },
            {
                text: "Kick",
                nextText: 7.2
            }
        ]
    },
    {
        id: 7.2,
        text: "Wow, you just mercilessly killed that poor helpless monster, maybe the real monster is you...",
        options: [
            {
                text: "Keep Going",
                nextText: 8
            }
        ]
    },
    {
        id: 7.5,
        text: "You think you found the source of the scream and they speak to you asking if you're going to hurt them too",
        options: [
            {
                text: "Of course not!",
                nextText: 7.6
            }
        ]
    },
    {
        id: 7.6,
        text:"The kiddo tells you about a monster that chased him into the forest and he eventually lost him but also got lost in the process."+
            " They thank you and give you an item before they head off back towards town after you gesture the way.",
        options: [
            {
                text: "Take the item and continue",
                nextText: 7.1
            },
        ]
    },  //--------------------FIX BOSS FIGHT FOREST--------------------
    {
        id: 8,
        text:"As the light fades from the pumpkins' eyes you realize you are not alone as you have provoked a very advanced looking pumpkin who you can only assume is superior to anything you've fought in this forest so far."+
            " It looks at you and is now rushing towards you. What do you do?",
        options: [
            {
                text: "FIGHT",
                nextText: 8.1
            },
        ]
    },
    {
        id: 8.1,
        text: "The candy is getting ready to attack again. What do you do?",
        options: [
            {
                text: "Dodge",
                nextText: 8.2
            },
            {
                text: "Punch",
                nextText: 8.3
            },
            {
                text: "Kick",
                nextText: 8.3
            }
        ]
    },
    {
        id: 8.2,
        text: "Your dodge was successful! There's an opening to attack, what will you do?",
        options: [
            {
                text: "Punch",
                nextText: 8.3
            },
            {
                text: "Kick",
                nextText: 8.3
            }
        ]
    },
    {
        id: 8.3,
        text: "Your hit landed and made the monster screech. The monster frenzies and haphazardly tries to slash you. Think fast!",
        options: [
            {
                text: "Dodge Again",
                nextText: 8.4
            },
            {
                text: "Block with your halloween prop",
                nextText: 8.5
            }
        ]
    },
    {
        id: 8.4,
        text: "Your dodge failed and you take twice the damage since the monster is frenzied. __ HP lost. What's your next move?",
        options: [
            {
                text: "Punch",
                nextText: 8.6
            },
            {
                text: "Kick",
                nextText: 8.6
            }
        ]
    },
    {
        id: 8.5,
        text: "You block the incoming swipe and your prop breaks but it took most of the damage for you. You only took half damage, __ HP. What's your next move?",
        options: [
            {
                text: "Punch",
                nextText: 8.6
            },
            {
                text: "Kick",
                nextText: 8.6
            }
        ]
    },
    {
        id: 8.6,
        text: "This hit as well! With that, the monster has crumpled to the ground in pain. You can tell one more hit and the monster is done for. What do you do?",
        options: [
            {
                text: "FINISH HIM",
                nextText: 8.7
            },
            {
                text: "Spare him",
                nextText: 8.8
            }
        ]
    },
    {
        id: 8.7,
        text: "With one final blow you killed the monster that ambushed you, so weird that pumpkins were so aggressive tonight!"+
            "You see a clearing in the distance now.",
        options: [
            {
                text: "Go to the clearing",
                nextText: 9
            },

        ]
    },
    {
        id: 8.8,
        text: "It was a grave mistake to try to spare the monster, it takes a cheap shot and takes you down and you aren't able to recover.",
        options: [
            {
                text: "Don't trust monsters so easily",
                nextText: -1
            },

        ]

    },  //----------------START CEMETERY-----------------
    {
        id: 9,
        text: "You walk towards the clearing and the closer you get the fog is lifting and you can now see it is a cemetery! What do you do?",
        options: [
            {
                text: "Leave",
                nextText: 9.9
            },
            {
                text: "Proceed",
                nextText: 9.1
            }
        ]
    },
    {
        id: 9.1,
        text: "You proceed into the cemetery slowly and as you enter you hear singing? "+
            "What could that be? As you draw closer to the song you can see a gathered group, it actually sounds like they're performing a seance. What are you going to do? ",
        options: [
            {
                text: "Sneak around them",
                nextText: 9.2
            },
            {
                text: "Confront them",
                nextText: 9.4
            }
        ]
    },
    {
        id: 9.2,
        text: "You start to sneak around them but a shiny object catches your eyes and it draws you to it that you can't help but pick it up and take it."+
            " But you're not the only one who notices it. You got caught!",
        options: [
            {
                text: "FIGHT",
                nextText: 9.4
            }
        ]
    },
    // {
    //     id: 9.3,
    //     text: "You try to talk to the pumpkin monster and ask it why the candy was being taken.... But the pumpkin starts to insult you! You don't take insults from no one!",
    //     options: [
    //         {
    //             text: "FIGHT",
    //             nextText: 9.4
    //         }
    //     ]
    // }, //----------------FIX MULTI ENEMY FIGHT---------------
    {
        id: 9.4,
        text: "These seancers turn to you and now it looks like it's 3 vs. 1 now. What're you going to do?",
        options: [
            {
                text: "Dodge",
                nextText: 9.5
            },
            {
                text: "Punch",
                nextText: 9.6
            },
            {
                text: "Kick",
                nextText: 9.5
            }
        ]
    },
    {
        id: 9.5,
        text: "You slip and fall, the seancers bites your leg. You lost __ HP",
        options: [
            {
                text: "Stand and fight",
                nextText: 9.4
            }
        ]
    },
    {
        id: 9.6,
        text: "You punch the seancers straight in the face. It stumbles backwards, and looks to be dazed. Do you take advantage of the situation, and attack or do you run away?",
        options: [
            {
                text: "Run away!",
                nextText: 9.7
            },
            {
                text: "FINISH HIM!",
                nextText: 9.8
            }
        ]
    },
    {
        id: 9.7,
        text: "As you start to run away your legs get tripped up because of your costume, and you fall to the ground.  The seancer has recovered and proceeds to jump you. You were never heard from again ",
        options: [
            {
                text: "Die.",
                nextText: -1
            }
        ]
    },
    {
        id: 9.8,
        text: "You run full speed at the seancers, and do a flying kick to the monsters face. The monster falls backwards and doesn't get back up. VICTORY!" +
            "You received a piece of candy for beating the monster! Victory is sweet but candy is sweeter.",
        options: [
            {
                text: "Take the candy and continue.",
                nextText: 10
            }
        ]
    },
    {
        id: 9.9,
        text: "What? You.... want to leave? You coward! The mission, the candy... twas all for nothing.",
        options: [
            {
                text: "Cowards way out",
                nextText: -1
            },

        ]

    },
    {
        id: 10,
        text: "Celebrating your victory the seancer beckons you to come closer to tell you something. "+
            "They tell you a very important message that will help you coming closer to the answer of who took all the candy in town. Then all of a sudden you hear a moaning growl coming from a grave nearby. What do you do?",
        options: [
            {
                text: "Try to unearth to help the person in need",
                nextText: 10.5
            },
            {
                text: "Ignore it",
                nextText: 10.1
            }
        ]
    },// ------------FIX SHORT FIGHT----------
    {
        id: 10.1,
        text: "Ignoring all that hub bub that could mean nothing but bad news all of a sudden you hear a new sound, whispering. You've been ambushed!",
        options: [
            {
                text: "FIGHT",
                nextText: 10.2
            },
        ]
    },
    {
        id: 10.2,
        text: "Wow, you just mercilessly killed that poor helpless monster, maybe the real monster is you...",
        options: [
            {
                text: "Punch",
                nextText: 10.6
            },
            {
                text: "Kick",
                nextText: 10.6
            }
        ]
    },
    {
        id: 10.5,
        text: "You got bit by a zombie! What did you think would be growling underground at a cemetery. Git gud noob.",
        options: [
            {
                text: "A zombie you shall be",
                nextText: -1
            }
        ]
    },
    {
        id: 10.6,
        text:"It only took one hit to take down that foolish creature, you feel yourself growing stronger with every fight. "+
            "The pitiful creature heeds one last warning about what you are to be facing very soon and the creature sounds sincere? Maybe you should take that advice to heart",
        options: [
            {
                text: "Take the advice and continue",
                nextText: 11
            },
        ]
    },  //--------------------FIX BOSS FIGHT CEMETERY--------------------
    {
        id: 11,
        text:"You reach the end of the cemetery and all of a sudden you get a shiver in your spine, that could only mean one thing, a boss like creature approaches you as you walk out of the gated cemetery. "+
            "You have a feeling that you cannot get around this creature, you're going to have to go through it",
        options: [
            {
                text: "FIGHT",
                nextText: 11.1
            },
        ]
    },
    {
        id: 11.1,
        text: "The candy is getting ready to attack again. What do you do?",
        options: [
            {
                text: "Dodge",
                nextText: 11.2
            },
            {
                text: "Punch",
                nextText: 11.3
            },
            {
                text: "Kick",
                nextText: 11.3
            }
        ]
    },
    {
        id: 11.2,
        text: "Your dodge was successful! There's an opening to attack, what will you do?",
        options: [
            {
                text: "Punch",
                nextText: 11.3
            },
            {
                text: "Kick",
                nextText: 11.3
            }
        ]
    },
    {
        id: 11.3,
        text: "Your hit landed and made the monster screech. The monster frenzies and haphazardly tries to slash you. Think fast!",
        options: [
            {
                text: "Dodge Again",
                nextText: 11.4
            },
            {
                text: "Block with your halloween prop",
                nextText: 11.5
            }
        ]
    },
    {
        id: 11.4,
        text: "Your dodge failed and you take twice the damage since the monster is frenzied. __ HP lost. What's your next move?",
        options: [
            {
                text: "Punch",
                nextText: 11.6
            },
            {
                text: "Kick",
                nextText: 11.6
            }
        ]
    },
    {
        id: 11.5,
        text: "You block the incoming swipe and your prop breaks but it took most of the damage for you. You only took half damage, __ HP. What's your next move?",
        options: [
            {
                text: "Punch",
                nextText: 11.6
            },
            {
                text: "Kick",
                nextText: 11.6
            }
        ]
    },
    {
        id: 11.6,
        text: "This hit as well! With that, the monster has crumpled to the ground in pain. You can tell one more hit and the monster is done for. What do you do?",
        options: [
            {
                text: "FINISH HIM",
                nextText: 11.7
            },
            {
                text: "Spare him",
                nextText: 11.8
            }
        ]
    },
    {
        id: 11.7,
        text: "With the monster's final breath they tell you that all the answers you seek are at the lake."+
            " This is it! You know where to go now, let's go get those answers!",
        options: [
            {
                text: "Go to the lake",
                nextText: 12
            },

        ]
    },
    {
        id: 11.8,
        text: "It was a grave mistake to try to spare the monster, it takes a cheap shot and takes you down and you aren't able to recover.",
        options: [
            {
                text: "Don't trust monsters so easily",
                nextText: -1
            },

        ]

    }, //------------START LAKE-----------------
    {
        id: 12,
        text: "As you're walking towards the lake you see the sky start to change, dawn is approaching and you're in serious trouble now, you were supposed to be home HOURS ago."+
            " As you're planning what to say when you get home you suddenly trip and fall. You pick yourself back up and try to see what you tripped over. It's a weird looking item and you're not too sure what it is. "+
            "While your curiosity has the best of you you feel something breath down the back of your neck. There's something behind you!",
        options: [
            {
                text: "Try to reason",
                nextText: 12.1
            },
            {
                text: "FIGHT",
                nextText: 12.2
            }
        ]
    },
    {
        id: 12.1,
        text: "You start to talk to the creature trying to tell them it's been a long night and you just need answers, and they do have an answer! "+
            "The item you just picked up is an ancient weapon that can vanquish any enemy, even magical ones. But that's all you're getting out of them and now they're angry because you won't give it back.",
        options: [
            {
                text: "FIGHT",
                nextText: 12.2
            }
        ]
    },  //----------------FIX FIGHT---------------
    {
        id: 12.2,
        text: "You're going to have to fight in order to protect yourself and you hear some muffled sound too? What're you going to do?",
        options: [
            {
                text: "Dodge",
                nextText: 12.5
            },
            {
                text: "Punch",
                nextText: 12.6
            },
            {
                text: "Kick",
                nextText: 12.5
            }
        ]
    },
    {
        id: 12.5,
        text: "You slip and fall, the creature bites your leg. You lost __ HP",
        options: [
            {
                text: "Stand and fight",
                nextText: 12.4
            }
        ]
    },
    {
        id: 12.6,
        text: "You punch the creature straight in the face. It stumbles backwards, and looks to be dazed. Do you take advantage of the situation, and attack or do you run away?",
        options: [
            {
                text: "FINISH HIM!",
                nextText: 12.8
            }
        ]
    },
    {
        id: 12.8,
        text: "You run full speed at the creature, and do a flying kick to the monsters face. The monster falls backwards and doesn't get back up. VICTORY!" +
            "You received a piece of candy for beating the monster! Victory is sweet but candy is sweeter.",
        options: [
            {
                text: "Take the candy and continue.",
                nextText: 13
            }
        ]
    },
    {
        id: 13,
        text: "You remember you heard a muffled sound when this all began and you call out to see if you can hear it again. They respond with more muffles."+
            " You eventually find a kid tied up to one of the trees near the lake and their eyes are filled with fear. What are you going to do?",
        options: [
            {
                text: "Try to interrogate",
                nextText: 13.5
            },
            {
                text: "Rescue the kid",
                nextText: 13.1
            }
        ]
    },
    {
        id: 13.1,
        text: "The kid thanks you for rescuing them and proceeds to tell you what has happened and that they've heard that it's something evil at the docks that has caused all of tonight's chaos. "+
            "You take that as your sign to go to the docks to settle this once and for all",
        options: [
            {
                text: "Go to the Docks",
                nextText: 14
            },
        ]
    },
    {
        id: 13.5,
        text: "Wow, you would rather get answers than just being a kind person and trying to save the kid. He's not going to tell you anything now",
        options: [
            {
                text: "You're inhuman",
                nextText: -1
            }
        ]
    },
    //--------------------FIX BOSS FIGHT LAKE--------------------
    {
        id: 14,
        text:"You reach the docks but you don't see anyone yet so you call out to provoke this evil being. Your wish is granted when the thing appears in front of you towards the end of the dock. "+
            "You smart off to it and ask 'why the candy?' You get the reply, 'don't you recognize me... friend?' You're taken aback in horror, it's your friend River, who drowned in this lake a year ago today. "+
            "River says 'I just want revenge on all who ignored my cries for help and just sat there eating candy as I went under, now it's time to pay' ",
        options: [
            {
                text: "FIGHT",
                nextText: 11.1
            },
        ]
    },
    {
        id: 14.1,
        text: "River is getting ready to attack. What do you do?",
        options: [
            {
                text: "Dodge",
                nextText: 14.2
            },
            {
                text: "Punch",
                nextText: 14.3
            },
            {
                text: "Kick",
                nextText: 14.3
            }
        ]
    },
    {
        id: 14.2,
        text: "Your dodge was successful! There's an opening to attack, what will you do?",
        options: [
            {
                text: "Punch",
                nextText: 14.3
            },
            {
                text: "Kick",
                nextText: 14.3
            }
        ]
    },
    {
        id: 14.3,
        text: "Your hit landed and made the River yell. He frenzies and haphazardly tries to slash you. Think fast!",
        options: [
            {
                text: "Dodge Again",
                nextText: 14.4
            },
            {
                text: "Block with your newly acquired item you tripped on",
                nextText: 14.5
            }
        ]
    },
    {
        id: 14.4,
        text: "Your dodge failed and you take twice the damage since the monster is frenzied. __ HP lost. What's your next move?",
        options: [
            {
                text: "Punch",
                nextText: 14.6
            },
            {
                text: "Kick",
                nextText: 14.6
            }
        ]
    },
    {
        id: 14.5,
        text: "You block the incoming swipe and it forcefully repels River and he stumbless backwards. What's your next move?",
        options: [
            {
                text: "Punch",
                nextText: 14.6
            },
            {
                text: "Kick",
                nextText: 14.6
            }
        ]
    },
    {
        id: 14.6,
        text: "This hit as well! With that, River has crumpled to the ground in pain. You can tell one more hit and River is done for. What do you do?",
        options: [
            {
                text: "FINISH HIM",
                nextText: 14.7
            },
            {
                text: "Spare him",
                nextText: 14.8
            }
        ]
    },
    {
        id: 14.7,
        text: "With River's final breath he says he forgives you and hands you one last piece of candy",
        options: [
            {
                text: "Go to the clearing",
                nextText: 15
            },

        ]
    },
    {
        id: 14.8,
        text: "Are you absolutely sure?",
        options: [
            {
                text: "I'm sure",
                nextText: 14.9
            },

        ]

    },
    {
        id: 14.9,
        text: "I can tell you haven't thought this through",
        options: [
            {
                text: "Nah I'm good",
                nextText: 14.95
            },

        ]

    },
    {
        id: 14.95,
        text: "River tries one last time to lunge at you but trips and falls right onto your ancient item which turns out to be a magical sword. River dies again by your hand",
        options: [
            {
                text: "Way to go, you killed him again...",
                nextText: 15
            },

        ]

    },
    {
        id: 15,
        text: "Welp now you know why there was no candy. Are you happy now? You eat that last piece of candy",
        options: [
            {
                text: "The End",
                nextText: -1
            },

        ]

    },
];

// startGame();