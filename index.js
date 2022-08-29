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