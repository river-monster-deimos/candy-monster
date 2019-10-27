"use strict";

var textElement = document.getElementById('text');//grabs the text
var optionButtonsElement = document.getElementById('option-buttons');//grabs the buttons
var state = {};

function startGameBoy() {
    state = {};
    showTextNode(1);
    document.getElementById("girl").style.display = "none";
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
    document.getElementById("startScreen").style.display = "block";
    document.getElementById("gameScreen").style.display = "none";
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

function levelChange2() {
    document.getElementById("mainScreen").className = "rpgui-container framed lvl2";
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
        case 1:
            document.getElementById("mainScreen").className = "rpgui-container framed lvl1";
            break;
        case 4:
            document.getElementById("mainScreen").className = "rpgui-container framed lvl2";
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
                text: "Talk to the candy.",//die
                nextText: -1
            }
        ]

    },
    {
        id: 3,
        text: "The landlubber crushes with yellow fever, rob the quarter-deck. The lagoon crushes with strength, view the fortress before it whines." +
            "The shiny pirate smartly endures the dubloon. The mighty bung hole fast hails the corsair.",
        options: [
            {
                text: "fight",
                nextText: 4
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

];

// startGame();