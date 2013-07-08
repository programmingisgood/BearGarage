
Crafty.scene("Kitchen", function()
{
    Crafty.load(['assets/kitchen.png'], function()
    {
        var bg = Crafty.e("2D, Canvas, Image")
                 .attr({ w: Crafty.viewport.width, h: Crafty.viewport.height })
                 .image("assets/kitchen.png");

        var dialog = Crafty.e("2D, Canvas, Dialogues").setDialogues(KITCHEN_1_DIALOG);
        dialog.showDialogue();

        var fridge = Crafty.e("2D, Canvas, Tint, Image, Mouse")
                 .attr({ x: 292, y: 140 })
                 .image("assets/fridge_closed.png");

        fridge.open = false;

        var hive = Crafty.e("2D, Canvas, Image")
                   .attr({ x: fridge.x + 20, y: fridge.y + 100, visible: false })
                   .image("assets/bee_hive.png");

        var dietCokeCan = Crafty.e("2D, Canvas, Image")
                          .attr({ x: fridge.x + 32, y: fridge.y + 32, visible: false })
                          .image("assets/diet_coke_can.png");

        fridge.bind('MouseOver', function()
        {
            this.tint("#00FF00", 1);
        })

        fridge.bind('MouseOut', function()
        {
            this.tint("#000000", 0);
        })

        fridge.bind('Click', function()
        {
            fridge.open = !fridge.open;
            if (fridge.open)
            {
                this.image("assets/fridge_open.png");
                if (hive)
                    hive.visible = true;
                if (dietCokeCan)
                    dietCokeCan.visible = true;
                dialog.setDialogue(2);
                dialog.showDialogue();
            }
            else
            {
                this.image("assets/fridge_closed.png");
                if (hive)
                    hive.visible = false;
                if (dietCokeCan)
                    dietCokeCan.visible = false;
            }
        })

        dialog.TakeBeeHive = function()
        {
            hive.destroy();
            hive = null;
        }

        dialog.DrinkDietCoke = function()
        {
            dietCokeCan.destroy();
            dietCokeCan = null;
            IncreaseWifeAnger(0.05);
        }
    })
});