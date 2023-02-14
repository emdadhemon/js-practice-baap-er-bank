document.getElementById('button-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositFieldString = depositField.value ;
    const newDepositField = parseFloat(newDepositFieldString);

    depositField.value = "";

    if(isNaN(newDepositField)){
        alert ('please provide a valid number')
        return;
    }

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositField ;
    depositTotal.innerText = currentDepositTotal ;

    const previousBalance = document.getElementById('balance-total');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);

    const currentBalance = previousBalanceTotal + newDepositField;
    previousBalance.innerText = currentBalance;

    depositField.value = "";
})