let mB1 = document.getElementById('mijnButton1');
let mijnButton2 = document.getElementById('mijnButton2');


mB1.addEventListener('click', () =>{
  let jaar     = document.getElementById('Jaar');
  let maand    = document.getElementById('Maand');
  let dag      = document.getElementById('Dag');
  let uur      = document.getElementById('Uur');
  let minuten  = document.getElementById('Minuten');
  let seconden = document.getElementById('Seconden');
  let datum    = new Date();

  jaar.innerHTML = datum.getFullYear();
  maand.innerHTML = datum.getMonth()+ 1;
  dag.innerHTML = datum.getDate();
  uur.innerHTML = datum.getHours();
  minuten.innerHTML = datum.getMinutes();
  seconden.innerHTML = datum.getSeconds();
})

mijnButton2.addEventListener('click', ()=>{
  let datum    = new Date();
  if(datum.getHours() <= 12){window.alert("Goedemorgen")}
  if(datum.getHours() >= 12 && datum.getHours() <= 17){window.alert("Goedemiddag")}
  if(datum.getHours() >= 18 && datum.getHours() <= 21){window.alert("Goedenavond")}
  if(datum.getHours() >= 22 && datum.getHours() <= 24){window.alert("Goedenacht")}

})
