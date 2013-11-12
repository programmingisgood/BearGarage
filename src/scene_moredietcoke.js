
Crafty.scene("MoreDietCoke", function()
{
    Crafty.load(['assets/garage.png'], function()
    {
        var bg = Crafty.e("2D, Canvas, Image")
                .attr({ w: Crafty.viewport.width, h: Crafty.viewport.height })
                .image("assets/garage.png");

        var bear = Crafty.e("2D, Canvas, Image, Tweener, MoveToTarget")
                    .image("assets/bear-128.png")
                    .attr({ x: 120, y: 180 });

        var dialog = Crafty.e("2D, Canvas, Dialogues").setDialogues(MOREDIETCOKE_1_DIALOG);

        var homeOwner = null;
        homeOwner = Crafty.e("2D, Canvas, Image, Tweener")
                    .attr({ x: 240, y: 528 })
                    .image("assets/homeowner-128.png")
                    .addTween({ y: 300 }, "easeOutSine", 160);

        var kenneth = null;
        kenneth = Crafty.e("2D, Canvas, Image, Tweener, Fourway, ConstrainPosition, Collision")
                  .attr({ x: 180, y: 628 })
                  .image("assets/kenneth-64.png")
                  .fourway(2)
                  .disableControl()
                  .addTween({ y: 320 }, "easeOutSine", 260,
                  	function() { dialog.showDialogue(); });
        kenneth.waitingForCan = false;

        var cans = CreateGarageDietCokeCans();

        dialog.EnableControls = function()
        {
            kenneth.enableControl();
            var minX = 64;
            var maxX = Game.width() / 2;
            var minY = 260;
            var maxY = 340;
            kenneth.constrain(minX, maxX, minY, maxY);
            bear.bind("EnterFrame",
                function()
                {
                    this.target(kenneth.x + kenneth.w / 2, kenneth.y - kenneth.h, 0.2);
                });
        	Crafty.e("2D, Canvas, Image, Tweener")
        	.attr({ x: 180, y: 320 })
        	.image("assets/arrow_keys.png")
        	.addTween({ alpha: 1 }, "easeInSine", 50,
        		function()
        		{
        			this.addTween({ alpha: 0 }, "easeInSine", 50,
        				function()
        				{
        					this.destroy();
        				});
        		});

            kenneth.bind("EnterFrame",
                function()
                {
                    if (this.x <= minX && this.y <= minY && cans.length > 0 && !this.waitingForCan)
                    {
                        var can = cans[0];
                        this.waitingForCan = true;
                        can.addTween({ x: this.x, y: this.y }, "easeOutSine", 40,
                            function()
                            {
                                cans.splice(0, 1);
                                this.destroy();
                                kenneth.waitingForCan = false;
                            });
                    }
                });
        }
    })
});