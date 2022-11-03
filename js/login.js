document.getElementById('btn-submit').addEventListener('click',function(){
    const email = EnterloginInfo('email-field');
    const passward = EnterloginInfo('passward-field');
    console.log(email,passward);

    if(email === 'suraiyamim@gmail.com' && passward=== 'mim'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }
})

function EnterloginInfo(inputId){
    const infoField = document.getElementById(inputId);
    const inputValue = infoField.value;
    return inputValue;
}
