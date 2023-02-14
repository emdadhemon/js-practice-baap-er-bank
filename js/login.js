document.getElementById('button-login').addEventListener('click', function(){
    const useremail = document.getElementById('user-email');
    const email = useremail.value ;
    const userpassword = document.getElementById('user-password');
    const password = userpassword.value;
    if(email === 'emdad@gmail.com' && password === 'emdad' ){
        window.location.href = 'bank.html'; 
    }
    else {
        alert ('invalid User')
    }
})