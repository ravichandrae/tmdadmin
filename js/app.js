function renderPage(pageName) {
	renderPageHeader(pageName);
	switch(pageName) {
		case "People":
			renderPeoplePage();
			break;
		case "Movies":
			renderMoviesPage();
			break;
		case "Songs":
			renderSongsPae();
			break;
	}
}

function renderPageHeader(pageName) {
	$("#page-wrapper").html("<div class=\"row\">" +
								"<div class=\"col-lg-12\">" +
									"<h1 class=\"page-header\">" +
										pageName +
									"</h1>" +
								"</div>" +
							 "</div>"
							);
}

function renderPeoplePage() {
	$("#page-wrapper").append("<div class=\"row\">"+
								"<div class=\"col-lg-12\">" +
									"<div class=\"panel panel-default\">" +
										"<div class=\"panel-heading\">" +
											"Create New Celebrity" +
										"</div>" +	
										"<div class=\"panel-body\">" +
				                            "<div class=\"row\">" +
				                                "<div class=\"col-lg-6\">" +
				                                    "<form role=\"form\">" +
				                                        "<div class=\"form-group\">" +
				                                        	"<label>Name</label>" +
                                            				"<input id=\"personName\" class=\"form-control\">" +
                                            			"</div>" +
                                            			"<div class=\"form-group\">" +
				                                        	"<label>Gender:</label>" +
				                                        	"<label class=\"radio-inline\">" +
				                                                "<input type=\"radio\" name=\"optionsGender\" id=\"optionsMale\" value=\"M\" checked>Male" +
				                                            "</label>" +
				                                            "<label class=\"radio-inline\">" +
				                                                "<input type=\"radio\" name=\"optionsGender\" id=\"optionsFemale\" value=\"F\">Female" +
				                                            "</label>" +
                                            			"</div>" +
                                            			 "<div class=\"form-group\">" +
				                                        	"<label>Alternate Names: </label>" +
                                            				"<textarea id = \"alternateNames\" class=\"form-control\" rows=\"3\"></textarea>" +
                                            			"</div>" +
                                            			"<div class=\"form-group\">" +
				                                            "<label>Occupation: </label>" +
				                                            "<label class=\"checkbox-inline\">"+
				                                                "<input id=\"actorCheckbox\" type=\"checkbox\">Actor"+
				                                            "</label>" +
				                                            "<label class=\"checkbox-inline\">" +
				                                                "<input id=\"directorCheckbox\" type=\"checkbox\">Director" +
				                                            "</label>" +
				                                            "<label class=\"checkbox-inline\">" +
				                                                "<input id=\"producerCheckbox\" type=\"checkbox\">Producer" +
				                                            "</label>" +
				                                             "<label class=\"checkbox-inline\">" +
				                                                "<input id=\"writerCheckbox\" type=\"checkbox\">Writer" +
				                                            "</label>" +
				                                            "<label class=\"checkbox-inline\">" +
				                                                "<input id=\"composerCheckbox\" type=\"checkbox\">Composer" +
				                                            "</label>" +
				                                             "<label class=\"checkbox-inline\">" +
				                                                "<input id=\"singerCheckbox\" type=\"checkbox\">Singer" +
				                                            "</label>" +
				                                        "</div>"+
                                            			"<div class=\"form-group\">" +
				                                        	"<label>Birth date</label>" +
                                            				"<input id=\"birthDate\" class=\"form-control\">" +
                                            			"</div>" +
                                            			"<div class=\"form-group\">" +
				                                        	"<label>Birth place</label>" +
                                            				"<input id=\"birthPlace\" class=\"form-control\">" +
                                            			"</div>" +
                                            			"<div class=\"form-group\">" +
				                                        	"<label>Death date</label>" +
                                            				"<input id=\"deathDate\" class=\"form-control\">" +
                                            			"</div>" +
                                            			"<div class=\"form-group\">" +
				                                        	"<label>Death place</label>" +
                                            				"<input id=\"deathPlace\" class=\"form-control\">" +
                                            			"</div>" +
                                            			"<button type=\"button\" onclick=\"submitPerson()\" class=\"btn btn-default\">Submit</button>" +
                                        				"<button type=\"button\" onclick=\"clearPersonForm()\" class=\"btn btn-default\">Reset</button>" +
                                            		"</form>" +
                                            	"</div>" +
                                            "</div>" +
                                        "</div>" +
									"</div>" +	
								"</div>" +
							  "</div>"
		);

}

function submitPerson() {
	var person = new Object();
	
	person.name = $("#personName").val();
	
	if ($("#optionsMale").prop("checked")) 
		person.gender = "M";
	else
		person.gender = "F";

	var alternateNamesText = $("#alternateNames").val();
	if( alternateNamesText)
		person.alternateNames = alternateNamesText.split(",");

	var attributes = [];

	if($("#actorCheckbox").prop("checked")) {
		var attrib = new Object();
		attrib.id = "A101";
		attrib.value = "నటుడు";
		attributes.push(attrib);
	}
	if($("#directorCheckbox").prop("checked")) {
		var attrib = new Object();
		attrib.id = "A100";
		attrib.value = "దర్శకుడు";
		attributes.push(attrib);
	}	
	if($("#producerCheckbox").prop("checked")) {
		var attrib = new Object();
		attrib.id = "A105";
		attrib.value = "నిర్మాత";
		attributes.push(attrib);
	}
	if($("#writerCheckbox").prop("checked")) {
		var attrib = new Object();
		attrib.id = "A104";
		attrib.value = "రచయిత";
		attributes.push(attrib);
	}
	if($("#composerCheckbox").prop("checked")) {
		var attrib = new Object();
		attrib.id = "A102";
		attrib.value = "సంగీత దర్శకుడు";
		attributes.push(attrib);
	}
	if($("#singerCheckbox").prop("checked")) {
		var attrib = new Object();
		attrib.id = "A103";
		attrib.value = "గాయకులు";
		attributes.push(attrib);
	}	
	person.occupations = attributes;
	person.birthDate = $("#birthDate").val();
	person.birthPlace = $("#birthPlace").val();
	person.deathDate = $("#deathDate").val();
	person.deathPlace = $("#deathPlace").val();

	$.ajax({
        type : "POST",
        url : "http://52.77.217.113:8080/person",
        contentType :"application/json; charSet=UTF-8",
        data : JSON.stringify(person)
    })
    .done(function(data){
        alert("Successfully submitted");
    })
    .fail(function(data){
        alert("there was some error during submission: "+data);
    });
}

function clearPersonForm() {
	$("#personName").val("");
	$("#alternateNames").val("");
	$("#birthDate").val("");
	$("#birthPlace").val("");
	$("#deathDate").val("");
	$("#deathPlace").val("");
}
