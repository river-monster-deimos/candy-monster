"use strict";
//stores all playable character stats

const characters = {
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
            inventory: []
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
const enemies = [
    {
        name: "chocolateMonster",
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
        name: "chocolateMonster2",
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
        name: "pumpkinZombie",
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
        name: "pumpkinBoss",
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
var candySmall = {
    name: "small-candy",
    type: "healing",
    healing: 30
};
var candyMed = {
    name: "med-candy",
    type: "healing",
    healing: 60
};
var items = {
    smallCandy: candySmall,
    medCandy: candyMed,
    lrgCandy: {
        name: "lrg-candy",
        type: "healing",
        healing: "all"
    }
};

//temporary player selection
let player = characters.jw;

//commands to be used with interface
const c = {
    //shows players current stats and inventory
    status: function () {
        console.log("Health: " + player.hp + "\n" + "Attacks: " + player.attacks + "\n" + "Inventory: " + player.inventory);
    },
    //attacks a target, takes which attack that will be used as the first arg and which enemy to attack as the second
    attack: function (Attack, target) {
        target.hp -= (target.def * -1) + player.Attack.dmg;
    },
    //use an item from inventory
    use: function (item) {
        //checks if player has the item
        if (player.inventory.includes(item)) {
            //for healing items
            if (item.type === "healing" && player.hp < player.maxHP) {
                if (item.healing === "all") {
                    player.hp = player.maxHP;
                }
                else {
                    player.hp += item.healing;
                }
                player.inventory.splice(player.inventory.indexOf(item), 1);
            }
            if (player.hp > player.maxHP) {
                player.hp = player.maxHP;
            }
            console.log("Current Health: " + player.hp);
        }
        else if (player.hp === player.maxHP) {
            console.log("You do not need to heal")
        }
        else {
            console.log("You do not have this item.");
        }
    },
    attackPlayer: function (enemy, attack) {
        player.hp -= enemy.attacks.basic;
    }
};

let inCombat;

player.hp -= 90;
player.inventory.push(items.smallCandy, items.smallCandy, items.medCandy, items.lrgCandy);

//
