
function myFunction() {
  return document.getElementById("locationSelected").value;
}

function myFunction2() {
  return document.getElementById("gradeSelected").value;
}

function myFunction3(){
  console.log("Entered function3 after grade selected.");
  var loc = myFunction();
  var grade = myFunction2();
  var hashName;     //declare to use later for where to go on redirect page.
    if (loc=="fremont"){    //if fremont was selected, check which grade selected and redirect to the fremont page to the grade section.
      if (grade=="elem"){
        hashName="elementaryfremont";
        location.replace('fremont.html#' + hashName);
      } else if (grade=="mid"){
        hashName="middlefremont";
        location.replace('fremont.html#' + hashName);
      } else if (grade=="high"){
        hashName="highfremont";
        location.replace('fremont.html#' + hashName);
      }
       // else if (grade=="other"){   //goes to the top of fremont page if 'other' selected as grade.
      //   hashName="other";
      //   location.replace('fremont.html');
      // }

    } else if (loc=="sj"){
      if (grade=="elem"){
        hashName="elementarysanjose";
        location.replace('sanjose.html#' + hashName);
      } else if (grade=="mid"){
        hashName="middlesanjose";
        location.replace('sanjose.html#' + hashName);
      } else if (grade=="high"){
        hashName="highsanjose";
        location.replace('sanjose.html#' + hashName);
      }
      // else if (grade=="other"){   //if grade is selected as other, just goes to the top of sanjose page.
      //   hashName="other";
      //   location.replace('sanjose.html');
      // }

    } else if (loc=="mil"){
      if (grade=="elem"){
        hashName="elementarymilpitas";
        location.replace('milpitas.html#' + hashName);
      } else if (grade=="mid"){
        hashName="middlemilpitas";
        location.replace('milpitas.html#' + hashName);
      } else if (grade=="high"){
        hashName="highmilpitas";
        location.replace('milpitas.html#' + hashName);
      }
      // else if (grade=="other"){   //if grade is selected as other, just goes to the top of milpitas page.
      //   hashName="other";
      //   location.replace('milpitas.html');
      // }

    } else if (loc=="other"){
      if (grade=="elem"){
        hashName="elementaryother";
        location.replace('otherlocation.html#' + hashName);
      } else if (grade=="mid"){
        hashName="middleother";
        location.replace('otherlocation.html#' + hashName);
      } else if (grade=="high"){
        hashName="highother";
        location.replace('otherlocation.html#' + hashName);
      }
      // else if (grade=="other"){   //if grade is selected as other, just goes to the top of other page.
      //   hashName="other";
      //   location.replace('otherlocation.html');
      // }
    }
  }

// //STICK BAR BELOW
// $(document).ready(function() {
//   // When the user scrolls the page, execute stickyFunc
//   window.onscroll = function() {stickyFunc()};
//
//   // Get the navbar
//   var navbar = document.getElementById("myContainer");
//
//   // Get the offset position of the navbar
//   var sticky = navbar.offsetTop;
//
//   // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
//   function stickyFunc() {
//     if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky");
//     } else {
//       navbar.classList.remove("sticky");
//     }
//   }
// });
