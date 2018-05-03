// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#dateTime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
let start = 0;
let end = 4;
let page = 1;
let pages_length = Math.round((dataSet.length)/4);
let total_results = dataSet.length;
console.log(pages_length);

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var filteredData = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable(begin,stop) {
	$tbody.innerHTML = "";
	for (var i = start, ii = end; i<ii; i++) {

		// Get get the current alien sighting object and its fields
		
		var sighting = filteredData[i];
		console.log(filteredData[i]);
		if (sighting != null) {
			var fields = Object.keys(sighting);
		}
		else {
			
		};

		// Create a new row in the tbody, set the index to be i + startingIndex
		var $row = $tbody.insertRow();
		for (var j = 0, jj = fields.length; j<jj; j++) {

			// For every field in the address object, create a new cell 
			// and set its inner text to be the current value at the current address's field
			var field = fields[j];
			var $cell = $row.insertCell(j);
			$cell.innerText = sighting[field];
		};
	};
}

function filter(dataSet, criteria) {
	return dataSet.filter(function(sighting) {
		return Object.keys(criteria).every(function(c) {
			return sighting[c] == criteria[c];
		});
	});
}

function handleSearchButtonClick() {
	// Format the user's search by removing leading and trailing whitespace, lowercase the string
	var filterDate =$dateInput.value.trim();
	var filterCity =$cityInput.value.trim().toLowerCase();
	var filterState = $stateInput.value.trim().toLowerCase();
	var filterCountry =$countryInput.value.trim().toLowerCase();
	var filterShape =$shapeInput.value.trim().toLowerCase();

	if (filterDate && filterCity && filterState && filterCountry && filterShape) {
		filteredData = filter(dataSet, {'datetime': filterDate, 'city': filterCity, 'state': filterState, 'country': filterCountry, 'shape': filterShape});
	}
	else if (filterDate && filterCity && filterState && filterCountry) {
		filteredData = filter(dataSet, {'datetime': filterDate, 'city': filterCity, 'state': filterState, 'country': filterCountry});
	}
	else if (filterDate && filterCity && filterCountry && filterShape) {
		filteredData = filter(dataSet, {'datetime': filterDate, 'city': filterCity, 'country': filterCountry, 'shape': filterShape});
	}
	else if (filterDate && filterState && filterCountry && filterShape) {
		filteredData = filter(dataSet, {'datetime': filterDate, 'state': filterState, 'country': filterCountry, 'shape': filterShape});
	}
	else if (filterCity && filterState && filterCountry && filterShape) {
		filteredData = filter(dataSet, {'city': filterCity, 'state': filterState, 'country': filterCountry, 'shape': filterShape});
	}
	else if (filterDate && filterCity && filterState) {
		filteredData = filter(dataSet, {'datetime': filterDate, 'city': filterCity, 'state': filterState});
	}
	else if (filterDate && filterCity && filterCountry) {
		filteredData = filter(dataSet, {'datetime': filterDate, 'city': filterCity, 'country': filterCountry});
	}
	else if (filterDate && filterState && filterCountry) {
		filteredData = filter(dataSet, {'datetime': filterDate, 'state': filterState, 'country': filterCountry});
	}
	else if (filterDate && filterCountry && filterShape) {
		filteredData = filter(dataSet, {'datetime': filterDate, 'country': filterCountry, 'shape': filterShape});
	}
	else if (filterCity && filterState && filterCountry) {
		filteredData = filter(dataSet, {'city': filterCity, 'state': filterState, 'country': filterCountry});
	}
	else if (filterCity && filterState && filterShape) {
		filteredData = filter(dataSet, {'city': filterCity, 'state': filterState, 'shape': filterShape});
	}
	else if (filterCity && filterCountry && filterShape) {
		filteredData = filter(dataSet, {'city': filterCity, 'country': filterCountry, 'shape': filterShape});
	}
	else if (filterState && filterCountry && filterShape) {
		filteredData = filter(dataSet, {'state': filterState, 'country': filterCountry, 'shape': filterShape});
	}
	else if (filterDate && filterCity) {
		filteredData = filter(dataSet, {'datetime': filterDate, 'city': filterCity});
	}
	else if (filterDate && filterState) {
		filteredData = filter(dataSet, {'datetime': filterDate, 'state': filterState});
	}
	else if (filterDate && filterCountry) {
		filteredData = filter(dataSet, {'datetime': filterDate, 'country': filterCountry});
	}
	else if (filterDate && filterShape) {
		filteredData = filter(dataSet, {'datetime': filterDate, 'shape': filterShape});
	}
	else if (filterCity && filterState) {
		filteredData = filter(dataSet, {'city': filterCity, 'state': filterState});
	}
	else if (filterCity && filterCountry) {
		filteredData = filter(dataSet, {'city': filterCity, 'country': filterCountry});
	}
	else if (filterCity && filterShape) {
		filteredData = filter(dataSet, {'city': filterCity, 'shape': filterShape});
	}
	else if (filterState && filterCountry) {
		filteredData = filter(dataSet, {'state': filterState, 'country': filterCountry});
	}
	else if (filterState && filterShape) {
		filteredData = filter(dataSet, {'state': filterState, 'shape': filterShape});
	}
	else if (filterCountry && filterShape) {
		filteredData = filter(dataSet, {'country': filterCountry, 'shape': filterShape});
	}
	else if (filterDate) {
		filteredData = filter(dataSet, {'datetime': filterDate});
	}
	else if (filterCity) {
		filteredData = filter(dataSet, {'city': filterCity});
	}
	else if (filterState) {
		filteredData = filter(dataSet, {'state': filterState});
	}
	else if (filterCountry) {
		filteredData = filter(dataSet, {'country': filterCountry});
	}
	else {
		filteredData = filter(dataSet, {'shape': filterShape});
	};
	
	renderTable(start, end);
	total_results = filteredData.length;
	$displayNum1.innerHTML = 1;
	$displayNum2.innerHTML = end;
	$displayNum3.innerHTML = total_results;
}

renderTable(start, end);

let $displayNum1 = document.querySelector("#displayNum1");
let $displayNum2 = document.querySelector("#displayNum2");
let $displayNum3 = document.querySelector("#displayNum3");
$displayNum1.innerHTML = 1;
$displayNum2.innerHTML = end;
$displayNum3.innerHTML = total_results;


let $nextBtn = document.querySelector(".next");
let $prevBtn = document.querySelector(".previous");

$nextBtn.addEventListener("click", function handleNext(event){
	event.preventDefault();
	if (page < pages_length){
		page += 1;
		start +=4;
		end +=4;
		renderTable(start, end);
		$displayNum1.innerHTML = start + 1;
		$displayNum2.innerHTML = end;
	};
});

$prevBtn.addEventListener("click", function handlePrev(event){
	event.preventDefault();
	if (page > 1){
		page -= 1;
		start -=4;
		end -=4;
		renderTable(start, end);
		$displayNum1.innerHTML = start + 1;
		$displayNum2.innerHTML = end;
	};
});

