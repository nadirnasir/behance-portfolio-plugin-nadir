/* Behance Portfolio Plugin — By Nadir
 * Source: https://github.com/nadirnasir/behance-portfolio-plugin-nadir.git
 *
 * Created by Nadir Nasir (@nadirnasir)
 * Distributed through [Nadir.pk](http://nadir.pk/behance)
 * Released under the [MIT license](http://nadir.pk/behance/LICENSE)
 */

/*

( function ( $ )  {
	$.fn.nadirFunction = function( options ) {
		// Extending Plugin options so they can be passed from outside as well as through functions.
		var opts = $.extend( {}, $.fn.nadirFunction.defaults, options );
		//console.log(opts);

		var $daddy = this;
		// "this" is "daddy" in a variable so that daddy can be referenced from everywhere.
		//console.log($daddy);

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
*/

// Project Data Slideshow

var initialiseGallery = function (options) {
	var defaults = {
		prjDataContainer 	: "#prjID321 .prjData ul",
		prjNavigator		: ".prjNav"
	}

	var opts = $.extend( {}, defaults, options );
	//console.log(opts)

	var prjDataSetActive = function (prjDataContainer) {
		$(opts.prjDataContainer).children().first().addClass("active");
		prjDataCounter()
	} //prjDataSetActive();
	prjDataSetActive();

	function prjDataCounter() {
	    if(!$(opts.prjDataContainer).parent().find(".prjDataCount").length) {
			$(opts.prjDataContainer).before("<div class=\"prjDataCount\"></div>");
			$(".prjDataCount").html(($(opts.prjDataContainer).children(".active").index()+1) + " of " + $(opts.prjDataContainer).children().length);
	    } else {
			$(".prjDataCount").html(($(opts.prjDataContainer).children(".active").index()+1) + " of " + $(opts.prjDataContainer).children().length);
		}

	} // prjDataCounter()

	function prjDataNavigator() {
		$(opts.prjNavigator).click(function(){
		var current = $(opts.prjDataContainer).children(".active").removeClass("active");
			if($(this).hasClass("Next")) {

				var i = current.next().length ? current.index() : 0;
		        current.siblings(":eq(" + i + ")").addClass("active");
			}
			else if($(this).hasClass("Prev")) {
				var i = current.prev().length ? (current.index()-1) : ($(opts.prjDataContainer).children().length-2);
		        current.siblings(":eq(" + i + ")").addClass("active");
			}
			prjDataCounter();
		})
	} // prjDataNavigator()
	prjDataNavigator();
} //initialiseGallery()
