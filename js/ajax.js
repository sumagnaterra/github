$(function(){
	
	$('.index__content-git--create').on('click', function(){
		$.ajax({
			url: "create_issues.php", 

			success: function(result){
	        	$(".index__content, .index__formResult").hide();
	        	$(".index__form").html(result).show();
	    	}
	   });
	});

	$('.index__content-git--list').on('click', function(){
		$.ajax({
			url: "list_issues.php", 

			success: function(result){
	        	$(".index__content, .index__formResult").hide();
	        	$(".index__form").html(result).show();
	    	}
	   });

	});

	$('.index__form--content-send').on('click', function(){
		var title = $('input[name="title"]').val();
		var context = $('input[name="context"]').val();

		$.ajax({
			type: "POST",
			url: "created_issues.php", 
			
			data: { 
				title : title, 
				context : context, 
			},

			success: function(result){
				$(".index__form").hide();
	        	$(".index__formResult").html(result).show();
	    	}
	   });

	});

	
})