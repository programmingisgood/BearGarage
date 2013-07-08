
Crafty.scene("Outside", function()
{
    Crafty.load(['assets/outside.png'], function()
    {
        var bg = Crafty.e("2D, Canvas, Image")
                .attr({ w: Crafty.viewport.width, h: Crafty.viewport.height })
                .image("assets/outside.png");

        var hive = Crafty.e("2D, Canvas, Image, Tweener")
                   .attr({ x: 190, y: 110, z: 1, visible: false })
                   .image("assets/bee_hive.png");
        hive.numBeesEntered = 0;

        hive.bind("BeeEntersHive",
            function()
            {
                this.numBeesEntered++;
                if (this.numBeesEntered >= 10)
                {
                    hive.addTween({ rotation: 6 }, "easeInOutBounce", 40,
                        function()
                        {
                            hive.addTween({ rotation: -8 }, "easeInOutBounce", 40,
                                function()
                                {
                                    hive.addTween({ x: -64, y: 64 }, "easeInQuad", 300,
                                        function()
                                        {
                                            dialog.setDialogue(5);
                                            dialog.showDialogue();
                                        })
                                })
                        })
                }
            })

        var dialog = Crafty.e("2D, Canvas, Dialogues").setDialogues(OUTSIDE_1_DIALOG);
        dialog.showDialogue();

        dialog.StickHiveInTree = function()
        {
            hive.visible = true;
        }

        dialog.ThrowHiveOnLawn = function()
        {
            hive.visible = true;
            hive.x = -128;
            hive.y = 200;
            hive.addTween({ x: 240, y: 300, rotation: 90}, "easeOutSine", 40);
        }

        var CreateBee = function(x, y, speed)
        {
            var bee = Crafty.e("2D, Canvas, Image, Tweener")
                  .attr({ x: x, y: y, z: 2 })
                  .image("assets/bee.png")
                  .addTween({ x: hive.x + 28, y: hive.y + 54 }, "easeInOutCubic", speed,
                    function()
                    {
                        Crafty.trigger("BeeEntersHive");
                        this.destroy();
                    })
        }

        dialog.AttractBees = function()
        {
            CreateBee(-32, 100, 300);
            CreateBee(-32, 200, 200);
            CreateBee(32, -32, 340);
            CreateBee(58, -100, 280);
            CreateBee(100,-60, 260);
            CreateBee(190, -32, 230);
            CreateBee(280, -160, 310);
            CreateBee(360, -100, 260);
            CreateBee(420, 46, 250);
            CreateBee(430, 200, 330);
        }

        var burglar = null;
        dialog.BurglarStealsHive = function()
        {
            burglar = Crafty.e("2D, Canvas, Image, Tweener")
                      .attr({ x: 400, y: 230 })
                      .image("assets/burglar-128.png")
                      .origin(16, 64)
                      .addTween({ rotation: -24 }, "easeOutSine", 100,
                        function()
                        {
                            this.addTween({ rotation: 0 }, "easeOutSine", 12,
                                function()
                                {
                                    this.addTween({ rotation: 0 }, "easeOutSine", 40,
                                        function()
                                        {
                                            this.addTween({ x: 240 }, "easeOutSine", 60,
                                            function()
                                            {
                                                dialog.setDialogue(9);
                                                dialog.showDialogue();
                                            });
                                        });
                                });
                        });
        }

        dialog.BurglarStealsHive2 = function()
        {
            hive.addTween({ x: burglar.x - 16, y: burglar.y + 10, rotation: 0 }, "easeOutQuad", 24,
                function()
                {
                    hive.addTween({ x: -80 }, "easeOutQuint", 70);
                    burglar.addTween({ x: -64 }, "easeOutQuint", 80,
                        function()
                        {
                            dialog.setDialogue(11);
                            dialog.showDialogue();
                        });
                });
        }

        var homeOwner = null;
        dialog.HoldHive = function()
        {
            homeOwner = Crafty.e("2D, Canvas, Image, Tweener")
                        .attr({ x: 240, y: 528 })
                        .image("assets/homeowner-128.png")
                        .addTween({ y: 230 }, "easeOutQuad", 90);

            homeOwner.attach(hive);
            hive.visible = true;
            hive.x = homeOwner.x - 16;
            hive.y = homeOwner.y + 12;
        }

        var beeNegotiator = null;
        dialog.InitExchange = function()
        {
            beeNegotiator = Crafty.e("2D, Canvas, Image, Tweener")
                            .attr({ x: 100, y: -32, z:2 })
                            .image("assets/bee.png")
                            .addTween({ x: 212, y: 220 }, "easeInOutCubic", 160,
                                function()
                                {
                                    dialog.setDialogue(15);
                                    dialog.showDialogue();
                                });
        }

        var honey = null;
        dialog.BeeBringsHoney = function()
        {
            beeNegotiator.addTween({ x: -32 }, "easeInQuad", 140,
                function()
                {
                    honey = Crafty.e("2D, Canvas, Image, Tweener")
                                .attr({ x: beeNegotiator.x + 8, y: beeNegotiator.y - 4 })
                                .image("assets/honey.png");
                    beeNegotiator.attach(honey);
                    beeNegotiator.addTween({ x: -32 }, "easeInQuad", 40,
                        function()
                        {
                            beeNegotiator.addTween({ x: 212 }, "easeOutQuad", 120,
                                function()
                                {
                                    dialog.setDialogue(18);
                                    dialog.showDialogue();
                                });
                        });
                });
        }

        dialog.PlaceHoneyOnLawn = function()
        {
            beeNegotiator.addTween({ x: beeNegotiator.x - 16, y: 350 }, "easeInOutQuad", 80,
                function()
                {
                    beeNegotiator.detach();
                    beeNegotiator.addTween({ y: 220 }, "easeInOutQuad", 70,
                        function()
                        {
                            dialog.setDialogue(19);
                            dialog.showDialogue();
                        });
                });
        }

        dialog.GiveUpHive = function()
        {
            homeOwner.detach();
            hive.addTween({ x: homeOwner.x - 180, y: 280 }, "easeOutSine", 50,
                function()
                {
                    homeOwner.addTween({ x: 198 }, "easeInOutSine", 40,
                        function()
                        {
                            honey.addTween({ x: honey.x - 8, y: homeOwner.y + 54 }, "easeInOutSine", 30,
                                function()
                                {
                                    homeOwner.attach(honey);
                                    homeOwner.addTween({ y: 528 }, "easeInSine", 60,
                                        function()
                                        {
                                            ChangeScene("GarageWithHoney");
                                        });
                                });
                        });
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