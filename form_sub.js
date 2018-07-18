$(window).ready(function(){
    $('.x').click(function(){
        $('.g').css('display','none');
        $('.h').css('display','block');
        $('.submitButton').html('SUBMIT &#10095;');
        $("#form")[0].reset();
    });
    
    $('.submitButton').click(function(e){
        e.preventDefault();
        $("#errorMsg").removeClass("show");
        $('#spinner').addClass('show');
        if($('#email').val()=="" || $('#name').val()=="" || $('#mobile').val()=="" || $('#regno').val()==""){
            $('#spinner').removeClass('show');
            $('.errorMsg').text('Please fill all the details.');
            $("#errorMsg").addClass("show");
        }
        else{
            var xhttp=new XMLHttpRequest();
            xhttp.onreadystatechange=function(){
                if(this.responseText=='BAD_EMAIL'){
                    $('#spinner').removeClass('show');
                    $('.errorMsg').text('Check your email');
                    $("#errorMsg").addClass("show");
                }
                else if(this.responseText=='BAD_NUMBER'){
                    $('#spinner').removeClass('show');
                    $('.errorMsg').text('Incorrect mobile number');
                    $("#errorMsg").addClass("show");
                }
                else if(this.responseText=='BAD_REG_NO'){
                    $('#spinner').removeClass('show');
                    $('.errorMsg').text('Incorrect registration number');
                    $("#errorMsg").addClass("show");
                }
                else if(this.responseText=='ENTER_NAME'){
                    $('#spinner').removeClass('show');
                    $('.errorMsg').text('Please enter your name');
                    $("#errorMsg").addClass("show");
                }
                else if(this.responseText=='ALREADY_REGISTERED'){
                    $('#spinner').removeClass('show');
                    $('.errorMsg').text('You have previously filled up this form.');
                    $("#errorMsg").addClass("show");
                }
                else if(this.responseText=='TRY_AGAIN'){
                    $('#spinner').removeClass('show');
                    $('.errorMsg').text('Please try again');
                    $("#errorMsg").addClass("show");
                }
                else if(this.responseText=='OK'){
                    $('#spinner').removeClass('show');
                    $('.h').css('display','none');
                    $('.g').css('display','block');
                    $('.submitButton').html('SUBMITTED 	&#10003;')
                }
            }
            xhttp.open("POST", "https://secure-sea-96204.herokuapp.com/add", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify({
                email: $('#email').val(),
                name:$('#name').val(),
                regno:$('#regno').val().toUpperCase(),
                mobile:$('#mobile').val()
            }));
        }
        
    })
});
