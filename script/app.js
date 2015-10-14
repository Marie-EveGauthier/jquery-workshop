//stop submitting while we do confirmation of the password
$('#signup-form').on('submit', function(event) {
    
    
    //find out the values of the password and confirm password fields of the form  
    var $password = $('input[name=password]').val();
    var $confirmedPassword = $('input[name=password2]').val();
    
    if ($password !== $confirmedPassword) {
        alert("Both password didn't match.");
        event.preventDefault();
    }
    if($password.length < 10 ) {
        alert("Your password is too short.");
        event.preventDefault();
        
    }
   
});


  

 
