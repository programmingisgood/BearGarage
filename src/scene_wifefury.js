
Crafty.scene("WifeFury", function()
{
    Crafty.load(['assets/garage.png'], function()
    {
        var bg = Crafty.e("2D, Canvas, Image")
                .attr({ w: Crafty.viewport.width, h: Crafty.viewport.height })
                .image("assets/garage.png");

        var bear = Crafty.e("2D, Canvas, Image, Tweener")
                    .attr({ x: 120, y: 180 })
                    .image("assets/bear-128.png");

        var wife = Crafty.e("2D, Canvas, Image, Tweener")
                    .attr({ x: 150, y: 190 })
                    .image("assets/wife-128.png");

        var dialog = Crafty.e("2D, Canvas, Dialogues").setDialogues(WIFE_FURY_1_DIALOG);
        dialog.showDialogue();

        dialog.WifeAndBearLeave = function()
        {
            wife.addTween({ y: 300 }, 'easeInOutCubic', 120,
                function()
                {
                    wife.addTween({ x: 440 }, 'easeInCubic', 90);
                    bear.addTween({ y: 300 }, 'easeInOutCubic', 120,
                        function()
                        {
                            bear.flip("X");
                            bear.addTween({ x: 440 }, 'easeInCubic', 90,
                                function()
                                {
                                    ChangeScene("Marriage");
                                });
                        })
                });
        }

        /*Crafty.e('2D, Canvas, Text, Tweener')
            .text('Get that dang bear outta your garage!')
            .attr({ x: Game.width() * 0.2 / 2, y: Game.height() / 4, w: Game.width() * 0.8 })
            .css($center_text_css)
            .textFont({ size: '45px', weight: 'bold' })
            .textColor('#BB0000')
            .addTween({ alpha: 0 }, 'easeInQuart', 120, function() { StartDialog(); });*/
    })
});