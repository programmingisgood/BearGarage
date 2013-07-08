WIFE_FURY_1_DIALOG =
{
	"actors": [
		{
			"id": 1,
			"name": "Homeowner"
		},
		{
			"id": 2,
			"name": "Wife"
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
			"dialogueText": "What'ya doing in the garage with that bear?!",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				2
			]
		},
		{
			"id": 2,
			"parent": 1,
			"isChoice": false,
			"actor": 2,
			"conversant": 1,
			"menuText": "",
			"dialogueText": "I am very angry with you!",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				3
			]
		},
		{
			"id": 3,
			"parent": 2,
			"isChoice": false,
			"actor": 1,
			"conversant": 2,
			"menuText": "",
			"dialogueText": "Oh come on...",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				4
			]
		},
		{
			"id": 4,
			"parent": 3,
			"isChoice": false,
			"actor": 2,
			"conversant": 1,
			"menuText": "",
			"dialogueText": "You have failed to remove the bear from the garage.",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				5
			]
		},
		{
			"id": 5,
			"parent": 4,
			"isChoice": false,
			"actor": 1,
			"conversant": 2,
			"menuText": "",
			"dialogueText": "It's just a danged bear!",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				6
			]
		},
		{
			"id": 6,
			"parent": 5,
			"isChoice": false,
			"actor": 2,
			"conversant": 1,
			"menuText": "",
			"dialogueText": "I know. I'm leaving you for the bear.",
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
			"actor": 1,
			"conversant": 2,
			"menuText": "",
			"dialogueText": "...",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "this.WifeAndBearLeave()",
			"outgoingLinks": [
				8
			]
		}
	]
}