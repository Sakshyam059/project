function showMenu(){
    document.getElementById('menu').style.display='block';
    document.getElementById('cancel').style.display='block';

}
function hideMenu(){
    document.getElementById('menu').style.display='none';
    document.getElementById('cancel').style.display='none';
}
function showForm(){
    document.getElementById('formmain').style.display='block';
  
}
function hideForm(){
    document.getElementById('formmain').style.display='none';
  
}
/*
document.addEventListener('mouseup', function(e){
    var container = document.getElementById('menu-items');

    if(!container.contains(e.target)){
        document.getElementById('menu').style.display='none';
    document.getElementById('cancel').style.display='none';

    }
});*/
document.addEventListener('mouseup', function(e){
    var container = document.getElementById('form');

    if(!container.contains(e.target)){
        document.getElementById('formmain').style.display='none';
    document.getElementById('cancel').style.display='none';

    }
});



function login(){
    var pw = document.getElementById("password").value;  
  //check empty password field  
  if(pw == "") {  
     document.getElementById("notify").innerHTML = "Fill the password please!";  
     return false;  
  }  
   
 //minimum password length validation  
  if(pw.length < 8) {  
     document.getElementById("notify").innerHTML = "Password length must be atleast 8 characters";  
     return false;  
  }  
  
//maximum length of password validation  
  if(pw.length > 15) {  
     document.getElementById("notify").innerHTML = "Password length must not exceed 15 characters";  
     return false;  
  } else {  
     alert("Password is correct");  
  } 
}
