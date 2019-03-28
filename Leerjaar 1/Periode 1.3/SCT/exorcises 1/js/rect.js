const lengte = document.getElementById("lengte");
const breedte = document.getElementById("breedte");
const opp = document.getElementById("feedback");
const omtr = document.getElementById("feedback2");
let button = document.getElementById("button");

opp.innerHTML = "oppervlakte: "
omtr.innerHTML = "omtrek: "

button.addEventListener('click', () => {
makeSum();
})

function makeSum()
{
		 a = lengte.value;
		 b = breedte.value;
		oppervlakte = a * b;
		lengte.focus();
    opp.innerHTML = "oppervlakte: " + oppervlakte;

		omtrek = 2 * a + 2 * b;
		omtr.innerHTML = "omtrek: " + omtrek;

			inputCheck();
}

function inputCheck(){
	if (breedte.value.length == 0) {
		omtr.innerHTML = "omtrek: " + "U heeft de breedte niet ingevoerd!!!";
		opp.innerHTML = "oppervlakte: " + "U heeft de breedte niet ingevoerd!!!";
	}

	if (lengte.value.length == 0) {
		omtr.innerHTML = "omtrek: " + "U heeft de lengte niet ingevoerd!!!";
		opp.innerHTML = "oppervlakte: " + "U heeft de lengte niet ingevoerd!!!";
	}

	isNumber();
}

function isNumber() {
	if (isNaN(omtrek))
	{
		omtr.innerHTML = "omtrek: " + "Alleen cijfers zijn toegestaan!";
		opp.innerHTML = "oppervlakte: " + "Alleen cijfers zijn toegestaan!";
	}

	if (isNaN(oppervlakte))
	{
		omtr.innerHTML = "omtrek: " + "Alleen cijfers zijn toegestaan!";
		opp.innerHTML = "oppervlakte: " + "Alleen cijfers zijn toegestaan!";
	}
}
