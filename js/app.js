var cachedResults = null;
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
	$("#pageHeader").html(pageName);
}

function renderPeoplePage() {
	$("#peopleDetails").html(
									"<div class=\"panel panel-default\">" +
										"<div class=\"panel-heading\">" +
											"Update details" +
										"</div>" +	
										"<div class=\"panel-body\">" +
				                            "<div class=\"row\">" +
				                                "<div class=\"col-lg-6\">" +
				                                    "<form role=\"form\">" +
				                                    	"<input type=\"hidden\" id=\"personId\" value=\"0\">" +
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

	var methodType = "POST";
	if( $("#personId").val() != "0" ) {
		person.id = $("#personId").val()
		methodType = "PUT";
	}


	$.ajax({
        type : methodType,
        url : "http://52.77.217.113:8080/person",
        contentType :"application/json; charSet=UTF-8",
        data : JSON.stringify(person)
    })
    .done(function(data){
        alert("Successfully submitted");
        clearPersonForm();
    })
    .fail(function(data){
        alert("there was some error during submission: "+data);
    });
}

function clearPersonForm() {
	$("#personId").val("0");
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

function performSearch() {
	var searchQuery = $("#searchQuery").val();
	$.ajax({
        type : "GET",
        url : "http://52.77.217.113:8080/person/search?name=" + searchQuery,
        contentType :"application/json; charSet=UTF-8",
    })
    .done(function(data){
    	cachedResults = data;
    	$("#personId").val("0");
        renderSearchResults(data);
    })
    .fail(function(data){
        alert(data);
    });
}

function renderSearchResults(searchResults) {
	var resultsHtml = "<table class=\"table table-striped table-bordered table-hover\">"+
                            "<thead>" +
                                "<tr>" +
                                    "<th>#</th>" +
                                    "<th>Name</th>" +
                                    "<th>Profession</th>" +
                                "</tr>" +
                            "</thead>" +
                            "<tbody>";
    if( searchResults ) {
	    for(var i = 0; i < searchResults.length; i++) {
	    	resultsHtml += "<tr onclick=\"handleRowClick(" + searchResults[i].id + ")\">";
	    	resultsHtml += "<td>" + searchResults[i].id + "</td>";
	    	resultsHtml += "<td>" + searchResults[i].name + "</td>";
	    	resultsHtml += "<td>";
	    	if( searchResults[i].occupations ) {
		    	for(var ai = 0; ai < searchResults[i].occupations.length; ai++) {
					resultsHtml += searchResults[i].occupations[ai].value + " ";
				}
			} 
			resultsHtml += "</td>";
	    	resultsHtml += "</tr>";
	    }
	}
    resultsHtml += "</tbody>"
    resultsHtml += "</table>"
    $("#searchResults").html(resultsHtml);
}

function handleRowClick(id) {
	renderPeoplePage();
	if( cachedResults ) {
		var clickedPerson = null;
		for(var i = 0; cachedResults.length; i++) {
			if( cachedResults[i].id == id ) {
				clickedPerson = cachedResults[i];
				break;
			}
		}
		if( clickedPerson ) {
			$("#personId").val(clickedPerson.id);
			$("#personName").val(clickedPerson.name);
			if( clickedPerson.gender == "M" ) {
				$("#optionsMale").prop('checked', true);
				$("#optionsFemale").prop('checked', false);
			}
			else
			{
				$("#optionsMale").prop('checked', false);
				$("#optionsFemale").prop('checked', true);		
			}
			if(  clickedPerson.occupations )
			for(var ai = 0; ai < clickedPerson.occupations.length; ai++ ) {
				var attrib = clickedPerson.occupations[ai];
				if( attrib.id == "A100" ) {
					$("#directorCheckbox").prop("checked", true);
				}
				else if( attrib.id == "A101" ) {
					$("#actorCheckbox").prop("checked", true);
				}
				else if( attrib.id == "A102" ) {
					$("#composerCheckbox").prop("checked", true);
				}
				else if( attrib.id == "A103" ) {
					$("#singerCheckbox").prop("checked", true);
				}
				else if( attrib.id == "A104" ) {
					$("#writerCheckbox").prop("checked", true);
				}
				else if( attrib.id == "A105" ) {
					$("#producerCheckbox").prop("checked", true);
				}
			}
			if( clickedPerson.alternateNames )
				$("#alternateNames").val(clickedPerson.alternateNames.join());
			
			$("#birthDate").val(clickedPerson.birthDate);
			$("#birthPlace").val(clickedPerson.birthPlace);
			$("#deathDate").val(clickedPerson.deathDate);
			$("#deathPlace").val(clickedPerson.deathPlace);
			$("#imageUrl").val(clickedPerson.imageUrl);
		}	
	}
	
}
