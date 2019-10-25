"use strict";

var textElement = document.getElementById('text');
var optionButtonsElement = document.getElementById('option-buttons');


var state = {};

function startGame() {
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    var textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    while (optionButtonsElement.firstChild) {//removes buttons when not needed
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    textNode.options.forEach(option => {
        if (showOption(option)) {
            var button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('rpgui-button', 'golden', 'btn');
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
                nextText: 3
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
                nextText: 1.5
            },
            {
                text: "Move to the next street",
                nextText: 2
            }
        ]
    },

];

startGame();