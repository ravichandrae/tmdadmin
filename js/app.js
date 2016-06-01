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
				                                        "<div class=\"form-group\">" +
				                                        	"<label>Image URL:</label>" +
				                                        	"<input id=\"imageUrl\" class=\"form-control\">" +
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

	if( $("#personName").val() )
		person.name = $("#personName").val().trim();
	else
		alert("Name cannnot be empty");
	
	if ($("#optionsMale").prop("checked")) 
		person.gender = "M";
	else
		person.gender = "F";

	var alternateNamesText = $("#alternateNames").val();
	if( alternateNamesText) {
		var alternateNamesArray = alternateNamesText.split(",");
		for(var ani = 0; ani < alternateNamesArray.length; ani++ ) {
			alternateNamesArray[ani] = alternateNamesArray[ani].trim();
		}
		person.alternateNames = alternateNamesArray;
	}
		

	var imageUrl = $("#imageUrl").val();
	if( imageUrl)
		person.imageUrl = imageUrl.trim();

	var attributes = [];

	if($("#actorCheckbox").prop("checked")) {
		var attrib = new Object();
		attrib.id = "A101";
		if( person.gender == "M" )
			attrib.value = "నటుడు";
		else
			attrib.value = "నటి";
		attributes.push(attrib);
	}
	if($("#directorCheckbox").prop("checked")) {
		var attrib = new Object();
		attrib.id = "A100";
		if( person.gender == "M" )
			attrib.value = "దర్శకుడు";
		else
			attrib.value = "దర్శకురాలు";
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
		if( person.gender == "M" )
			attrib.value = "రచయిత";
		else
			attrib.value = "రచయిత్రి";
		attributes.push(attrib);
	}
	if($("#composerCheckbox").prop("checked")) {
		var attrib = new Object();
		attrib.id = "A102";
		if( person.gender == "M" )
			attrib.value = "సంగీత దర్శకుడు";
		else
			attrib.value = "సంగీత దర్శకురాలు";
		attributes.push(attrib);
	}
	if($("#singerCheckbox").prop("checked")) {
		var attrib = new Object();
		attrib.id = "A103";
		if( person.gender == "M" )
			attrib.value = "గాయకుడు";
		else
			attrib.value = "గాయని";
		attributes.push(attrib);
	}	
	person.occupations = attributes;
	if( $("#birthDate").val() )
		person.birthDate = $("#birthDate").val().trim();
	if( $("#birthPlace").val() )
	person.birthPlace = $("#birthPlace").val().trim();
	if( $("#deathDate").val() )
		person.deathDate = $("#deathDate").val().trim();
	if( $("#deathPlace").val() )
		person.deathPlace = $("#deathPlace").val().trim();

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
	$("#imageUrl").val("");

	$('#actorCheckbox').attr('checked', false);
	$('#directorCheckbox').attr('checked', false);
	$('#producerCheckbox').attr('checked', false);
	$('#writerCheckbox').attr('checked', false);
	$('#composerCheckbox').attr('checked', false);
	$('#singerCheckbox').attr('checked', false);
}
