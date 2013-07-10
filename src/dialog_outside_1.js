OUTSIDE_1_DIALOG =
{
    "actors": [
        {
            "id": 1,
            "name": "Homeowner"
        },
        {
            "id": 2,
            "name": "Wife"
        },
        {
            "id": 3,
            "name": "Burglar"
        },
        {
            "id": 4,
            "name": "Bee"
        }
    ],
    "dialogues": [
        {
            "id": 1,
            "parent": null,
            "isChoice": false,
            "actor": 1,
            "conversant": 2,
            "menuText": "",
            "dialogueText": "Maybe bees will put some honey in the hive out in the yard.",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "",
            "outgoingLinks": [
                100
            ]
        },
        {
            "id": 2,
            "parent": 100,
            "isChoice": false,
            "actor": 1,
            "conversant": 2,
            "menuText": "Stick it in the tree",
            "dialogueText": "That should do it.",
            "conditionsString": "",
            "codeBefore": "this.StickHiveInTree()",
            "codeAfter": "this.AttractBees()",
            "outgoingLinks": []
        },
        {
            "id": 3,
            "parent": 100,
            "isChoice": false,
            "actor": 1,
            "conversant": 2,
            "menuText": "Just throw the thing on the grass.",
            "dialogueText": "That'll work.",
            "conditionsString": "",
            "codeBefore": "this.ThrowHiveOnLawn()",
            "codeAfter": "",
            "outgoingLinks": [
                8
            ]
        },
        {
            "id": 4,
            "parent": 100,
            "isChoice": false,
            "actor": 1,
            "conversant": 2,
            "menuText": "Hold it.",
            "dialogueText": "Give me the honey ya stupid bees!",
            "conditionsString": "",
            "codeBefore": "this.HoldHive()",
            "codeAfter": "this.InitExchange()",
            "outgoingLinks": []
        },
        {
            "id": 5,
            "parent": 2,
            "isChoice": false,
            "actor": 2,
            "conversant": 1,
            "menuText": "",
            "dialogueText": "Those bees stole our bee hive now, didn't they?!",
            "conditionsString": "",
            "codeBefore": "IncreaseWifeAnger(0.1)",
            "codeAfter": "",
            "outgoingLinks": [
                6
            ]
        },
        {
            "id": 6,
            "parent": 5,
            "isChoice": false,
            "actor": 1,
            "conversant": 2,
            "menuText": "",
            "dialogueText": "They sure did. Now what in da heck am I supposed to do?",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "",
            "outgoingLinks": [
                7
            ]
        },
        {
            "id": 7,
            "parent": 6,
            "isChoice": false,
            "actor": 2,
            "conversant": 1,
            "menuText": "",
            "dialogueText": "You better figure out something fast because we still got that bear in the garage and I need more diet coke!",
            "conditionsString": "",
            "codeBefore": "IncreaseWifeAnger(0.05)",
            "codeAfter": "",
            "outgoingLinks": [
                101
            ]
        },
        {
            "id": 8,
            "parent": 3,
            "isChoice": false,
            "actor": 1,
            "conversant": 2,
            "menuText": "",
            "dialogueText": "Where are the flippin' bees?",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "this.BurglarStealsHive()",
            "outgoingLinks": []
        },
        {
            "id": 9,
            "parent": 8,
            "isChoice": false,
            "actor": 1,
            "conversant": 3,
            "menuText": "",
            "dialogueText": "Oh great, this guy...",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "",
            "outgoingLinks": [
                10
            ]
        },
        {
            "id": 10,
            "parent": 9,
            "isChoice": false,
            "actor": 3,
            "conversant": 1,
            "menuText": "",
            "dialogueText": "Ha! Never saw it coming!",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "this.BurglarStealsHive2()",
            "outgoingLinks": []
        },
        {
            "id": 11,
            "parent": 10,
            "isChoice": false,
            "actor": 2,
            "conversant": 1,
            "menuText": "",
            "dialogueText": "Did that burglar come around again!?",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "",
            "outgoingLinks": [
                12
            ]
        },
        {
            "id": 12,
            "parent": 11,
            "isChoice": false,
            "actor": 1,
            "conversant": 2,
            "menuText": "",
            "dialogueText": "No!",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "",
            "outgoingLinks": [
                13
            ]
        },
        {
            "id": 13,
            "parent": 12,
            "isChoice": false,
            "actor": 2,
            "conversant": 1,
            "menuText": "",
            "dialogueText": "Then tell me where my bee hive is!",
            "conditionsString": "",
            "codeBefore": "IncreaseWifeAnger(0.1)",
            "codeAfter": "",
            "outgoingLinks": [
                14
            ]
        },
        {
            "id": 14,
            "parent": 13,
            "isChoice": false,
            "actor": 1,
            "conversant": 2,
            "menuText": "",
            "dialogueText": "Well, I can't keep track of all your bee hives and other things.",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "",
            "outgoingLinks": [
                7
            ]
        },
        {
            "id": 15,
            "parent": 4,
            "isChoice": false,
            "actor": 4,
            "conversant": 1,
            "menuText": "",
            "dialogueText": "Bzzzz!",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "",
            "outgoingLinks": [
                16
            ]
        },
        {
            "id": 16,
            "parent": 15,
            "isChoice": false,
            "actor": 1,
            "conversant": 4,
            "menuText": "",
            "dialogueText": "Give me the honey and I'll give you the hive!",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "",
            "outgoingLinks": [
                17
            ]
        },
        {
            "id": 17,
            "parent": 16,
            "isChoice": false,
            "actor": 4,
            "conversant": 1,
            "menuText": "",
            "dialogueText": "Bzzzzzzzz!",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "this.BeeBringsHoney()",
            "outgoingLinks": []
        },
        {
            "id": 18,
            "parent": 17,
            "isChoice": false,
            "actor": 1,
            "conversant": 4,
            "menuText": "",
            "dialogueText": "Ok now... be cool. Put the honey on the ground.",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "this.PlaceHoneyOnLawn()",
            "outgoingLinks": []
        },
        {
            "id": 19,
            "parent": 18,
            "isChoice": false,
            "actor": 1,
            "conversant": 4,
            "menuText": "",
            "dialogueText": "Fine. Here is your precious hive.",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "this.GiveUpHive()",
            "outgoingLinks": []
        },
        {
            "id": 20,
            "parent": 101,
            "isChoice": false,
            "actor": 1,
            "conversant": 2,
            "menuText": "Can you bribe a bear?",
            "dialogueText": "I'll try to bribe the bear.",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "ChangeScene(\"TheBribe\")",
            "outgoingLinks": []
        },
        {
            "id": 21,
            "parent": 101,
            "isChoice": false,
            "actor": 1,
            "conversant": 2,
            "menuText": "What do bears fear?",
            "dialogueText": "Let's step it up a notch!",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "ChangeScene(\"Ghost\")",
            "outgoingLinks": []
        },
        {
            "id": 22,
            "parent": 101,
            "isChoice": false,
            "actor": 1,
            "conversant": 2,
            "menuText": "Get more diet coke.",
            "dialogueText": "I better go get my wife more diet coke.",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "ChangeScene(\"MoreDietCoke\")",
            "outgoingLinks": []
        },
        {
            "id": 100,
            "parent": 1,
            "isChoice": true,
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "",
            "outgoingLinks": [
                2,
                3,
                4
            ]
        },
        {
            "id": 101,
            "parent": 7,
            "isChoice": true,
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "",
            "outgoingLinks": [
                20,
                21,
                22
            ]
        }
    ]
}