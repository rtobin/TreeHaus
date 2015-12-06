
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

// signout modal
$(function(){
  $("body").on("click", ".js-modal-open", function(event){
    event.preventDefault();
    $(".modal").addClass("is-open");
  });
  $("body").on("click", ".js-modal-close", function(event){
    event.preventDefault();
    $(".modal").removeClass("is-open");
  });
});

function h(e) {
    $(e).css({'height':'auto','overflow-y':'hidden'}).height(e.scrollHeight);
}
$('textarea').each(function () {
  h(this);
}).on('input', function () {
  h(this);
});

function niceDates(datetime) {

}
