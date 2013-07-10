GARAGE_2_DIALOG =
{
    "actors": [
        {
            "id": 1,
            "name": "Homeowner"
        },
        {
            "id": 2,
            "name": "Bear"
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
            "dialogueText": "Still in that garage, huh?",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "ShakeBear()",
            "outgoingLinks": [
                2
            ]
        },
        {
            "id": 2,
            "parent": 1,
            "isChoice": false,
            "actor": 1,
            "conversant": 2,
            "menuText": "",
            "dialogueText": "I'll give ya the honey if you get on out of there.",
            "conditionsString": "",
            "codeBefore": "",
            "codeAfter": "ShakeBear(); this.HoldHoney()",
            "outgoingLinks": []
        }
    ]
}