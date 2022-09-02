window.onscroll = function(){effectFunction()};

function effectFunction(){
    if(document.documentElement.scrollTop > 200 ){
        document.getElementById("ct").className = "content-wrapper slideUp";
    }else{
        document.getElementById("ct").className = "content-wrapper slideDown";
    }
}

function naviResponsive(){
    var x = document.getElementById("navigation");
    if(x.className === "navi-bar"){
        x.className += " nav-res";
    }else{
        x.className = "navi-bar";
    }
}