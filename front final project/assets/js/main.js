document.querySelector("header .bar-menu").onclick = function(){
    document.querySelector("header #menu").classList.toggle("d-none");
}

// let index= 2
// document.querySelector("#whatStudentSay .arrows .left").onclick = function(){
//     document.querySelector("#whatStudentSay .contents.active").classList.remove("active");
//     index--;
//     if(index<1){
//         index=index+3;
//     }
//     document.querySelector("#whatStudentSay .contents[data-id='{index}']")
//     console.log(index);
// }

// document.querySelector("#whatStudentSay .arrows .right").onclick = function(){
//     document.querySelector("#whatStudentSay .contents.active").classList.remove("active");
//     index++;
//     if(index>3){
//         index=index-3;
//     }
//     console.log(index);
// }


document.querySelector("#whatStudentSay .arrows .left").onclick= function(){
    let active= document.querySelector("#whatStudentSay .contents.active");
    active.classList.remove("active");

    if(active.parentElement.previousElementSibling === null){
        active.parentElement.parentElement.lastElementChild.firstElementChild.classList.add("active");
    }
    else{
    active.parentElement.previousElementSibling.firstElementChild.classList.add("active");
    }

    

}

document.querySelector("#whatStudentSay .arrows .right").onclick= function(){
    let active= document.querySelector("#whatStudentSay .contents.active");
    active.classList.remove("active");

    if(active.parentElement.nextElementSibling === null){
        active.parentElement.parentElement.firstElementChild.firstElementChild.classList.add("active");
    }
    else{
    active.parentElement.nextElementSibling.firstElementChild.classList.add("active");
    }

}

document.querySelector("#trusted .arrows .left").onclick= function(){
    let active= document.querySelector("#trusted li.active");
    active.classList.remove("active");

    if(active.previousElementSibling === null){
        active.parentElement.lastElementChild.classList.add("active");
    }
    else{
    active.previousElementSibling.classList.add("active");
    }

    

}

document.querySelector("#trusted .arrows .right").onclick= function(){
    let active= document.querySelector("#trusted li.active");
    active.classList.remove("active");

    if(active.nextElementSibling === null){
        active.parentElement.firstElementChild.classList.add("active");
    }
    else{
    active.nextElementSibling.classList.add("active");
    }

}