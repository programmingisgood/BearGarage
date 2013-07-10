MOREDIETCOKE_1_DIALOG =
{
	"actors": [
		{
			"id": 1,
			"name": "Homeowner"
		},
		{
			"id": 2,
			"name": "Kenneth"
		}
	],
	"dialogues": [
		{
			"id": 1,
			"parent": null,
			"isChoice": false,
			"actor": 2,
			"conversant": 1,
			"menuText": "",
			"dialogueText": "Hey there Mr. S.",
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
			"actor": 1,
			"conversant": 2,
			"menuText": "",
			"dialogueText": "Hello Kenneth. Wanna help get that diet coke there next to the bear?",
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
			"actor": 2,
			"conversant": 1,
			"menuText": "",
			"dialogueText": "Mom says to stay away from bears.",
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
			"actor": 1,
			"conversant": 2,
			"menuText": "",
			"dialogueText": "Let's focus on the diet coke, OK Kenneth?",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "this.EnableControls()",
			"outgoingLinks": []
		}
	]
}