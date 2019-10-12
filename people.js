
function load() {
	// var json = JSON.parse(data);
	var json = data;
	var query = window.location.search.substring(1);

	var id = query.split("=")[1]
	person = json[id].value; // value is an obj that contains name, year, major, hometown, paragraph
	

	// putting the data in the html
	document.getElementById("name").innerHTML = person.name;
	document.getElementById("role").innerHTML = person.role;
	document.getElementById("year").innerHTML = person.year;
	document.getElementById("major").innerHTML = person.major;
	document.getElementById("hometown").innerHTML = person.hometown;
	document.getElementById("paragraph").innerHTML = person.paragraph;
	

	// let link = document.getElementById("link");
	// link.href = link.href + "?id=" + id;

// getting photo address for specific person
	img1_file = "Photos/" + person.name.split(" ")[0] + "1.jpg";
	img2_file = "Photos/" + person.name.split(" ")[0] + "2.jpg";
	

	img_elem = document.getElementById("img");
	img_elem.src = img1_file;
	
	img_elem.onmouseover = function() { this.src = img2_file };
	img_elem.onmouseout = function() { this.src = img1_file };


}

