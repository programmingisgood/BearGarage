
// This file has the global functions used in all scenes and in the dialog tree.

wifeAngerMeter = null;
function AddWifeMeter()
{
    var meterPos = { x: 32, y: 400 - 32, z: 100 };
    var background = Crafty.e("2D, Canvas, Shape, Persist")
                     .attr(meterPos)
                     .rect(102, 32)
                     .color("#444444");

    var foreground = Crafty.e("2D, Canvas, Shape, Tweener, Persist")
                     .attr({ x: meterPos.x + 1, y: meterPos.y + 1, z: meterPos.z })
                     .rect(0, 30)
                     .color("#FF0000");

    var wifeIcon = Crafty.e("2D, Canvas, Image, Persist")
                   .attr({ x: meterPos.x - 32, y: meterPos.y, z: meterPos.z })
                   .image("assets/wife_icon.png");

    wifeAngerMeter = { background: background, foreground: foreground, wifeIcon: wifeIcon, SetAnger: function(anger) { this.foreground.w = 100 * anger } };
}

function IncreaseWifeAnger(amount)
{
    var goal = wifeAngerMeter.foreground.w + 100 * amount;
    goal = Math.min(Math.max(goal, 0), 100);
    if (wifeAngerMeter.isTweening)
    {
        if (wifeAngerMeter.nextTween)
            wifeAngerMeter.nextTween += amount;
        else
            wifeAngerMeter.nextTween = amount;
        return;
    }

    wifeAngerMeter.isTweening = true;
    wifeAngerMeter.foreground.addTween({ w: goal }, "easeOutCubic", 50,
        function()
        {
            console.log(this.w);
            wifeAngerMeter.isTweening = false;
            if (this.w >= 100)
            {
                ChangeScene("WifeFury");
                return;
            }

            if (wifeAngerMeter.nextTween)
            {
                var nextTween = wifeAngerMeter.nextTween;
                wifeAngerMeter.nextTween = null;
                IncreaseWifeAnger(nextTween);
            }
        });
}

function ChangeScene(scene)
{
    Crafty.scene(scene);
}

bear = null;
function ShakeBear()
{
    bear.addTween({ x: bear.x - 8 }, "easeOutElastic", 20, function() { bear.addTween({ x: bear.x + 8 }, "easeOutElastic", 20); });
}