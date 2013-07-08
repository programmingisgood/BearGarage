KITCHEN_1_DIALOG =
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
			"conversant": 1,
			"menuText": "",
			"dialogueText": "Gotta be some honey around this place",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": []
		},
		{
			"id": 2,
			"parent": 1,
			"isChoice": false,
			"actor": 1,
			"conversant": 1,
			"menuText": "",
			"dialogueText": "There is my old bee hive, should I take it?",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				100
			]
		},
		{
			"id": 3,
			"parent": 100,
			"isChoice": false,
			"actor": 1,
			"conversant": 1,
			"menuText": "Yeah",
			"dialogueText": "Got it. But it is empty. I'll take it outside.",
			"conditionsString": "",
			"codeBefore": "this.TakeBeeHive()",
			"codeAfter": "ChangeScene(\"Outside\")",
			"outgoingLinks": []
		},
		{
			"id": 4,
			"parent": 100,
			"isChoice": false,
			"actor": 1,
			"conversant": 1,
			"menuText": "Nah",
			"dialogueText": "No use for that old thing.",
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
			"conversant": 1,
			"menuText": "",
			"dialogueText": "All this bear business has gotten me pretty thirsty. Should I drink the diet coke?",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				200
			]
		},
		{
			"id": 6,
			"parent": 200,
			"isChoice": false,
			"actor": 1,
			"conversant": 1,
			"menuText": "Sure",
			"dialogueText": "Mmm, refreshing",
			"conditionsString": "",
			"codeBefore": "this.DrinkDietCoke()",
			"codeAfter": "",
			"outgoingLinks": [
				8
			]
		},
		{
			"id": 7,
			"parent": 200,
			"isChoice": false,
			"actor": 1,
			"conversant": 1,
			"menuText": "I'll save it for the wife",
			"dialogueText": "I bet my wife would be upset if I drank it.",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				9
			]
		},
		{
			"id": 100,
			"parent": 2,
			"isChoice": true,
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				3,
				4
			]
		},
		{
			"id": 200,
			"parent": 5,
			"isChoice": true,
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				6,
				7
			]
		}
	]
}