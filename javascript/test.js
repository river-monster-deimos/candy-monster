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

// Stores items
var candySmall = {
    name: "candySmall",
    type: "healing",
    healing: 30
};
var candyMed = {
    name: "candyMed",
    type: "healing",
    healing: 60
};
var candyLarge = {
    name: "candyLarge",
    type: "healing",
    healing: 90
};
var potion = {
    make: function (hp = 0, heal = 0, dmg = 0) {
        var temp = {
            type: "potion",
            hpIncrease: hp,
            healing: heal,
            damageIncrease: dmg,
            name: "potion"
            // name: "potionOf" + (hp > 0 ? "Enduring" : "") + (heal > 0 ? "Health" : "") + (dmg > 0 ? "Strength" : "")
        };
        return temp;
    }
};
var items = {
    smallCandy: candySmall,
    medCandy: candyMed,
    lrgCandy: candyLarge,
    potion: potion
};

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
        },
        drops: [items.smallCandy]
    }
];

//temporary player selection
let player = characters.jw;

//commands to be used with interface
const c = {
    showNames: function (n) {
        var temp = [];
        if (Array.isArray(n)) {
            for (var i = 0; i < n.length; i++) {
                temp.push(n[i].name);
            }
        }
        else {
            for (var i = 0; i < n.length; i++) {
                temp.push(n[i].name);
            }
        }
        return temp;
    },
    //shows players current stats and inventory
    status: function () {
        console.log("Health: " + player.hp + "\n" + "Inventory: " + this.showNames(player.inventory));
    },
    //attacks a target, takes which attack that will be used as the first arg and which enemy to attack as the second
    attack: function (Attack, target) {
        target.hp -= (target.def * -1) + player.Attack.dmg;
    },
    heal: function (item) {
        if (item.healing === "all") {
            player.hp = player.maxHP;
        }
        else {
            player.hp += item.healing;
        }
        player.inventory.splice(player.inventory.indexOf(item), 1);
        if (player.hp > player.maxHP) {
            player.hp = player.maxHP;
        }
        console.log("healed by " + item.healing + "HP");
    },
    addHP: function (item) {
        player.maxHP += item.hpIncrease;
    },
    addDmg: function (item) {

    },
    //use an item from inventory
    use: function (item) {
        //checks if player has the item
        if (player.inventory.includes(item)) {
            //for healing items
            if (item.type === "healing") {
                if (player.hp < player.maxHP) {
                    this.heal(item);
                }
                else {
                    console.log("You do not need to heal");
                }
            }
            if (item.type === "potion") {
                this.heal(item);
                this.addHP(item);
                this.addDmg(item);
            }
            //for weapons
            if (item.type === "weapon") {

            }
        }
        else {
            console.log("You do not have this item.");
        }
    },
    attackPlayer: function (enemy, attack) {
        player.hp -= enemy.attacks.basic;
    }
};

let inCombat = false;

player.hp -= 30;
player.inventory.push(items.smallCandy, items.smallCandy, items.medCandy, items.lrgCandy);

