
function inherit(Child, Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  Child.prototype = new Surrogate();
  Child.prototype.constructor = Child;
  return Child;
}

// handy jquery method for making callbacks for clicking off an object
$.fn.clickOff = function (callback, selfDestroy) {
  var clicked = false;
  var parent = this;
  var destroy = selfDestroy || true;

  parent.click(function() {
    clicked = true;
  });

  $(document).click(function(event) {
    if (!clicked) {
      callback(event, parent);
    }
    if (destroy) {
      // might be trouble!!!
      // parent.clickOff = function() {};
      // parent.off("click");
      // $(document).off("click");
      // parent.off("clickOff");
    }
    clicked = false;
  });
};

function createClickOffHandler(selector, callback) {
  $(selector).clickOff(callback);
}

function randString(x){
  var s = "";
  while(s.length<x&&x>0){
    var r = Math.random();
    s+= (r<0.1?Math.floor(r*100):String.fromCharCode(Math.floor(r*26) + (r>0.5?97:65)));
  }
  return s;
}
