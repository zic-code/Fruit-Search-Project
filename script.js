const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search() {
	// Empty Array for the resutls
	let results = [];
	// find the Value of fruit(searchBar) what you wrote Down.
  let searchInput = document.getElementById("fruit").value.trim().toLowerCase();

	for(let i of fruit){

		if (searchInput === "") {
			results = [];
			return results;
		}
		else{
		//if character include in the Fruit then, push to the result(empty Array)
		let fruitName = i.toLowerCase();
		if (fruitName.includes(searchInput)){
			results.push(i);
		}	}}
	return results;
	// TODO
}
let results =[];
function searchHandler(e) {
	let inputVal= e.target.val;
	let results = search();
	
	showSuggestions(results, inputVal);
	console.log(results, inputVal);
}


function showSuggestions(results, inputVal) {
	suggestions.innerHTML = ''
			for (let i of results) {
        let list = document.createElement('li');
        list.textContent = i;
        suggestions.appendChild(list);
	}
	suggestions.addEventListener("mouseover",(changeColor) =>{changeColor.target.style.backgroundColor ="orangered"}
	)
	suggestions.addEventListener("mouseout",(resetColor) =>
	{resetColor.target.style.backgroundColor = ""}
	)	
}
	// TODO


function useSuggestion(e) {
	let selectedSuggestion = e.target.textContent;
	document.getElementById("fruit").value = selectedSuggestion;
	e.target.parentNode.parentNode.innerHTML = '';
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);



