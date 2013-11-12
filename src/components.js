
Crafty.c("ConstrainPosition",
{
    init: function()
    {
        this.requires("2D");
        this.bind("Change",
            function()
            {
                if (this.x1 && this.x < this.x1)
                    this.x = this.x1;
                else if (this.x2 && this.x > this.x2)
                    this.x = this.x2;
                if (this.y1 && this.y < this.y1)
                    this.y = this.y1;
                else if (this.y2 && this.y > this.y2)
                    this.y = this.y2;
            });
    },

    constrain: function(x1, x2, y1, y2)
    {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        return this;
    }
});

Crafty.c("MoveToTarget",
{
    init: function()
    {
        this.requires("2D");
        this.bind("EnterFrame",
            function()
            {
                if (!this.atTarget && this.targetX && this.targetY && this.targetMoveSpeed)
                {
                    var target = new Crafty.math.Vector2D(this.targetX - this.x, this.targetY - this.y);
                    if (target.magnitude() <= this.targetMoveSpeed)
                    {
                        this.x = this.targetX;
                        this.y = this.targetY;
                        this.atTarget = true;
                        if (this.atTargetCallback)
                        {
                            this.atTargetCallback();
                        }
                    }
                    target.normalize().scale(this.targetMoveSpeed);
                    this.shift(target.x, target.y);
                }
            });
    },

    target: function(x, y, speed, callback)
    {
        this.targetX = x;
        this.targetY = y;
        this.targetMoveSpeed = speed;
        this.atTargetCallback = callback;
        this.atTarget = false;
        return this;
    }
});