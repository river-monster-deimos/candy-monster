"use strict";
//stores all playable character stats

const characters = {
    jw: {
        name: "jw",
        hp: 120,
        hpMax: 120,
        hpBonus: 0,
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

//temporary player selection
let player = characters.jw;

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
    type: "potion",
    healing: 15,
    hpIncrease: 30,
    damageIncrease: 0,
    name: "potion",
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
    removeItem: function (n) {
        player.inventory.splice(player.inventory.indexOf(n), 1);
    },
    //attacks a target, takes which attack that will be used as the first arg and which enemy to attack as the second
    attack: function (Attack, target) {
        target.hp -= (target.def * -1) + player.Attack.dmg;
    },
    heal: function (item) {
        if (item.healing === "all") {
            player.hp = player.hpMax;
        }
        else {
            player.hp += item.healing;
        }
        if (player.hp > player.hpMax) {
            player.hp = player.hpMax;
        }
        console.log("healed by " + item.healing + "HP");
    },
    addHP: function (item) {
        player.hpMax += item.hpIncrease;
    },
    addDmg: function (item) {

    },
    //use an item from inventory
    use: function (item) {
        //checks if player has the item
        if (player.inventory.includes(item)) {
            //for healing items
            if (item.type === "healing") {
                if (player.hp < player.hpMax) {
                    this.heal(item);
                    // this.heal();
                }
                else {
                    console.log("You do not need to heal");
                }
            }
            //for potions
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