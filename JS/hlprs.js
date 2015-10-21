/*
 * Javascript web helper functions
 *
 */
var status = "";
// Numeric only control handler with keycode(s)
$.fn.ForceNumericOnly =
  function(){
    return this.each(function(){
      $(this).keydown(function(e){
        var key = e.charCode || e.keyCode || 0;
        // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
        // home, end, period, and numpad decimal
        return (
          key == 8 || 
          key == 9 ||
          key == 13 ||
          key == 46 ||
          key == 110 ||
          key == 190 ||
          (key >= 35 && key <= 40) ||
          (key >= 48 && key <= 57) ||
          (key >= 96 && key <= 105));
      });
    });
  };


function statusConfig(x){
status = $("#"+x);
};

/* Output form based status message
  PARAMS: 
    string -> Output message
    int    -> 0=ok | 1=error */   
function setStatus(x,y){
  status.text("");                // Clear current status message
  status.text(x);                 // Set new status string
  var sa = $("#stat-area");       // Status container
  if(y == 0){                     // Status only (not an error)
    sa.removeClass("red");
    sa.removeClass("grn");
    sic.removeClass("fa-exclamation-circle");
    sic.removeClass("fa-check-circle");
    status.removeClass("err");  // Remove past error class
  } else if(y == 1){              // Error code
    status.addClass("err");     // Add error class
    sa.addClass("red");
    sa.removeClass("grn");
    sic.addClass("fa-exclamation-circle");
    sic.removeClass("fa-check-circle");
  } else if(y == 2){              // Good status (success)
    sa.removeClass("red")
    sa.addClass("grn");
    sic.removeClass("fa-exclamation-circle");
    status.removeClass("err");
    sic.addClass("fa-check-circle");
  }
};