///************  Login ************ */




const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('psswrd').value;
    if(email == "beimanguruji@gmail.com" && password == "beiman"){
        const loginArea = document.getElementById('login');
        loginArea.style.display = "none";
        const transactionArea = document.getElementById('transaction');
        transactionArea.style.display = "block";
    }
    else if (email == "" && password == ""){
        const impMessage = document.getElementById('impInfo');
        impMessage.style.display = "block";
    }
    else {
        const alertMessage = document.getElementById('alert');
        alertMessage.style.display = "block";
    }
})

///************  Transaction ************ */

    //Deposit event handler

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    
    const depositNumber = getInputNumber("depoAmount");

    if (depositNumber < 0){
        alert('Negative input not allowed!');
    }
    else {
        //Deposit amount
            
        updateSpanText("currentdeposit", depositNumber);

        //Balance amount

        updateSpanText("currentBalance", depositNumber);

        document.getElementById("depoAmount").value = "";
    }
})

    //withdraw event handler

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdrawAmount");

    const confirmation = confirm(`D you want to proceed withdrawing`+' '+withdrawNumber+'  ?');
    if (confirmation == true){
        updateSpanText("currentWithdraw", withdrawNumber);
        updateSpanText("currentBalance", -1 * withdrawNumber);

        document.getElementById("withdrawAmount").value = "";
    }
    else{
        document.getElementById("withdrawAmount").value = "";
    }
    
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    amountNumber = parseFloat(amount);
    return amountNumber;
}


function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    
    const totalBalance = depositNumber + currentNumber;

    document.getElementById(id).innerText = totalBalance;
}


