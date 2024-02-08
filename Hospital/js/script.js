/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
  
 // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

  // document.getElementById("dropDown").addEventListener("click", function() {
  //   triangle1.onclick();
  // })

  


  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown1");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }




// Sign in
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// Sign up

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// let a = document.getElementById('myDropdown')
// a.onclick = click;
// function click(){
//     let b = document.getElementById('myDropdown1')
//     b.classList.toggle('show1')
// }


// var triangle = document.getElementById("erankyuni");
// triangle.onclick = function() {

//     triangle.setAttribute("style","transform: rotate(180deg);")};

    // if(!triangle.onclick('.fa')){
    //   triangle.onclick = function() {
    //     triangle.setAttribute("style","transform: rotate(180deg);")
    // };
    // }
    

// var triangle1 = document.getElementById("erankyuni1");
// var count = 0;
// triangle1.onclick = function() {
//     if (count % 2 == 0) {
//       triangle1.setAttribute("style","transform: rotate(180deg);")
//     } else {
//       triangle1.setAttribute("style","transform: rotate(0deg);")
//     }
//     count++;
// };


    
// if(!triangle1.onclick('.fa')){
//   triangle1.onclick = function() {
//   triangle1.setAttribute("style","transform: rotate(180deg);")
//   };
// }


//function rotImg(){
 // document.getElementById("erankyuni").classList.toggle("fa");

 
//}

// window.onclick = function(e){
//   if (!e.target.matches('.fa')) {
//     var triangle = document.getElementById("erankyuni");
//       if (triangle.classList.contains('erankyuni')) {
//         triangle.classList.remove('erankyuni');
//       }
//     }
//   }


