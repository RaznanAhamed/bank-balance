let txtBalance = document.getElementById("balance");
let theForm = document.getElementById("balanceForm");

let txtAmount = document.getElementById("amount");

let btnDeposit = document.getElementById("deposit");
let btnWithdraw = document.getElementById("withdraw");

window.addEventListener("load", init);
btnDeposit.addEventListener("click", deposit);
btnWithdraw.addEventListener("click", withdraw);

let balance;

function init(){
    balance = 0.0;
    txtBalance.innerText = `$${balance.toFixed(2)}`;
}

function deposit(){
    if(theForm.checkValidity()){
        event.preventDefault(event);
        balance += parseFloat(txtAmount.value);
        txtBalance.innerText = `$${balance.toFixed(2)}`;
    }
}

function withdraw(){
    if(theForm.checkValidity()){
        event.preventDefault(event);
        balance -= parseFloat(txtAmount.value);
        txtBalance.innerText = `$${balance.toFixed(2)}`;
        if (balance <= 0){
            document.getElementById("balance").setAttribute("class", "overdrawn");
        }
    }
}

