let hellobtn = document.querySelector('button');
/*hellobtn.addEventListener('click',showMsg);

function showMsg()
{
    alert("hiiiiiiiiiiiiii");
}*/

hellobtn.addEventListener('click',inputMsg);

function inputMsg()
{
    let name=prompt('enter your name');
    hellobtn.textContent='HI '+ name + ' .... WE ARE EXCITED TO HAVE YOU HERE..!!!';
}