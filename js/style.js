$(function(){

    $('#zip_code').on('keyup',function(){
                
        var input = $('#zip_code').val();
        //Working on Mozilla for now
        $.getJSON('./dummy_data/dummy.json', function(data) {
            $.each(data, function(index, element) {
                
                var firstname   = element.fname,
                    lastname    = element.lname,
                    city        = element.city;
                console.log(element);

                if(input == element.zip || input == city) {
                    $('#zip_code').val(firstname+" "+lastname+", "+city);
                }else{
                    $('.error').html('Try again!');
                }

            });
        });

    });

    //Working on Mozilla for now coz I am using file:// than a local webserver and http://
    $('.clickhere').click(function(e){

        $.getJSON('./dummy_data/dummy.json', function(data) {
            $.each(data, function(index, element) {
                
                var firstname   = element.fname,
                    lastname    = element.lname,
                    city        = element.city;
                $('.cats').show('slow').find('> ul').append($('<li>', {
                    text: firstname+" "+lastname+", "+city
                }));

            });
        });

        e.preventDefault();
    });

    $('.close').click(function(e){
        //$('main').css({'opacity':'1'});
        $('.cats').hide('slow');
    });

});