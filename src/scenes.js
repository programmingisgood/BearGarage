// Game scene
// -------------
// Runs the core gameplay loop
Crafty.scene('Game', function()
{
    Crafty.load(['assets/garage.png'], function()
    {
        var bg = Crafty.e("2D, DOM, Image")
                .attr({ w: Crafty.viewport.width, h: Crafty.viewport.height })
                .image("assets/garage.png");

        this.bear = Crafty.e("2D, DOM, Image, Tweener").image("assets/bear-128.png")
                    .attr({ x: 120, y: 180 });

        this.bear.Shake = function() { this.addTween({ x: this.x - 20 }, "easeOutElastic", 50, function() { this.addTween({ x: this.x + 20 }, "easeOutElastic", 50); }); };

        var StartDialog = function()
        {
            var dialog = Crafty.e("2D, DOM, Dialogues").setDialogues(DIALOGUES_DATA_SOURCE);
            dialog.showDialogue();

            var bear = this.bear;
            dialog.ShakeBear = function() { bear.Shake(); };
        }

        Crafty.e('2D, DOM, Text, Tweener')
            .text('Get that dang bear outta your garage!')
            .attr({ x: Game.width() * 0.2 / 2, y: Game.height() / 4, w: Game.width() * 0.8 })
            .css($center_text_css)
            .textFont({ size: '45px', weight: 'bold' })
            .textColor('#BB0000')
            .addTween({ alpha: 0 }, 'easeInQuart', 120, function() { StartDialog(); });
    })
});
 
// Loading scene
// -------------
// Handles the loading of binary assets such as images and audio files
Crafty.scene('Intro', function()
{
    // Draw some text for the player to see in case the file
    //  takes a noticeable amount of time to load
    Crafty.e('2D, DOM, Text')
        .text('Loading...')
        .attr({ x: 0, y: Game.height() / 2, w: Game.width() })
        .css($center_text_css);
    
    // Load our sprite map image
    Crafty.load(['assets/intro.png'], function()
    {
        var bg = Crafty.e("2D, DOM, Image")
                .attr( {w: Crafty.viewport.width, h: Crafty.viewport.height} )
                .image("assets/intro.png");

        this.bear = Crafty.e("2D, DOM, Image, Tween")
                    .attr({ x: 400, y: 300, w: 64, h: 64 })
                    .image("assets/bear.png")
                    .tween({ x: 100, y: 250 }, 300);

        this.bear.state = 1;

        this.bear.bind('TweenEnd', function()
        {
            if (this.state == 1)
            {
                this.tween({ x: 75, y: 200, alpha: 0 }, 100);
                this.state = 2;
            }
            else
            {
                Crafty.scene('Game');
            }
        });
    })
});