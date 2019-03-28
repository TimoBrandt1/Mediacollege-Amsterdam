const celcius = document.getElementById("celcius");
const fahr = document.getElementById("feedback");
const kelv = document.getElementById("feedback2");
let button = document.getElementById("button");

fahr.innerHTML = "graden fahrenheit: "
kelv.innerHTML = "graden kelvin: "

button.addEventListener('click', () => {
makeSum();
})

function makeSum()
{
		 a = celcius.value;
		fah = (9 * a / 5) + 32;
		celcius.focus();
    fahr.innerHTML = "graden fahrenheit: " + fah;

		kel = a + 273;
		kelv.innerHTML = "graden kelvin: " + kel;
			inputCheck();
}

function inputCheck(){
	if (celcius.value.length == 0) {
		fahr.innerHTML = "graden fahrenheit: " + "U heeft geen grade ingevoerd!!!";
		kelv.innerHTML = "graden kelvin: " + "U heeft geen grade ingevoerd!!!";
	}

  isNumber();
}

function isNumber() {
	if (isNaN(fah))
	{
		kelv.innerHTML = "graden kelvin: " + "Alleen cijfers zijn toegestaan!";
		fahr.innerHTML = "graden fahrenheit: " + "Alleen cijfers zijn toegestaan!";
	}

	if (isNaN(kel))
	{
		kelv.innerHTML = "graden kelvin: " + "Alleen cijfers zijn toegestaan!";
		fahr.innerHTML = "graden fahrenheit: " + "Alleen cijfers zijn toegestaan!";
	}
}
