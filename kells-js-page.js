"use strict";
var textNodes = [
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
        text: "The candy closes just sits there.  What do you do?",
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
    },
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
    },
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
    },
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
    },
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
                nextText: 5
            }
        ]
    },
    {
        id: 7.5,
        text: "You think you found the source of the scream and they speak to you asking if you're going to hurt them too",
        options: [
            {
                text: "Consume the magical boost and continue on",
                nextText: 5
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
