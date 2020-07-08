function validateForm(){
        var email = document.form1.email;
		var x = document.forms["form1"]["email"].value;
		var atpos = x.indexOf("@");
		var dotpos = x.lastIndexOf(".");
        var opt1 = document.getElementById("btn1");
        var opt2 = document.getElementById("btn2");
		var date = document.form1.dob;
        
        if (email.value == "" || email.value == null)
        {
            alert("Please enter a valid e-mail address.");
            return false;
        }

        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
			alert("Not a valid e-mail address");
			return false;
		}
		
		
		if ( date.value =="" ){
			alert("Please enter date of birth"); return false;
		}	
		
		var Valid=true;
}