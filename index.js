// HORIZONTAL AD 1
var formdata = new FormData();
formdata.append("type", "Horizontal Strip");
formdata.append("tags", "food,restaurant,entertainment,africa,namibia,local,beauty,fashion,travel");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler1, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "NDMeiHZWF41ZSf71Y8NLevJ35GVoPskT");

ajax.send(formdata);

function completeHandler1(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIMG1').src = response.link;
    document.querySelector('.advertIMG1').alt = response.alt;
    document.querySelector('.anchorElement1').href = response.href;
}

// DARK SQUARE AD
var formdata = new FormData();
formdata.append("type", "Dark Square");
formdata.append("tags", "food,restaurant,entertainment,africa,namibia,local,beauty,fashion,travel");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler2, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "NDMeiHZWF41ZSf71Y8NLevJ35GVoPskT");

ajax.send(formdata);

function completeHandler2(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIMG2').src = response.link;
    document.querySelector('.advertIMG2').alt = response.alt;
    document.querySelector('.anchorElement2').href = response.href;
}

// LIGHT SQUARE AD
var formdata = new FormData();
formdata.append("type", "Light Square");
formdata.append("tags", "food,restaurant,entertainment,africa,namibia,local,beauty,fashion,travel");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler3, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "NDMeiHZWF41ZSf71Y8NLevJ35GVoPskT");

ajax.send(formdata);

function completeHandler3(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIMG3').src = response.link;
    document.querySelector('.advertIMG3').alt = response.alt;
    document.querySelector('.anchorElement3').href = response.href;
}