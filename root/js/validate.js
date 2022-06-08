
$(document).ready(function(){
    //Copied the whole thing as filler
        jQuery.validator.addMethod("namen", function(value, element)
        {	return this.optional(element) || /^[a-zA-ZüÜäÄöÖéèàâç ]*$/.test(value);
        },	"Invalid characters")
        jQuery.validator.classRuleSettings.namen = {namen: true};
    
        jQuery.validator.addMethod("ziplz", function(value, element)
        {	return this.optional(element) || /^([0-9\s\(\)\+\-\/]{4,5})*$/.test(value);
        }, 	"Please enter a valid zip or postal code")
        jQuery.validator.classRuleSettings.postlz = {ziplz: true};
        
        jQuery.validator.addMethod("emails", function(value, element)
        {	return this.optional(element) || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        }, 	"Please enter a valid E-mail adress")
        jQuery.validator.classRuleSettings.emails = {emails: true};
        
        jQuery.validator.addMethod("street", function(value, element)
        {	return this.optional(element) || /^[a-zA-Z0-9 .,]+$/.test(value);
        }, 	"Please enter a valid street and number")
        jQuery.validator.classRuleSettings.street = {street: true};
    
    //validation
        $("#userform").validate({
    //Rules
        rules: {
        firstname: {
            required: true,
            namen: true,
            minlength:3
        },
        lastname: {
            required: true,
            namen: true,
            minlength:3
            },
        street: {
            street: true
        },
        zip: {
            required: true,
            ziplz: true
            },
        place: {
            required: true
        },
        email: {
            required: true,
            emails: true
            },
        username: {
            required: true,
            minlength:5,
                remote: { type: "post",
                url: "../php/user.php"
                }
            },
        password: {
            required: true,
            minlength: 8
            },
        confirm: { 
            required: true,
            minlength: 8,
            equalTo: "#password"
            }
        },
    
        
    success: function(element) {
            element
            .text('OK!').addClass('valid')
            .closest('.control-group').removeClass('error').addClass('success');
        },
    //Return
    
    //Own Return
        messages: {
        
        firstname: {
            required: "Please enter your first name",
            minlength: "Please enter at least 3 characters."
        },
        lastname: {
            required: "Please enter your last name",
            minlength: "Please enter at least 3 characters."
        },
        
        zip: {
            required: "Please enter your zip or postal code",
            ziplz: "Please enter your zip or postal code"
        },
        place: {
            required: "Please enter your location"
        },
        email: {
            required: "Please enter your E-mail adress",
            emails: "Please enter a valid E-mail adress"
            },
        username: {
            required: "Please enter a Username",
            minlength: "Please enter at least 5 characters.",
            remote: "Username is already taken."
            },
        password: {
            required: "Please enter a password",
            minlength: "The lenght of your password is too short, enter at least 8 characters."
            },
        confirm: {
            required: "Please enter a password.",
            minlength: "The lenght of your password is too short, enter at least 8 characters.",
            equalTo: "Passwords are not the same."
            },
        },
        });
    });