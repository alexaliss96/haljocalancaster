$(document).ready(function(){
	
	/*
	 * AJAX Section
	 * This function will handle the contact process through AJAX
	 */
	 $('#lcars-contact-beta-honeypot').submit(
		function lcarscontactbetacontactparse() {
			
			// E-MAIL VALIDATION FUNCTION
			var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			
			
			// Values
			var successmessage = "Thank you.";
			var failedmessage = "There was a problem. Please, try again.";
			var usersname = $('#name');
			var usersemail = $('#email');
			var usersphone = $('#phone');
	
			var userssubject = $('#subject');
			var userscomment = $('#comment');
			var usershenanigans = $('#shenanigans');
			var isvalid = 1;
			var url = "lcars-contact-beta-honeypot.php";
			
			//Checking information is correct before sending data
			
			
			//CHECKING E-MAIL IS PRESENT AND IS VALID
			if (usersemail.val() == "") {
				
				$(".error").html('Please, type your e-mail address.');
				$(".error").delay(1200).fadeIn(1000).delay(4000).fadeOut(1000);
				$('input[type=submit]', $("#lcars-contact-beta")).removeAttr('disabled');
				return false;
			}
			
			var valid = emailReg.test(usersemail.val());
			
			if(!valid) {
				
				$(".error").html('Please, enter a valid e-mail');
				$(".error").delay(1200).fadeIn(1000).delay(4000).fadeOut(1000);
				$('input[type=submit]', $("#lcars-contact-beta")).removeAttr('disabled');
				return false;
			}
			//CHECKING E-MAIL IS PRESENT AND IS VALID
			
			
			//CHECKING USERS NAME IS PRESENT
			if (usersname.val() == "") {
				
				$(".error").html('Please, type your name.');
				$(".error").delay(1200).fadeIn(1000).delay(4000).fadeOut(1000);
				$('input[type=submit]', $("#lcars-contact-beta")).removeAttr('disabled');
				return false;
			}
			//CHECKING USERS NAME IS PRESENT
			
			//CHECKING USERS PHONE NUMBER IS PRESENT AND IS ONLY NUMERIC
			if (usersphone.val() == "") {
				
				$(".error").html('Please, type your phone number.');
				$(".error").delay(1200).fadeIn(1000).delay(4000).fadeOut(1000);
				$('input[type=submit]', $("#lcars-contact-beta")).removeAttr('disabled');
				return false;
			}
			
			
			//CHECKING USERS NAME IS PRESENT
			
			
			
			//CHECKING SUBJECT WAS SELECTED
			if (userssubject.val() == "") {
				
				$(".error").html('Please, let us know how we can help.');
				$(".error").delay(1200).fadeIn(1000).delay(4000).fadeOut(1000);
				$('input[type=submit]', $("#lcars-contact-beta")).removeAttr('disabled');
				return false;
			}
			//CHECKING SUBJECT WAS SELECTED
			
			//VERIFYING THE USER IS HUMAN
		
			if (usershenanigans.val() == "")   {
				
			
			}
			//VERIFYING THE USER IS HUMAN
			//CHECKING THE USER IS HUMAN
			
			//CHECKING THE USER IS HUMAN
			if (userscomment.val() == "") {
				
				$(".error").html('Please, type a message.');
				$(".error").delay(1200).fadeIn(1000).delay(4000).fadeOut(1000);
				$('input[type=submit]', $("#lcars-contact-beta")).removeAttr('disabled');
				return false;
			}
			//CHECKING THE USER IS HUMAN
			
			/* 
			 *
			 * POSTING DATA USING AJAX AND
			 * THEN RETREIVING DATA FROM PHP SCRIPT
			 *
			*/
			
			$.post(url,{ usersname: usersname.val(), usersemail: usersemail.val(), usersphone: usersphone.val(), userssubject: userssubject.val(),userscomment: userscomment.val(), usershenanigans: usershenanigans.val(), isvalid: isvalid } , function(data) {
				
				if(data == 'success'){
					
					
					$(".success").html(successmessage);
					$(".success").delay(1200).fadeIn(1000).delay(6000).fadeOut(5000);
					$("#name").val('');
					$("#email").val('');
					$("#phone").val('');
				
					$("#subject").val('');
					$("#comment").val('');
					$("#shenanigans").val('');
					$('input[type=submit]', $("#lcars-contact-beta")).removeAttr('disabled');
				
				} else {
					
					
					$(".error").html(failedmessage);
					$(".error").delay(1200).fadeIn(1000).delay(4000).fadeOut(1000);
					$('input[type=submit]', $("#lcars-contact-beta")).removeAttr('disabled');
					return false;
					
				}
				
			});
			
			/* 
			 *
			 * POSTING DATA USING AJAX AND
			 * THEN RETREIVING DATA FROM PHP SCRIPT
			 *
			*/
			
		}
		
	);
	
});