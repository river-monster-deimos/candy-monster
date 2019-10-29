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
        case 4:
            document.getElementById("mainScreen").className = "rpgui-container framed lvl1";
            break;
        case 7:
            document.getElementById("mainScreen").className = "rpgui-container framed lvl2";
            break;
        case 9:
            document.getElementById("mainScreen").className = "rpgui-container framed lvl3";
            break;
    }
}


var textNodes = [
    {
        id: 1,
        text: "It's Halloween night and we find ourselves trick or treating. The night has not gotten off to a good start, " +
            "because this is the eighth house in a row that does not have candy.",
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
        text: "No candy here either! Our candy must be in another house.",
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
        text: "The candy monster rips your throat out.",
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
        text: "You slip and fall, the candy bites your leg.",
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
        text: "As you start to run away your legs get tripped up because of your costume, and you fall to the ground.  The monster quickly recovers, and jumps on top of you. The monster violently rips out your intestines.",
        options: [
            {
                text: "Die.",
                nextText: -1
            }
        ]
    },
    {
        id: 3.4,
        text: "You run full speed at the monster, and do a flying kick to the monsters face.  Your foot goes through the monsters face instantly killing him.  Somewhere off in the distance you hear someone shout, 'BRUTALITY'.",
        options: [
            {
                text: "Continue to the next street.",
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: "The landlubber crushes with yellow fever, rob the quarter-deck. The lagoon crushes with strength, view the fortress before it whines." +
            "The shiny pirate smartly endures the dubloon. The mighty bung hole fast hails the corsair.",
        options: [
            {
                text: "fight",
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 6
            },
            {
                text: "Move to the next street",
                nextText: 6
            }
        ]
    },
    {
        id: 6,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 7
            },
            {
                text: "Move to the next street",
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 8
            },
            {
                text: "Move to the next street",
                nextText: 8
            }
        ]
    },
    {
        id: 8,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 9
            },
            {
                text: "Move to the next street",
                nextText: 9
            }
        ]
    },
    {
        id: 9,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 10
            },
            {
                text: "Move to the next street",
                nextText: 10
            }
        ]
    },
    {
        id: 10,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 1
            },
            {
                text: "Move to the next street",
                nextText: 1
            }
        ]
    },
    {
        id: 4,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 1
            },
            {
                text: "Move to the next street",
                nextText: 1
            }
        ]
    },
    {
        id: 4,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 1
            },
            {
                text: "Move to the next street",
                nextText: 1
            }
        ]
    },
    {
        id: 4,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 1
            },
            {
                text: "Move to the next street",
                nextText: 1
            }
        ]
    },
    {
        id: 4,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 1
            },
            {
                text: "Move to the next street",
                nextText: 1
            }
        ]
    },
    {
        id: 4,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 1
            },
            {
                text: "Move to the next street",
                nextText: 1
            }
        ]
    },
    {
        id: 4,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 1
            },
            {
                text: "Move to the next street",
                nextText: 1
            }
        ]
    },
    {
        id: 4,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 1
            },
            {
                text: "Move to the next street",
                nextText: 1
            }
        ]
    },
    {
        id: 4,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 1
            },
            {
                text: "Move to the next street",
                nextText: 1
            }
        ]
    },
    {
        id: 4,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 1
            },
            {
                text: "Move to the next street",
                nextText: 1
            }
        ]
    },
    {
        id: 4,
        text: "Quartered, divided pudding is best marinated with sour rum. To the whole pork butt add spinach, lettuce, orange juice and shredded chili. " +
            "Sauerkraut can be marinateed with minced truffels, also try tossing the pie with hollandaise sauce.",
        options: [
            {
                text: "Try another house",
                nextText: 1
            },
            {
                text: "Move to the next street",
                nextText: 1
            }
        ]
    },
    {
        id: -1,
        text:"You died.",
        options: [
            {
                text: "New Game",
                nextText: -2
            },
        ]
    },
    {
        id: -2,
        text:"You died.",
        options: [
            {
                text: "New Game",
                nextText: -2
            },
        ]
    },
];

// startGame();