/* Behancé Portfolio Plugin — By Nadir
 * Source: https://github.com/nadirnasir/behance-portfolio-plugin-nadir.git
 *
 * Created by Nadir Nasir (@nadirnasir)
 * Distributed through [Nadir.pk](http://nadir.pk/behance)
 * Released under the [MIT license](http://nadir.pk/behance/LICENSE)
 */

// Defining Variables

var proto				= "http://";																						// Use either HTTP or HTTPS
var apiLink			= "www.behance.net/v2/"; 																// Learn more - https://www.behance.net/dev/api/endpoints/
var user 				= "nadirnasir"; 																				// Username of the user for which the data is needed. - Learn more HERE
var endPoint		= "users/" + user;																			// Learn more - https://www.behance.net/dev/api/endpoints/
var reqType			=  "/projects"; 																				// Learn more - https://www.behance.net/dev/api/endpoints/
var apiKey 			= "?api_key=" + "BprDSjEB3JUC7AitKzTmQ0wUUw36P9C0";			// Your API Key - Learn how to get your API Key HERE


$(document).ready(function() {
	var jqxhr;
	//jqxhr = $.getJSON("http://www.behance.net/v2/users/nadirnasir/projects?api_key=BprDSjEB3JUC7AitKzTmQ0wUUw36P9C0&callback=?", function(data) {
	jqxhr = $.getJSON("http://www.behance.net/v2/", function(data) {
	//jqxhr = $.getJSON(proto + apiLink + endPoint + reqType + apiKey + "&callback=?", function(data) {
		console.log(jqxhr);
		var project_str = "";
		//console.log(data);
		for (var i = 0; i < data.projects.length; i++) {
			obj = {};
			obj = data.projects[i];
			//console.log(data.projects[i].id);
			project_str += '<a class="link" href="#' + obj.id + '"><img src="' + obj.covers['202'] + '" /></a>';
		}
		$('#behance_container div').append(project_str);
	});

});


/*
	$(document).find('a[data-projectid]').click(function(){
	alert();
	var hash = location.hash.replace("#","");
	var jqxhri;
	jqxhri = $.getJSON("http://www.behance.net/v2/projects/' + hash + '?api_key=BprDSjEB3JUC7AitKzTmQ0wUUw36P9C0&callback=?", function(data) {
    $('#behance_header h3').html(data.project.name);
    var project_data = '<p>' + data.project.description + '</p>';
    $('#behance_project').html(project_data);   });
        });
*/

$('a').click(function(e) {
	e.preventDefault();
	alert("clicked A")
})