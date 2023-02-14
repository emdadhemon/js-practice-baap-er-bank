document.getElementById('button-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value ;
    const newWithdrawField = parseFloat(newWithdrawFieldString);

    withdrawField.value = "" ;

    if(isNaN(newWithdrawField)){
        alert('please provide a valid number');
        return;
    }
   
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const previousBalance = document.getElementById('balance-total');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);

    if(newWithdrawField > previousBalanceTotal){
        alert('insufficiant fund');
        return;
    }

    const currentWithdrawTotal = newWithdrawField + previousWithdrawTotal ;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalance = previousBalanceTotal - newWithdrawField;
    previousBalance.innerText = currentBalance;

    
})