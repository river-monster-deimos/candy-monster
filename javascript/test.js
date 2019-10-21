"use strict";
var player;
//stores all playable character stats
var characters = [
    {
        name: "jw",
        hp: 120,
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
    {
        name: "kellsey",
        hp: 150,
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
];

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

function encounter(enemy) {

}