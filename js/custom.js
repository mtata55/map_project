//Run collapse function on pageload and resize. Checks for screensize
//and adjust visibility of locations list
$(document).ready(function()
	{
		collapse();
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