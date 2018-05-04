// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#dateTime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

// Set variable for displaying number of results
let start = 0;
let stop = 50;
let page = 1;
let pages_length = Math.round((dataSet.length)/50);
let total_results = dataSet.length;
let $displayNum1 = document.querySelector("#displayNum1");
let $displayNum2 = document.querySelector("#displayNum2");
let $displayNum3 = document.querySelector("#displayNum3");

// Set variables for page navigation
let $nextBtn = document.querySelector(".next");
let $prevBtn = document.querySelector(".previous");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var filteredData = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable(begin,end) {
	$tbody.innerHTML = "";

	// Create if statement b/c sometimes filtered results are less than the preset number of displayed results and it loops too many times
	if (filteredData.length < end) {
		for (var i = begin, ii = filteredData.length; i<ii; i++) {
			var sighting = filteredData[i];
			var fields = Object.keys(sighting);

			// Create a new row in the tbody, set the index to be i + startingIndex
			var $row = $tbody.insertRow();
			for (var j = 0, jj = fields.length; j<jj; j++) {

			// For every field in the address object, create a new cell 
			// and set its inner text to be the current value at the current address's field
			var field = fields[j];
			var $cell = $row.insertCell(j);
			$cell.innerText = sighting[field];
			}
		}
	}
	else {
		for (var i = begin, ii = end; i<ii; i++) {

		// Get get the current alien sighting object and its fields
		var sighting = filteredData[i];
		console.log(filteredData[i]);
		//if (sighting != null) {
		var fields = Object.keys(sighting);

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
	};
}

// Create function that filters the data
function filter(dataSet, criteria) {
	return dataSet.filter(function(sighting) {
		return Object.keys(criteria).every(function(c) {
			return sighting[c] == criteria[c];
		});
	});
}

// Create a function that handles the search button
function handleSearchButtonClick() {

	// Format the user's search by removing leading and trailing whitespace, lowercase the string
	var filterDate =$dateInput.value.trim();
	var filterCity =$cityInput.value.trim().toLowerCase();
	var filterState = $stateInput.value.trim().toLowerCase();
	var filterCountry =$countryInput.value.trim().toLowerCase();
	var filterShape =$shapeInput.value.trim().toLowerCase();

	// Create an if/elseif statement for all possible search combinations for filtering data
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
	
	// Render filtered data table
	renderTable(start, stop);

	// Set total results to new length of filtered data
	total_results = filteredData.length;

	//  Display how many results were found
	$displayNum1.innerHTML = 1;

	// Create if statement because sometimes results are less than the preset number of displayed results
	if (filteredData.length < stop){
		$displayNum2.innerHTML = filteredData.length;
	}
	else {
		$displayNum2.innerHTML = stop;
	};
	$displayNum3.innerHTML = total_results;
}

// Create event listeners for page clickers
$nextBtn.addEventListener("click", function handleNext(event){
	event.preventDefault();
	if (page < pages_length){
		page += 1;
		start +=50;
		stop +=50;
		renderTable(start, stop);
		$displayNum1.innerHTML = start + 1;
		$displayNum2.innerHTML = stop;
	};
});

$prevBtn.addEventListener("click", function handlePrev(event){
	event.preventDefault();
	if (page > 1){
		page -= 1;
		start -=50;
		stop -=50;
		renderTable(start, stop);
		$displayNum1.innerHTML = start + 1;
		$displayNum2.innerHTML = stop;
	};
});

// Render table of original data set and display of results
renderTable(start, stop);
$displayNum1.innerHTML = 1;
$displayNum2.innerHTML = stop;
$displayNum3.innerHTML = total_results;
