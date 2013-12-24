/* Behancé Portfolio Plugin — By Nadir
 * Source: https://github.com/nadirnasir/behance-portfolio-plugin-nadir.git
 *
 * Created by Nadir Nasir (@nadirnasir)
 * Distributed through [Nadir.pk](http://nadir.pk/behance)
 * Released under the [MIT license](http://nadir.pk/behance/LICENSE)
 */


( function ( $ )  {
	$.fn.nadirFunction = function( options ) {
		// Extending Plugin options so they can be passed from outside as well as through function.
		var opts = $.extend( {}, $.fn.nadirFunction.defaults, options );
		//console.log(opts);

		var $daddy = this;
		// "this" is "daddy" in a variable so that daddy can be referenced from everywhere.
		//console.log($daddy);

		//console.log($.grep(opts);

		$.each(opts,function(index, value){
		    if($.type(value) === "object") {
			    $.each(value,function(index, value){
					    console.log(index + " : " + value);
					    $daddy.css(index, value)
					});
		    }
		    else if ($.type(value) === "string") {
						console.log(index + ' : ' + value);
				}
		});

	}; // End of nadirFunction

	// Default options
	$.fn.nadirFunction.defaults = {
		option1 : "red",
		option2 : "green",
		option3 : "blue",
	}
} ( jQuery ));