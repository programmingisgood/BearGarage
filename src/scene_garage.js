
function CreateGarageDietCokeCans()
{
    var cans = new Array();

    cans.push(Crafty.e("2D, Canvas, Image, Tweener")
              .attr({ x: 60, y: 222 })
              .image("assets/diet_coke_can.png"));

    cans.push(Crafty.e("2D, Canvas, Image, Tweener")
              .attr({ x: 70, y: 216 })
              .image("assets/diet_coke_can.png"));

    cans.push(Crafty.e("2D, Canvas, Image, Tweener")
              .attr({ x: 80, y: 208 })
              .image("assets/diet_coke_can.png"));

    return cans;
}

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

        CreateGarageDietCokeCans();

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

        CreateGarageDietCokeCans();

        var dialog = Crafty.e("2D, Canvas, Dialogues").setDialogues(GARAGE_2_DIALOG);
        dialog.showDialogue();

        var homeOwner = null;
        var honey = null;
        dialog.HoldHoney = function()
        {
            homeOwner = Crafty.e("2D, Canvas, Image, Tweener")
                        .attr({ x: 240, y: 528 })
                        .image("assets/homeowner-128.png")
                        .addTween({ y: 300 }, "easeOutQuad", 160);

            honey = Crafty.e("2D, Canvas, Image, Tweener")
                    .attr({ x: homeOwner.x - 4, y: homeOwner.y + 60 })
                    .image("assets/honey.png");

            homeOwner.attach(honey);
        }
    })
});