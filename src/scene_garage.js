
Crafty.scene("Garage", function()
{
    Crafty.load(['assets/garage.png'], function()
    {
        var bg = Crafty.e("2D, Canvas, Image")
                .attr({ w: Crafty.viewport.width, h: Crafty.viewport.height })
                .image("assets/garage.png");

        this.bear = Crafty.e("2D, Canvas, Image, Tweener").image("assets/bear-128.png")
                    .attr({ x: 120, y: 180 });

        var StartDialog = function()
        {
            var dialog = Crafty.e("2D, Canvas, Dialogues").setDialogues(GARAGE_1_DIALOG);
            dialog.showDialogue();
        }

        Crafty.e('2D, DOM, Text, Tweener')
            .text('Get that dang bear outta your garage!')
            .attr({ x: Game.width() * 0.2 / 2, y: Game.height() / 4, w: Game.width() * 0.8 })
            .css($center_text_css)
            .textFont({ size: '45px', weight: 'bold' })
            .textColor('#BB0000')
            .addTween({ alpha: 0 }, 'easeInQuart', 120, function() { StartDialog(); });

        //Crafty.bind("EnterFrame", this.OnGameFrame);
    })
});

Crafty.scene("GarageWithHoney", function()
{
    Crafty.load(['assets/garage.png'], function()
    {
        var bg = Crafty.e("2D, Canvas, Image")
                .attr({ w: Crafty.viewport.width, h: Crafty.viewport.height })
                .image("assets/garage.png");

        this.bear = Crafty.e("2D, Canvas, Image, Tweener").image("assets/bear-128.png")
                    .attr({ x: 120, y: 180 });

        var dialog = Crafty.e("2D, Canvas, Dialogues").setDialogues(GARAGE_2_DIALOG);
        dialog.showDialogue();
    })
});