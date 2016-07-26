$(function(){
    console.log('ready');
    
    $.get( "http://parkenhance-demo.herokuapp.com/get_lot_list?name=manager1", function( data ) {
        parsed = JSON.parse(data);
        for(i = 0; i<parsed.length; i++){
            parsed[i]
            $('<li class="list-group-item">' + (parsed[i]) + '</li>').appendTo('#lotListGroup');
        }
    });
    
    $(document).on('click', '.list-group li', function(e) {
        e.preventDefault()
        
        $that = $(this);
        
        $('.list-group').find('li').removeClass('active');
        $that.addClass('active');
    });
    
    $('#addConfirm').click(function(){
    
        $.get( "http://parkenhance-demo.herokuapp.com/add_lot?name=manager1&lotname=" +$('#inputName').val(), function(data, status) {
            
        });
    
		$('<li class="list-group-item">' + $('#inputName').val() + '</li>').appendTo('#lotListGroup');
		$('#inputName').val(null);
	});
    
    $('#addCancel').click(function(){
		$('#inputName').val(null);
	});
    
    $('#delConfirm').click(function(){
		$('.active').remove();
	});
    
    $('#delButton').click(function(){
        var newtext = $('.active').text();
		$('#delPrompt').text('Delete ' +newtext +'?');
	});
    
});