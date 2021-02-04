"use strict";

// hamburger navigacio 
let cbOpen = true;
function hamburgerNav() {
 
    if(cbOpen==false)//ha zarva van
    {
        document.querySelector(".nnav").classList.remove("nav-open");
        document.querySelector(".ham-menu-line").classList.remove("line-rot");
        document.querySelector(".ham-menu-linea").classList.remove("linea-rot");
        document.querySelector(".ham-menu-lineb").classList.remove("lineb-rot");
        
        cbOpen = true;
    }
    else if(cbOpen==true)
    {
      
        document.querySelector(".nnav").classList.add("nav-open");
        document.querySelector(".ham-menu-line").classList.add("line-rot");
        document.querySelector(".ham-menu-linea").classList.add("linea-rot");
        document.querySelector(".ham-menu-lineb").classList.add("lineb-rot");


        document.querySelector(".nnav").addEventListener('click', function() {
          document.querySelector(".nnav").classList.remove("nav-open");
          document.querySelector(".ham-menu-line").classList.remove("line-rot");
          document.querySelector(".ham-menu-linea").classList.remove("linea-rot");
          document.querySelector(".ham-menu-lineb").classList.remove("lineb-rot");
          cbOpen = true;
        });
        cbOpen = false;
    }  
  }















async function loadData() {
  let response = await fetch("/data/json.json");
  let jsonData = await response.json();
  console.log(jsonData); 
  appendNav(jsonData)
}
loadData();

function appendNav(items)
{
    let temlplete = ""

    for (let item of items) {
        temlplete += `<a href="../sub/${item.title}.html"><p>${item.title}</p></a> `
        console.log(item.title);
    }
    document.querySelector(".nnav").innerHTML += temlplete;
}

