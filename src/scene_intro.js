
Crafty.scene('Intro', function()
{
    Crafty.load(['assets/intro.png'], function()
    {
        var bg = Crafty.e("2D, Canvas, Image")
                .attr( {w: Crafty.viewport.width, h: Crafty.viewport.height} )
                .image("assets/intro.png");

        this.bear = Crafty.e("2D, Canvas, Image, Tween")
                    .attr({ x: 400, y: 300, w: 64, h: 64 })
                    .image("assets/bear.png")
                    .tween({ x: 100, y: 250 }, 300);

        this.bear.state = 1;

        this.bear.bind('TweenEnd', function()
        {
            if (this.state == 1)
            {
                this.tween({ x: 100, y: 200, alpha: 0 }, 100);
                this.state = 2;
            }
            else
            {
                Crafty.scene('Garage');
            }
        });
    })
});