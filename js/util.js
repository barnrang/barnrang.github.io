function hide(i) {
    var x = document.getElementsByClassName("hidebox")[i];
    console.log(x)
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    }

// document.addEventListener("DOMContentLoaded", function(event) { 
//   //do work
//   console.log('add util')
//   function hide() {
//     var x = document.getElementById("hidebox");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
//     }
// });
