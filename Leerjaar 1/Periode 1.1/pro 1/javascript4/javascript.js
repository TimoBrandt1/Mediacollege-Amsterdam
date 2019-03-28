//Declaraties KT1
let studiepuntenHaalbaarKT1 = document.getElementById("studiepuntenHaalbaarKT1").innerHTML;
let UXD = document.getElementById('UXD');
let TPR = document.getElementById('TPR');
let gemiddeldeKT1 = document.getElementById('gemiddeldeKT1');
let studiepuntenKT1 = document.getElementById('studiepuntenKT1');

//Function KT1
UXD.addEventListener('input', berekenGemiddeldeKT1);
TPR.addEventListener('input', berekenGemiddeldeKT1);
function berekenGemiddeldeKT1()
{
  let gemiddelde = (parseFloat(UXD.value) + parseFloat(TPR.value))/2;
  let rounded = gemiddelde.toFixed(1);
  gemiddeldeKT1.innerHTML = rounded;
  if(gemiddelde >= 5.5)
  {studiepuntenBehaaldKT1.innerHTML = studiepuntenHaalbaarKT1;}
  else{ studiepuntenBehaaldKT1.innerHTML = 0;}
  if(gemiddelde < 5.5)
  {document.getElementById('studiepuntenBehaaldKT1').style.backgroundColor = 'red';}
  while(gemiddelde >= 5.5)
  {document.getElementById('studiepuntenBehaaldKT1').style.backgroundColor = 'green'; break;}

  berekenTotaalSP();
}

//Declaraties KT2
let studiepuntenHaalbaarKT2 = document.getElementById("studiepuntenHaalbaarKT2").innerHTML;
let PRO1 = document.getElementById('PRO1');
let PRO2 = document.getElementById('PRO2');
let gemiddeldeKT2 = document.getElementById('gemiddeldeKT2');
let studiepuntenKT2 = document.getElementById('studiepuntenKT2');

//Function KT2
PRO1.addEventListener('input', berekenGemiddeldeKT2);
PRO2.addEventListener('input', berekenGemiddeldeKT2);
function berekenGemiddeldeKT2()
{
  let gemiddelde = (parseFloat(PRO1.value) + parseFloat(PRO2.value))/2;
  let rounded = gemiddelde.toFixed(1);
  gemiddeldeKT2.innerHTML = rounded;
  if(gemiddelde >= 5.5)
  {studiepuntenBehaaldKT2.innerHTML = studiepuntenHaalbaarKT2;}
  else{ studiepuntenBehaaldKT2.innerHTML = 0;}
  if(gemiddelde < 5.5)
  {document.getElementById('studiepuntenBehaaldKT2').style.backgroundColor = 'red';}
  while(gemiddelde >= 5.5)
  {document.getElementById('studiepuntenBehaaldKT2').style.backgroundColor = 'green'; break;}

  berekenTotaalSP();
}

//Declaraties KT3
let studiepuntenHaalbaarKT3 = document.getElementById("studiepuntenHaalbaarKT3").innerHTML;
let PROJ = document.getElementById('PROJ');
let WVO = document.getElementById('WVO');
let gemiddeldeKT3 = document.getElementById('gemiddeldeKT3');
let studiepuntenKT3 = document.getElementById('studiepuntenKT3');

//Function KT3
PROJ.addEventListener('input', berekenGemiddeldeKT3);
WVO.addEventListener('input', berekenGemiddeldeKT3);
function berekenGemiddeldeKT3()
{
  let gemiddelde = (parseFloat(PROJ.value) + parseFloat(WVO.value))/2;
  let rounded = gemiddelde.toFixed(1);
  gemiddeldeKT3.innerHTML = rounded;
  if(gemiddelde >= 5.5)
  {studiepuntenBehaaldKT3.innerHTML = studiepuntenHaalbaarKT1;}
  else{ studiepuntenBehaaldKT3.innerHTML = 0;}
  if(gemiddelde < 5.5)
  {document.getElementById('studiepuntenBehaaldKT3').style.backgroundColor = 'red';}
  while(gemiddelde >= 5.5)
  {document.getElementById('studiepuntenBehaaldKT3').style.backgroundColor = 'green'; break;}
  berekenTotaalSP();
}

//Declaraties AVO
let studiepuntenHaalbaarAVO = document.getElementById("studiepuntenHaalbaarAVO").innerHTML;
let ENG = document.getElementById('ENG');
let NED = document.getElementById('NED');
let REK = document.getElementById('REK');
let gemiddeldeAVO = document.getElementById('gemiddeldeAVO');
let studiepuntenAVO = document.getElementById('studiepuntenAVO');

//Function AVO
ENG.addEventListener('input', berekenGemiddeldeAVO);
NED.addEventListener('input', berekenGemiddeldeAVO);
REK.addEventListener('input', berekenGemiddeldeAVO);
function berekenGemiddeldeAVO()
{
  let gemiddelde = (parseFloat(ENG.value) + parseFloat(NED.value) + parseFloat(REK.value))/3;
  let rounded = gemiddelde.toFixed(1);
  gemiddeldeAVO.innerHTML = rounded;
  if(gemiddelde >= 5.5)
  {studiepuntenBehaaldAVO.innerHTML = studiepuntenHaalbaarKT1;}
  else{ studiepuntenBehaaldAVO.innerHTML = 0;}
  if(gemiddelde < 5.5)
  {document.getElementById('studiepuntenBehaaldAVO').style.backgroundColor = 'red';}
  while(gemiddelde >= 5.5)
  {document.getElementById('studiepuntenBehaaldAVO').style.backgroundColor = 'green'; break;}
  berekenTotaalSP();
}

//Declaraties PROF
let studiepuntenHaalbaarPROF = document.getElementById("studiepuntenHaalbaarPROF").innerHTML;
let BUR = document.getElementById('BUR');
let SLB = document.getElementById('SLB');
let gemiddeldePROF = document.getElementById('gemiddeldePROF');
let studiepuntenPROF = document.getElementById('studiepuntenPROF');

//Function PROF
BUR.addEventListener('input', berekenGemiddeldePROF);
SLB.addEventListener('input', berekenGemiddeldePROF);
function berekenGemiddeldePROF()
{
  let gemiddelde = (parseFloat(BUR.value) + parseFloat(SLB.value))/2;
  let rounded = gemiddelde.toFixed(1);
  gemiddeldePROF.innerHTML = rounded;
  if(gemiddelde >= 5.5)
  {studiepuntenBehaaldPROF.innerHTML = studiepuntenHaalbaarPROF;}
  else{ studiepuntenBehaaldPROF.innerHTML = 0;}
  if(gemiddelde < 5.5)
  {document.getElementById('studiepuntenBehaaldPROF').style.backgroundColor = 'red';}
  while(gemiddelde >= 5.5)
  {document.getElementById('studiepuntenBehaaldPROF').style.backgroundColor = 'green'; break;}
  berekenTotaalSP();
}

//Bereken totaal aantal studiepunten
let totaalSP = document.getElementById('totaalSP');
function berekenTotaalSP()
{
  totaalSP.innerHTML = parseFloat(studiepuntenBehaaldKT1.innerHTML)
  + parseFloat(studiepuntenBehaaldKT2.innerHTML) +
  parseFloat(studiepuntenBehaaldKT3.innerHTML) +
  parseFloat(studiepuntenBehaaldAVO.innerHTML) +
  parseFloat(studiepuntenBehaaldPROF.innerHTML);
}
