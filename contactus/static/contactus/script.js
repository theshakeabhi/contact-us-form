$(document).ready( function(){
    $('#contact-us').on('submit', function(event){
        event.preventDefault();

        //flag is a varible which would be used to check if there is any error. If there is
        //error it would become flase.

        var flag = true;

        var vname = $("#id_name").val();
        var vemail = $("#id_email").val();
        var vphoneno = $("#id_phoneno").val();
        var vdescription = $("#id_description").val();

        $(".error").remove();


        //validation for name.
        if (vname.length < 1) {
            $('#id_name').after('<span class="error">This field is required</span>');
            flag = false;
          }
        else {
            var nameRegEx = /[A-Za-z ]+$/;
            var validName = nameRegEx.test(vname);
            console.log(validName);
            if (!validName){
                $('#id_name').after('<span class="error">Enter only Characters and Spaces.</span>');
                flag = false;
            }
        }

        //validation for email.
        if (vemail.length < 1) {
            $('#id_name').after('<span class="error">This field is required</span>');
            flag = false;
          }
        else {
            var emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
            var validEmail = emailRegEx.test(vemail);
            console.log(validEmail);
            if (!validEmail){
                $('#id_email').after('<span class="error">Enter valid email address');
                flag = false;
            }    
        }

        //validation for phone number.        
        if (vphoneno.length < 1) {
            $('#id_phoneno').after('<span class="error">This field is required</span>');
            flag = false;
          }
        else {
            var phoneRegEx = /^[0-9]{10}$/;
            var validPhone = phoneRegEx.test(vphoneno);
            console.log(validPhone);
            if (!validPhone){
                $('#id_phoneno').after('<span class="error">Enter a valid 10 digit number');
                flag = false;
            }           
        }

        //validation for description.
        if (vdescription.length < 1) {
            $('#id_phoneno').after('<span class="error">This field is required</span>');
            flag = false;
        }
        if (vdescription.length <= 20) {
            $('#id_description').after('<span class="error">Please write minimum 20 char</span>');
            flag = false;
        }
        

        
        

        if(flag){

            // ajax call
            $.ajax({
                type: "POST",
                url: "save/",
                data: {
                    name: $("#id_name").val(),
                    email: $("#id_email").val(),
                    phoneno: $("#id_phoneno").val(),
                    description: $("#id_description").val(),
                    csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
                    action: "post",
                },
                success: function (json) {
                    document.getElementById("contact-us").reset();
                    alert("Successufully saved your data");
                },
                error: function (xhr, errmsg, err) {
                    console.log(xhr.status);
                    console.log(xhr.resposeText);
                    alert("invalid");
                },
            });
        }
    })
});