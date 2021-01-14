"use strict";

async function loadData() {
  let response = await fetch("../data/json.json");
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

