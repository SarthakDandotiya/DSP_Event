$(window).ready(function(){
    $('.x').click(function(){
        $('.g').css('display','none');
        $('.h').css('display','block');
        $('.submitButton').html('SUBMIT &#10095;');
        $("#form")[0].reset();
    });
          $('.submitButton').click(function(e){
            e.preventDefault();
            $('.errorMsg').css('display','none');
            var xhttp=new XMLHttpRequest();
            xhttp.onreadystatechange=function(){
                console.log(this.responseText)
                if(this.responseText=='BAD_EMAIL'){
                    $('.errorMsg').text('Check your email');
                    $('.errorMsg').css('display','block');
                }
                else if(this.responseText=='BAD_NUMBER'){
                    $('.errorMsg').text('Incorrect mobile number');
                    $('.errorMsg').css('display','block');
                }
                else if(this.responseText=='BAD_REG_NO'){
                    $('.errorMsg').text('Incorrect registration number');
                    $('.errorMsg').css('display','block');
                }
                else if(this.responseText=='ENTER_NAME'){
                    $('.errormsg').text('Please enter your name');
                    $('.errormsg').css('display','block');
                }
                else if(this.responseText=='ALREADY_REGISTERED'){
                    $('.errorMsg').text('You have previously filled up this form.');
                    $('.errorMsg').css('display','block');
                }
                else if(this.responseText=='TRY_AGAIN'){
                    $('.errorMsg').text('Please try again');
                    $('.errorMsg').css('display','block');
                }
                else if(this.responseText=='OK'){
                    $('.h').css('display','none');
                    $('.g').css('display','block');
                    $('.submitButton').html('SUBMITTED 	&#10003;')
                }
            }
            xhttp.open("POST", "https://secure-sea-96204.herokuapp.com/add", false);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify({
                email: $('#email').val(),
                name:$('#name').val(),
                regno:$('#regno').val().toUpperCase(),
                mobile:$('#mobile').val()
            }));
        })
});
