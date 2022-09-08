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



function validation(){
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;

    if(username==''||password==''){
        alert('Both fields are required.');
        return false;
    }
    if(username==password){
        alert('Both fields should not be same.');
        return false;
    }
}

function Menu(){
    let menu=document.getElementById('menu').classList;
    if(menu.contains('hidden')){
        menu.remove('hidden');
    }
    else{
        menu.add('hidden');
    }
}
/*
let signup=document.getElementById('signupbtn');
signup.addEventListener('click',function checkpassword(){
    var npassword=document.getElementById('npassword').value;
    var cpassword=document.getElementById('cpassword').value;
    if(cpassword!=npassword){
        document.getElementById('notify').innerHTML='Password do not match';
    }
  

})*/
