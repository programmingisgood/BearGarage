
Modules = { SetOnAllLoadedCallback: function(callbackFunc) { this.onAllLoaded = callbackFunc }, onAllLoaded: null, allLoaded: false, _allModules:
[ { name: "Tweener" },
  { name: "Dialogues" },
  { name: "Shape" } ] }

var loadModules = { };
for (var i = 0; i < Modules._allModules.length; i++)
{
    var module = Modules._allModules[i];
    loadModules[module.name] = "RELEASE";
}

Crafty.modules('http://cdn.craftycomponents.com/', loadModules, function()
{
    Modules.allLoaded = true;
    Modules.onAllLoaded();
});