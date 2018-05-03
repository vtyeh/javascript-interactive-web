// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#dateTime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

var states = {
  'Alabama': 'AL',
  'Alaska': 'AK',
  'American Samoa': 'AS',
  'Arizona': 'AZ',
  'Arkansas': 'AR',
  'California': 'CA',
  'Colorado': 'CO',
  'Connecticut': 'CT',
  'Delaware': 'DE',
  'District Of Columbia': 'DC',
  'Federated States Of Micronesia': 'FM',
  'Florida': 'FL',
  'Georgia': 'GA',
  'Guam': 'GU',
  'Hawaii': 'HI',
  'Idaho': 'ID',
  'Illinois': 'IL',
  'Indiana': 'IN',
  'Iowa': 'IA',
  'Kansas': 'KS',
  'Kentucky': 'KY',
  'Louisiana': 'LA',
  'Maine': 'ME',
  'Marshall Islands': 'MH',
  'Maryland': 'MD',
  'Massachusetts': 'MA',
  'Michigan': 'MI',
  'Minnesota': 'MN',
  'Mississippi': 'MS',
  'Missouri': 'MO',
  'Montana': 'MT',
  'Nebraska': 'NE',
  'Nevada': 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  'Northern Mariana Islands': 'MP',
  'Ohio': 'OH',
  'Oklahoma': 'OK',
  'Oregon': 'OR',
  'Palau': 'PW',
  'Pennsylvania': 'PA',
  'Puerto Rico': 'PR',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  'Tennessee': 'TN',
  'Texas': 'TX',
  'Utah': 'UT',
  'Vermont': 'VT',
  'Virgin Islands': 'VI',
  'Virginia': 'VA',
  'Washington': 'WA',
  'West Virginia': 'WV',
  'Wisconsin': 'WI',
  'Wyoming': 'WY'
};

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var filteredData = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
	$tbody.innerHTML = "";
	for (var i = 0, ii = filteredData.length; i<ii; i++) {

		// Get get the current alien sighting object and its fields
		var sighting = filteredData[i];
		var fields = Object.keys(sighting);

		// Create a new row in the tbody, set the index to be i + startingIndex
		var $row = $tbody.insertRow(i);
		for (var j = 0, jj = fields.length; j<jj; j++) {

			// For every field in the address object, create a new cell 
			// and set its inner text to be the current value at the current address's field
			var field = fields[j];
			var $cell = $row.insertCell(j);
			$cell.innerText = sighting[field];
		}
	}
}

function filter(dataSet, criteria) {
	return dataSet.filter(function(sighting) {
		return Object.keys(criteria).every(function(c) {
			return sighting[c] == criteria[c];
		});
	});
}

function getAbbr(key) {
	var abbr = states[key].toLowerCase();
	return abbr
}

function handleSearchButtonClick() {
	// Format the user's search by removing leading and trailing whitespace, lowercase the string
	var filterDate =$dateInput.value.trim();
	var filterCity =$cityInput.value.trim().toLowerCase();
	var filterState = getAbbr($stateInput.value);
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
	
	renderTable();
}

renderTable();


