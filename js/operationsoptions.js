jQuery(document).ready(function($){
    var ops = $.parseJSON(gdn.definition('KBOperationsOptions'));
	$('#Form_Operation').change(function(){
		$('span.OpOps').remove();
		$('#Form_Option').remove();
		if(typeof ops[$(this).val()]!='undefined'){
			var optionsOps = $.map(ops[$(this).val()],function(v,i){
				return '<option value="'+v+'" >'+v+'</option>';
				
			}).join('');
			var selectOps = $('<select id="Form_Option" name="Form/Option"></select>').append(optionsOps);
			$('#Form_Condition').after(selectOps);
		}
			
	});
	$('#Form_Operation').trigger('change');
});
