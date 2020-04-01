


function validate(form_id,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
        alert('Введыть корректний e-mail');
        return false;
    }

    let password = document.getElementById("inputPassword3").value;
    if (password.length < 5) {
        alert('Пароль занадто короткий, придумайте новий')
    } else {
        alert('Всі дані введені правильно')
    }
}

let x = 0;
let y = 0;
let z = 0;

function myMoveFunction() {
    document.getElementById("demo").innerHTML = z+=1;
}

function myEnterFunction() {
    document.getElementById("demo2").innerHTML = x+=1;
}

function myOverFunction() {
    document.getElementById("demo3").innerHTML = y+=1;
}