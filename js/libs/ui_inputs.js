function customRadio() {
    $('.pradio').each(function(){
        var el = $(this);
        var active = '';
        if ( el.is(':checked') ) active = ' active';
        var id = el.attr('id');
        var name = el.attr('name');
        var html = '<label for="'+id+'" data-name="'+name+'" class="pradio'+active+'"></label>';
        el.after(html).hide();
    });

    // Handlers
    $('label').bind('click',function(){
        var el = $(this);
        var id = el.attr('for');
        var input = $('#'+id);
        if ( input.hasClass('pradio') ) {
            var name = input.attr('name');
            $('.pradio[data-name='+name+'], .pcheckbox[data-name='+name+']').removeClass('active');
            $('.pradio[for='+id+'], .pcheckbox[for='+id+']').addClass('active');
        }
        return true;
    });
    
}

function customCheckbox() {
    $('.pcheckbox').each(function(){
        var el = $(this)
        var active = ''
        if ( el.is(':checked') ) active = ' active'
        var id = el.attr('id')
        var name = el.attr('name')
        var html = '<label for="'+id+'" data-name="'+name+'" class="pcheckbox'+active+'"></label>'
        el.after(html).hide()
    })

    // Handlers
    $('label').bind('click',function(){
        var el = $(this)
        var id = el.attr('for')
        var input = $('#'+id)
        if ( input.hasClass('pcheckbox') ) {
            var name = input.attr('name')
            $('.pcheckbox[for='+id+']').toggleClass('active')
        }
        return true
    })
}

function customQuantity(){

	$('.quantity_select').each(function(){
		var el   = $(this);
		var name = el.attr('name');
		var id   = el.attr('id');
		var val  = el.attr('value');
		var classes = el.attr('class');
		var measure = el.attr('data-measure');

		var html = '<div class="custom_quantity '+classes+'" data-name="'+name+'" data-id="'+id+'"><div class="cq_output" data-measure="'+measure+'">'+val+'</div><div class="cq_up"></div><div class="cq_down"></div></div>'
		el.after(html).hide();
	});

	// Handlers
	$('.cq_up').on('click',function(){
		var el = $(this);
		var select = el.closest('.custom_quantity');
		var output = select.find('.cq_output');
		var id = select.attr('data-id');
		var realinput = $('#'+id);
		var step = realinput.attr('step')-0;
		var val = realinput.attr('value');
		
		if (val > realinput.attr('min')-0) {
			val = val - step; 
			output.text(val);
			realinput.attr('value',val)
		};	
	return true;
	});
	$('.cq_down').on('click',function(){
		var el = $(this);
		var select = el.closest('.custom_quantity');
		var output = select.find('.cq_output');
		var id = select.attr('data-id');
		var realinput = $('#'+id);
		var step = realinput.attr('step')-0;
		var val = realinput.attr('value');
		
		if (val < realinput.attr('max')-0) {
			val = val -0 + step; 
			output.text(val);
			realinput.attr('value',val)
		};	
	return true;
	});
};