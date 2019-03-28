const straal = document.getElementById("straal");
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
		 a = straal.value;
		oppervlakte = Math.PI * Math.pow(a, 2);
		straal.focus();
    opp.innerHTML = "oppervlakte: " + oppervlakte;

		omtrek = 2 * Math.PI * a;
		omtr.innerHTML = "omtrek: " + omtrek;

			inputCheck();
}

function inputCheck(){
	if (straal.value.length == 0) {
		omtr.innerHTML = "omtrek: " + "U heeft de straal niet ingevoerd!!!";
		opp.innerHTML = "oppervlakte: " + "U heeft de straal niet ingevoerd!!!";
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
