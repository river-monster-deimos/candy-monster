"use strict";
//stores all playable character stats
var characters = {
    jw: {
        name: "jw",
        hp: 120,
        maxHP: 120,
        def: 0,
        attacks: {
            basic: {
                dmg: 30,
                skill: 10
            },
            special: {
                dmg: 90,
                skill: 5
                }
            },
            inventory: [items.smallCandy, items.smallCandy, items.medCandy]
    },
    kellsey: {
        name: "kellsey",
        hp: 150,
        maxHP: 150,
        def: 0,
        attacks: {
            basic: {
                dmg: 30,
                skill: 10
            },
            special: {
                dmg: 90,
                skill: 5
            }},
        inventory: []
    }
};

// Stores enemies and bosses stats
var enemies = [
    {
        name: "candy-fiend",
        hp: 60,
        def: 0,
        attacks: {
            basic: {
                dmg: 15,
                skill: 5
            }
        }
    },
    {
        name: "candy-zombie",
        hp: 90,
        def: 0,
        attacks: {
            basic: {
                dmg: 30,
                skill: 5
            }
        }
    },
    {
        name: "pumpkin-zombie",
        hp: 90,
        def: 2,
        attacks: {
            basic: {
                dmg: 15,
                skill: 5
            }
        }
    },
    {
        name: "pumpkin boss",
        hp: 150,
        def: 5,
        attacks: {
            basic: {
                dmg: 45,
                skill: 5
            }
        }
    }
];

var items = {
    smallCandy: {
        type: "healing",
        healing: 30
    },
    medCandy: {
        type: "healing",
        healing: 60
    },
    lrgCandy: {
        type: "healing",
        healing: player.hp
    }
};

var player = characters.jw;

var command = {
    status: function () {
        console.log("Health: " + player.hp + "\n" + "Attacks: " + player.attacks + "\n" + "Inventory: " + player.inventory);
    },
    attack: function (Attack, target) {
        target.hp -= (target.def * -1) + player.Attack.dmg;
    },
    use: function (item) {
        if (player.inventory.includes(item)) {
            if (item.type === "healing") {
                player.hp += item.healing;
                player.inventory.splice(player.inventory.indexOf(item), 1);
            }
        }
    }
};

player.hp -= 60;

//
