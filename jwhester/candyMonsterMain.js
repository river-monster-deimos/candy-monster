"use strict";

//TODO: add battle music
//TODO: add sound effects





var textElement = document.getElementById('text');//grabs the text
var optionButtonsElement = document.getElementById('option-buttons');//grabs the buttons
var health = document.getElementById("hp-bar");
var monster = document.getElementById("monster-bar");
var exp = document.getElementById("exp-bar");
var state = {};





function startGameBoy() {
    state = {};
    themeSong.pause();
    lvl1.play();
    showTextNode(1);
    document.getElementById("girl").style.display = "none";
    document.getElementById("boy").style.display = "block";
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    document.getElementById("mainScreen").className = "rpgui-container framed lvl1";
}
function startGameGirl() {
    state = {};
    themeSong.pause();
    lvl1.play();
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
    if (textNodes.id === 1){
        themeSong.pause();
        lvl1.play();
    }
    if (nextTextNodeId <= -2){
        return endGame();
    }
    switch (nextTextNodeId) {
        case -1:
            document.getElementById("mainScreen").className = "rpgui-container framed gameOver";
            break;
        case 2:
            document.getElementById("monster").className = "rpgui-container framed candyCorn";
            document.getElementById("monster-bar").className = "rpgui-progress purple";
            break;
        case 3.1:
            RPGUI.set_value(health,0.7);
            break;
        case 3.2:
            RPGUI.set_value(monster,0.5);
            break;
        case 3.4:
            RPGUI.set_value(monster,0);
            RPGUI.set_value(health,1);
            RPGUI.set_value(exp,.3);

            break;
        case 3.5:
            document.getElementById("monster").className = "rpgui-container framed monsterHP";
            document.getElementById("monster-bar").className = "rpgui-progress purple monsterHP";
            RPGUI.set_value(monster,1);
            break;
        case 4:
            document.getElementById("monster").className = "rpgui-container framed gum";
            document.getElementById("monster-bar").className = "rpgui-progress purple";
            break;
        case 4.2:
            RPGUI.set_value(monster,0);
            break;
        case 5:
            document.getElementById("monster").className = "rpgui-container framed monsterHP";
            document.getElementById("monster-bar").className = "rpgui-progress purple monsterHP";
            RPGUI.set_value(exp,.6);
            RPGUI.set_value(monster,1);
            break;
        case 5.1:
            document.getElementById("monster").className = "rpgui-container framed boss1";
            document.getElementById("monster-bar").className = "rpgui-progress purple";
            RPGUI.set_value(monster,1);
            RPGUI.set_value(health,0.8);
            break;
        case 5.4:
            RPGUI.set_value(monster,0.8);
            break;
        case 5.5:
            RPGUI.set_value(health,0.5);
            break;
        case 5.6:
            RPGUI.set_value(health,0.2);
            break;
        case 5.7:
            RPGUI.set_value(monster,0.2);
            break;
        case 5.8:
            document.getElementById("monster").className = "rpgui-container framed monsterHP";
            document.getElementById("monster-bar").className = "rpgui-progress purple monsterHP";
            RPGUI.set_value(exp,0);
            RPGUI.set_value(monster,1);
            RPGUI.set_value(health,1);
            break;
        case 6:
            document.getElementById("mainScreen").className = "rpgui-container framed lvl2";
            lvl1.pause();
            lvl2.play();
            break;
        case 6.2:
            document.getElementById("monster").className = "rpgui-container framed pumpkin1";
            document.getElementById("monster-bar").className = "rpgui-progress purple";
            break;
        case 6.5:
            RPGUI.set_value(health,0.8);
            break;
        case 6.8:
            document.getElementById("monster").className = "rpgui-container framed monsterHP";
            document.getElementById("monster-bar").className = "rpgui-progress purple monsterHP";
            RPGUI.set_value(exp,0.3);
            RPGUI.set_value(monster,1);
            RPGUI.set_value(health,1);
            break;
        case 7.1:
            document.getElementById("monster").className = "rpgui-container framed pumpkin2";
            document.getElementById("monster-bar").className = "rpgui-progress purple";
            break;
        case 7.2:
            document.getElementById("monster").className = "rpgui-container framed monsterHP";
            document.getElementById("monster-bar").className = "rpgui-progress purple monsterHP";
            RPGUI.set_value(exp,0.6);
            break;
        case 8:
            document.getElementById("monster").className = "rpgui-container framed boss2";
            document.getElementById("monster-bar").className = "rpgui-progress purple";
            break;
        case 8.3:
            RPGUI.set_value(monster,0.8);
            break;
        case 8.4:
            RPGUI.set_value(health,0.6);
            break;
        case 8.5:
            RPGUI.set_value(health,0.5);
            break;
        case 8.6:
            RPGUI.set_value(monster,0.2);
            break;
        case 8.7:
            document.getElementById("monster").className = "rpgui-container framed monsterHP";
            document.getElementById("monster-bar").className = "rpgui-progress purple monsterHP";
            RPGUI.set_value(exp,0);
            RPGUI.set_value(monster,1);
            RPGUI.set_value(health,1);
            break;
        case 9:
            document.getElementById("mainScreen").className = "rpgui-container framed lvl3";
            lvl2.pause();
            lvl3.play();
            break;
        case 9.1:
            document.getElementById("monster").className = "rpgui-container framed witches";
            document.getElementById("monster-bar").className = "rpgui-progress purple";
            break;
        case 9.5:
            RPGUI.set_value(health,0.8);
            break;
        case 9.8:
            RPGUI.set_value(monster,0);
            break;
        case 10:
            document.getElementById("monster").className = "rpgui-container framed monsterHP";
            document.getElementById("monster-bar").className = "rpgui-progress purple monsterHP";
            RPGUI.set_value(exp,0.2);
            RPGUI.set_value(monster,1);
            RPGUI.set_value(health,1);
            break;
        case 11:
            document.getElementById("monster").className = "rpgui-container framed skeleton";
            document.getElementById("monster-bar").className = "rpgui-progress purple";
            break;
        case 11.3:
            RPGUI.set_value(monster,0.7);
            break;
        case 11.4:
            RPGUI.set_value(health,0.6);
            break;
        case 11.5:
            RPGUI.set_value(health,0.5);
            break;
        case 11.7:
            document.getElementById("monster").className = "rpgui-container framed monsterHP";
            document.getElementById("monster-bar").className = "rpgui-progress purple monsterHP";
            RPGUI.set_value(exp,0);
            RPGUI.set_value(monster,1);
            RPGUI.set_value(health,1);
            break;
        case 12:
            document.getElementById("mainScreen").className = "rpgui-container framed lvl4";
            document.getElementById("monster").className = "rpgui-container framed fish";
            document.getElementById("monster-bar").className = "rpgui-progress purple";
            lvl3.pause();
            themeSong.play();
            break;
        case 12.5:
            RPGUI.set_value(health,0.8);
            break;
        case 12.6:
            RPGUI.set_value(monster,0.5);
            break;
        case 12.8:
            document.getElementById("monster").className = "rpgui-container framed monsterHP";
            document.getElementById("monster-bar").className = "rpgui-progress purple monsterHP";
            RPGUI.set_value(exp,0.2);
            RPGUI.set_value(monster,1);
            RPGUI.set_value(health,1);
            break;
        case 14:
            document.getElementById("monster").className = "rpgui-container framed river";
            document.getElementById("monster-bar").className = "rpgui-progress purple";
            break;
        case 14.3:
            RPGUI.set_value(monster,0.7);
            break;
        case 14.4:
            RPGUI.set_value(health,0.6);
            break;
        case 14.5:
            RPGUI.set_value(monster,0.5);
            break;
        case 14.6:
            RPGUI.set_value(monster,0.2);
            break;
        case 15:
            document.getElementById("characterScreen").className = "rpgui-container framed monsterHP";
            document.getElementById("monster-bar").className = "rpgui-progress purple monsterHP";
            RPGUI.set_value(exp,0);
            RPGUI.set_value(monster,1);
            RPGUI.set_value(health,1);
            break;
        case 16:
            document.getElementById("mainScreen").className = "rpgui-container framed end";
            document.getElementById("option-buttons").className = "credit-button";
            document.getElementById("text").style.display = "none";
            break;
        case 17:
            document.getElementById("mainScreen").className = "rpgui-container framed credits";
            document.getElementById("dialog-box").style.display = "none";
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
                text: "Sidestep",
                nextText: 3.1
            },
            {
                text: "Lunge-punch",
                nextText: 3.2
            },
            {
                text: "Drop-kick",
                nextText: 3.1
            }
        ]
    },
    {
        id: 3.1,
        text: "Your costume causes you to fall, the candy bites your leg.",
        options: [
            {
                text: "Stand and fight",
                nextText: 3.12
            }
        ]
    },
    {
        id: 3.12,
        text: "You dust yourself off, and are ready to act.",
        options: [
            {
                text: "Attack!",
                nextText: 3.2
            },
            {
                text: "Run away!",
                nextText: 3.3
            }
        ]
    },
    {
        id: 3.2,
        text: "Your punch makes a splat noise as it hits the candy, causing major damage. It stumbles backwards, and looks to be dazed. Do you take advantage of the situation and attack or do you run away?",
        options: [
            {
                text: "Run away!",
                nextText: 3.3
            },
            {
                text: "Bite it",
                nextText: 3.4
            }
        ]
    },
    {
        id: 3.3,
        text: "As you start to run away your legs get tripped up because of your costume, and you fall to the ground. The candy promptly recovers and bites you while you are getting up. You were never heard from again ",
        options: [
            {
                text: "Die.",
                nextText: -1
            }
        ]
    },
    {
        id: 3.4,
        text: "You bite the monster. It tastes amazing, your sugar-addicted mind cannot stop. There is nothing left. VICTORY!" +
            "The candy monster had a smaller piece of candy on it.",
        options: [
            {
                text: "Take candy and continue to the next street.",
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
        text: "The candy monster just sits there, unable to move.  What do you do?",
        options: [
            {
                text: "Step on it",
                nextText: 4.2
            },
            {
                text: "Kick it",
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
        text: "Hah it was a trap! You're ambushed by what seems to be a much larger candy monster. It takes a swipe at you and slices your arm. " +
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
        text: "The candy moves to swipe again. What do you do?",
        options: [
            {
                text: "Try to dodge",
                nextText: 5.3
            },
            {
                text: "Rush it",
                nextText: 5.4
            },
            {
                text: "Kick it center mass",
                nextText: 5.4
            }
        ]
    },
    {
        id: 5.3,
        text: "It swipes at you but misses. While it recovers, you sense an opportunity;",
        options: [
            {
                text: "Punch it",
                nextText: 5.4
            },
            {
                text: "Push it",
                nextText: 5.4
            }
        ]
    },
    {
        id: 5.4,
        text: "The monster recoils and starts swiping randomly. Think fast!",
        options: [
            {
                text: "Try to dodge",
                nextText: 5.5
            },
            {
                text: "Block with arms",
                nextText: 5.6
            }
        ]
    },
    {
        id: 5.5,
        text: "You try to avoid the swipe unsuccessfully. It hits your stomach, causing a sharp pain",
        options: [
            {
                text: "Left hook",
                nextText: 5.7
            },
            {
                text: "Uppercut",
                nextText: 5.7
            }
        ]
    },
    {
        id: 5.6,
        text: "The monster swipes but you block with your arms, protecting your body. The monster pulls back, what do you do?",
        options: [
            {
                text: "Left hook",
                nextText: 5.7
            },
            {
                text: "Uppercut",
                nextText: 5.7
            }
        ]
    },
    {
        id: 5.7,
        text: "Your punch misshapes the monster significantly. It stumbles to the ground and begins to reshape itself. What do you do?",
        options: [
            {
                text: "Eat it too!",
                nextText: 5.8
            },
            {
                text: "Spare it",
                nextText: 5.9
            }
        ]
    },
    {
        id: 5.8,
        text: "You bite it but it tastes expired! You spit it out immediately. Out of the corner of your eye you see something running to the tree line of the forest. " +
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
        text: "As hubris gets the better of you, you stand over the monster victoriously. It grabs your leg and pulls you into its mouth in a single motion",
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
        text: "You try to talk to the pumpkin monster and ask it why the candy was being taken.... But the pumpkin starts to insult you! You don't take insults from no one(you have a fragile ego)!",
        options: [
            {
                text: "FIGHT",
                nextText: 6.4
            }
        ]
    },
    {
        id: 6.4,
        text: "The monster closes in on you.  What do you do?",
        options: [
            {
                text: "Dodge",
                nextText: 6.5
            },
            {
                text: "Right hook",
                nextText: 6.6
            },
            {
                text: "Upper-cut",
                nextText: 6.5
            }
        ]
    }, //------------FIX DIALOUGE FOR FIGHT-----------------------
    {
        id: 6.5,
        text: "Your costume causes you to trip and fall backwards.",
        options: [
            {
                text: "Stand and fight",
                nextText: 6.4
            }
        ]
    },
    {
        id: 6.6,
        text: "You punch the pumpkin and it makes a incoherent pumpkin noises as it stumbles back, dazed. Do you take advantage of the situation, and attack or do you run away?",
        options: [
            {
                text: "Run away!",
                nextText: 6.7
            },
            {
                text: "Gut punch",
                nextText: 6.8
            }
        ]
    },
    {
        id: 6.7,
        text: "As you start to run away your legs get tripped up because of your costume, and you fall to the ground. The pumpkin recovers from its dazed state and tackles you. Its grip is too strong for you to break",
        options: [
            {
                text: "Die.",
                nextText: -1
            }
        ]
    },
    {
        id: 6.8,
        text: "You punch the monster through its center mass as hard as you can. Your fist pierces it, turning it into a jack-o-lantern. VICTORY!" +
            "The monster seems to have had a piece of candy inside of it.",
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
            " It's another kind of pumpkin monster you notice a little too late as it jumps towards you.",
        options: [
            {
                text: "Punch it",
                nextText: 7.2
            },
            {
                text: "tackle it",
                nextText: 7.2
            }
        ]
    },
    {
        id: 7.2,
        text: "The jack-o-lantern is much less hardy than the previous one. It falls apart on contact with you.",
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
            " They thank you and give you some candy before they head off back towards town after you gesture the way.",
        options: [
            {
                text: "Take the candy and continue",
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
        text: "The pumpkin swipes towards you with a hand-like vine. What do you do?",
        options: [
            {
                text: "Sidestep",
                nextText: 8.2
            },
            {
                text: "Pull in and punch",
                nextText: 8.3
            },
            {
                text: "Lunge and punch",
                nextText: 8.3
            }
        ]
    },
    {
        id: 8.2,
        text: "You dodge to the right. The vine barely passes your head. The pumpkin is recovering, what do you do?",
        options: [
            {
                text: "Pull in and punch",
                nextText: 8.3
            },
            {
                text: "Lunge and punch",
                nextText: 8.3
            }
        ]
    },
    {
        id: 8.3,
        text: "You punch the pumpkin and knock it back. It leaps backwards and frantically swings its vine at you",
        options: [
            {
                text: "Duck and hope for the best",
                nextText: 8.4
            },
            {
                text: "Try to grab the vine",
                nextText: 8.5
            }
        ]
    },
    {
        id: 8.4,
        text: "You duck but to no avail. The vine swipes across your shoulders and arm, giving you bad rope burn.",
        options: [
            {
                text: "Charge in and punch",
                nextText: 8.6
            },
            {
                text: "Dive into it",
                nextText: 8.6
            }
        ]
    },
    {
        id: 8.5,
        text: "You grab the vine successfully, ending the pumkpin's frenzy. It rapidly retracts the vine.",
        options: [
            {
                text: "Charge in and punch",
                nextText: 8.6
            },
            {
                text: "Dive into it",
                nextText: 8.6
            }
        ]
    },
    {
        id: 8.6,
        text: "The pumpkin is knocked backwards and loses its balance, falling. ",
        options: [
            {
                text: "Hit it again",
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
        text: "You hit the pumpkin as hard as you can. It falls to the ground its glow fades, leaving you in merely the light of the foggy moon!"+
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
        text: "As you begin to walk away, the pumpkin grabs you with its vine and throws you several yards into the air. You land on a rock an everything goes black.",
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
            "What could that be? As you draw closer to the song you can see a group of witches, it actually sounds like they're performing a seance. What are you going to do? ",
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
        text: "You start to sneak around them but a pile of candy catches your eyes and it draws you to it that you can't help but pick it up and take it."+
            " But you're not the only one who notices it. You got caught!",
        options: [
            {
                text: "FIGHT",
                nextText: 9.4
            }
        ]
    },

    // }, //----------------FIX MULTI ENEMY FIGHT---------------
    {
        id: 9.4,
        text: "These witches turn to you and now it looks like it's 3 vs. 1 now. What're you going to do?",
        options: [
            {
                text: "Run",
                nextText: 9.5
            },
            {
                text: "Throw dirt",
                nextText: 9.6
            },
            {
                text: "Charge the nearest",
                nextText: 9.5
            }
        ]
    },
    {
        id: 9.5,
        text: "You trip on a tombstone, the witches poke you with their brooms.",
        options: [
            {
                text: "Stand and fight",
                nextText: 9.4
            }
        ]
    },
    {
        id: 9.6,
        text: "You the dirt at the faces of all the witches. They collapse immediately, trying to remove it from their eyes. Do you take advantage of the situation, and attack or do you run away?",
        options: [
            {
                text: "Run away!",
                nextText: 9.7
            },
            {
                text: "Charge them",
                nextText: 9.8
            }
        ]
    },
    {
        id: 9.7,
        text: "As you start to run away the walls suddenly expand dramatically in height. The walls suddenly explode with a deafening bang and you fall to the ground. You suddenly begin to levitate and are pulled back. You feel a sharp pain and then nothing but blackness.",
        options: [
            {
                text: "Die.",
                nextText: -1
            }
        ]
    },
    {
        id: 9.8,
        text: "You push the witches into their cauldron. They seem weak to their own magic and melt Wizard of Oz style. VICTORY!" +
            "You find a pile of candy that was either being guarded by them or from another victim",
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
        text: "Celebrating your victory you begin eating the candy, but all of a sudden you hear a gnawing and scratching sounds coming from a grave nearby. What do you do?",
        options: [
            {
                text: "Try to unearth to help the person in need",
                nextText: 10.5
            },
            {
                text: "Ignore it",
                nextText: 11
            }
        ]
    },// ------------FIX SHORT FIGHT----------
    {
        id: 10.5,
        text: "As you go to unearth whatever is under the grave, a hand plunges through the ground and grabs your leg. You try to break its grip, but it's too strong. You are pulled underground and never found.",
        options: [
            {
                text: "A zombie you shall be",
                nextText: -1
            }
        ]
    },  //--------------------FIX BOSS FIGHT CEMETERY--------------------
    {
        id: 11,
        text:"You reach the end of the cemetery and all of a sudden you hear a rough tapping sound as if bones are being popped. As you walk out of the gated cemetery, you find yourself looking at a skeleton. "+
            "It makes a loud popping sound as its head turns all the way around to you. You are going to have to fight it.",
        options: [
            {
                text: "FIGHT",
                nextText: 11.1
            },
        ]
    },
    {
        id: 11.1,
        text: "The skeleton begins to turn the rest of its body around to face you. What do you do?",
        options: [
            {
                text: "Sidestep",
                nextText: 11.2
            },
            {
                text: "Punch skull",
                nextText: 11.3
            },
            {
                text: "Hit it with a rock",
                nextText: 11.3
            }
        ]
    },
    {
        id: 11.2,
        text: "The skeleton charges at you. You sidestep it and trip it, causing it to fall to the ground.",
        options: [
            {
                text: "Stomp it",
                nextText: 11.3
            },
            {
                text: "Kick it",
                nextText: 11.3
            }
        ]
    },
    {
        id: 11.3,
        text: "The blow hits directly on the head. It shrieks before it swipes at your head",
        options: [
            {
                text: "Duck",
                nextText: 11.4
            },
            {
                text: "Catch its arm",
                nextText: 11.5
            }
        ]
    },
    {
        id: 11.4,
        text: "You duck but the skeleton aimed lower than you thought and lands a painful blow directly to your head. What's your next move?",
        options: [
            {
                text: "Upper-cut",
                nextText: 11.6
            },
            {
                text: "Left hook",
                nextText: 11.6
            }
        ]
    },
    {
        id: 11.5,
        text: "You grab the skeletons arm but it is stronger than you and starts to overpower your grip. What's your next move?",
        options: [
            {
                text: "Punch its ribcage",
                nextText: 11.6
            },
            {
                text: "Kick through the empty abdomen",
                nextText: 11.6
            }
        ]
    },
    {
        id: 11.6,
        text: "The skeleton flies back and seems dazed, barely standing. It seems to be severely damaged from the attack. What do you do?",
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
        text: "You flick its forehead and it falls back. Even though it is no longer appearing to have sentience, it points to the lake before its bones lock in place."+
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
        text: "The skeleton grabs you pulls you under it. Its bones lock around you and you cannot move. A decaying corpse wonders out of the cemetery and drags you underground while you cannot move.",
        options: [
            {
                text: "Get eaten",
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
        text: "You hear a loud and deep growling sound come from somewhere in front of you, concealed in the brush.",
        options: [
            {
                text: "Dive to the side",
                nextText: 12.51
            },
            {
                text: "Prepare to punch",
                nextText: 12.6
            },
            {
                text: "Run",
                nextText: 12.5
            }
        ]
    },
    {
        id: 12.5,
        text: "You turn around to find the greenery behind you has somehow grown too thick to traverse.",
        options: [
            {
                text: "turn and fight",
                nextText: 12.4
            }
        ]
    },
    {
        id: 12.51,
        text: "You dive to the ground as something leaps from the brush and strikes at where you just were.",
        options: [
            {
                text: "Stand and fight",
                nextText: 12.4
            }
        ]
    },
    {
        id: 12.6,
        text: "You raise your fist and a mysterious creature, cloaked by darkness leaps out. You punch it it the head, dazing it",
        options: [
            {
                text: "Uppercut!",
                nextText: 12.8
            }
        ]
    },
    {
        id: 12.8,
        text: "You punch the creature's jaw and it dematerializes into the darkness. VICTORY!" +
            "You received a piece of candy for beating the monster.",
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
                nextText: 14.1
            },
        ]
    },
    {
        id: 14.1,
        text: "The fowl creature turns towards you and begins to walk towards you.",
        options: [
            {
                text: "Back up",
                nextText: 14.2
            },
            {
                text: "Punch in the face",
                nextText: 14.3
            },
            {
                text: "Punch in the stomach",
                nextText: 14.3
            }
        ]
    },
    {
        id: 14.2,
        text: "You walk backwards only to find your old friend's pace increasing.",
        options: [
            {
                text: "Punch in the face",
                nextText: 14.3
            },
            {
                text: "Punch in the stomach",
                nextText: 14.3
            }
        ]
    },
    {
        id: 14.3,
        text: "You punch River. He screams profanity at you then frenzies and haphazardly tries to whip you with his hair. Think fast!",
        options: [
            {
                text: "Sidestep",
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
        text: "You find the tornado of hair too overwhelming to dodge. It throws you back several feet. You get up, slightly dazed. River has closed the distance fast. Do something!",
        options: [
            {
                text: "Push",
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
        text: "The item knocks River back as soon as his hair touches it. He stumbles backwards, dazed. What's your next move?",
        options: [
            {
                text: "Hit with item",
                nextText: 14.6
            }
        ]
    },
    {
        id: 14.6,
        text: "You hit him in the chest, causing him to fall to the ground . What do you do?",
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
        text: "With River's final breath he says he forgives you and hands you one last piece of candy. You raise the item, but before you could swing, he vanished.",
        options: [
            {
                text: "Take the candy",
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
        text: "River tries one last time to lunge at you but trips and falls right onto your ancient item which turns out to be a magical sword. River 'dies' again by your hand",
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
                nextText: 16
            },

        ]

    },
    {
        id: 16,
        text: "",
        options: [
            {
                text: "Credits",
                nextText: 17
            },

        ]

    },
    {
        id: 17,
        text: "",
        options: [
            {
                text: "Restart",
                nextText: 18
            },

        ]

    },
    {
        id: 18,
        text: "",
        options: [
            {
                text: "Restart",
                nextText: 18
            },

        ]

    },
];

