DIALOGUES_DATA_SOURCE = {
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
			"menuText": "Menu text",
			"dialogueText": "Get outta my dang garage!",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "this.ShakeBear()",
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
			"dialogueText": "Go ahead, get on out of there bear.",
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
			"dialogueText": "I know what'll get ya outta there...",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				101
			]
		},
		{
			"id": 4,
			"parent": 101,
			"isChoice": false,
			"actor": 1,
			"conversant": 2,
			"menuText": "Bears love honey",
			"dialogueText": "Let's go find some honey",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": []
		},
		{
			"id": 5,
			"parent": 101,
			"isChoice": false,
			"actor": 1,
			"conversant": 2,
			"menuText": "Maybe he is bored",
			"dialogueText": "Hmm, TV?",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": []
		},
		{
			"id": 6,
			"parent": 101,
			"isChoice": false,
			"actor": 1,
			"conversant": 2,
			"menuText": "He looks down on his luck...",
			"dialogueText": "Unemployed?",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": []
		},
		{
			"id": 101,
			"parent": 3,
			"isChoice": true,
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				4,
				5,
				6
			]
		}
	]
}