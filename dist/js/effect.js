window.onscroll = function(){effectFunction()};

function effectFunction(){
    if(document.documentElement.scrollTop > 200 ){
        document.getElementById("hd").className = "header scroll";
        document.getElementById("ct").className = "content-wrapper slideUp";
    }else{
        document.getElementById("hd").className = "header";
        document.getElementById("ct").className = "content-wrapper slideDown";
    }
}