document.getElementById('btn-deposit').addEventListener('click',function(){
    const deposit = transaction('deposit-field', 'deposit-total');

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);

    const depositField = document.getElementById('deposit-field');
    const depositValue = parseFloat(depositField.value);
    
    if(isNaN(depositValue)){
        alert('Please provide a valid number');
        return;
    }
    const totalBalance = depositValue + previousBalanceTotal;
    balanceTotal.innerText = totalBalance;

    depositField.value = '';
})
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdraw = transaction('withdraw-field','withdraw-total');

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValue = withdrawField.value;

    if(isNaN(withdrawFieldValue)){
        alert('Please provide a valid number');
        return;
    }

    if(withdrawFieldValue > previousBalanceTotal){
        alert('Insufficient Balance');
        return;
    }

    const totalBalance = previousBalanceTotal - withdrawFieldValue;
    balanceTotal.innerText = totalBalance;

    withdrawField.value = '';
})

function transaction(inputFieldId,setValueField){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);
    const setValueFieldElement = document.getElementById(setValueField);
    const previousValue = parseFloat(setValueFieldElement.innerText);

    const totalAmount = inputFieldValue + previousValue ;
    setValueFieldElement.innerText = totalAmount;
    return setValueFieldElement.innerText;
}