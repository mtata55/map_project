
$(document).ready(function()
	{
		//Initialise markers on page load
		create_markers(location_list);

		//Run collapse function on pageload and resize. Checks for screensize
		//and adjust visibility of locations list
		$(window).resize(collapse);

	})


function collapse(){
	if (window.matchMedia('(max-width: 768px)').matches)
	{
		$('#collapseExample').removeClass('show');
	}
	else{
		$('#collapseExample').addClass('show');
	}
}



