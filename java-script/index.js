console.log('Ooooooo')
//// Sign In page js-----------------
document.getElementById('btnSignIn').addEventListener('click', function(){
    console.log('login done')
    // 1 get the mobile number
    const inputUsername= document.getElementById('input-Username');
    const contactUsername= inputUsername.value;
    console.log(contactUsername);

    // 2 get the pin
    const inputPin= document.getElementById('input-pin');
    const contactPin= inputPin.value;
    console.log(contactPin);
    
    // 3 match pin and mobile number
    if(contactUsername=='admin' && contactPin=='admin123'){
        // 3.1 true:::>> alert> homepage
        alert('Sign In Success')
        window.location.assign("home.html")
    }
    // 3.2 false:::>> alert> return
    else{
        alert('Sign In Failed');
    }
    return;
    
});

