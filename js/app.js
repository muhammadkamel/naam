$(document).ready(function() {
  
  // Calculate by ZZZ
  $(".zzz").click(function() {
    var zDate = new Date(),
      ress = new Date(zDate.getTime()),
      res1 = new Date(zDate.getTime() + 105 * 60000),
      res2 = new Date(res1.getTime() + 90 * 60000),
      res3 = new Date(res2.getTime() + 90 * 60000),
      res4 = new Date(res3.getTime() + 90 * 60000),
      res5 = new Date(res4.getTime() + 90 * 60000),
      res6 = new Date(res5.getTime() + 90 * 60000);

    function retDate(dateObj) {
      var formatted = "";
      var pm = false;
      // Sort the time in 12
      if (dateObj.getHours() > 12) {
        formatted = dateObj.getHours() - 12;
        pm = true;
      } else if (dateObj.getHours() < 12 && dateObj.getHours() != 0) {
        formatted = dateObj.getHours();
        // If the hours is ZERO set the hours to 12 AM
      } else if (dateObj.getHours() == 0) {
        formatted = "12";
        // Set the hours to 12 PM
      } else if (dateObj.getHours() == 12) {
        formatted = "12";
        pm = true;
      }

      if (dateObj.getMinutes() < 10) {
        formatted = formatted + ":0" + dateObj.getMinutes();
      } else {
        formatted = formatted + ":" + dateObj.getMinutes();
      }

      if (pm == true) {
        formatted = formatted + " PM";
      } else {
        formatted = formatted + " AM";
      }
      return formatted;
    }

    document.querySelector(".curr").innerHTML = retDate(ress);
    document.getElementById("resultNow1").innerHTML = retDate(res1);
    document.getElementById("resultNow2").innerHTML = retDate(res2);
    document.getElementById("resultNow3").innerHTML = retDate(res3);
    document.getElementById("resultNow4").innerHTML = retDate(res4);
    document.getElementById("resultNow5").innerHTML = retDate(res5);
    document.getElementById("resultNow6").innerHTML = retDate(res6);
    // $("#resultNow1").html(String(retDate(res1)));
    // $("#resultNow2").html(String(retDate(res2)));
    // $("#resultNow3").html(String(retDate(res3)));
    // $("#resultNow4").html(String(retDate(res4)));
    // $("#resultNow5").html(String(retDate(res5)));
    // $("#resultNow6").html(String(retDate(res6)));
  });
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});