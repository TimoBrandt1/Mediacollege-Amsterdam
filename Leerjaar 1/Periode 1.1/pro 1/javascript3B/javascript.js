let img_1 = document.getElementById('img_1');
let kop = document.getElementById('kop');
let bgKop = document.getElementById('bgKop');
let bgCount = 0;



function button_1()
{
  img_1.src = "img/goldRedTree.jpg";
  kop.innerHTML = "Gold Red Christmas Tree :D";
  document.getElementById('button_1').style.backgroundColor = 'red';
  document.getElementById('button_2').style.backgroundColor = '';
  document.getElementById('button_3').style.backgroundColor = '';
  document.getElementById('button_4').style.backgroundColor = '';
  document.getElementById('button_5').style.backgroundColor = '';
  console.log('button 1');
}

function button_2()
{
  img_1.src = "img/longTree.jpg";
  kop.innerHTML = "Long Christmas Tree :)";
  document.getElementById('button_1').style.backgroundColor = '';
  document.getElementById('button_2').style.backgroundColor = 'gold';
  document.getElementById('button_3').style.backgroundColor = '';
  document.getElementById('button_4').style.backgroundColor = '';
  document.getElementById('button_5').style.backgroundColor = '';
  console.log('button 2');
}

function button_3()
{
  img_1.src = "img/upsidedownTree.jpg";
  kop.innerHTML = "Upside down Christmas Tree :O";
  document.getElementById('button_1').style.backgroundColor = '';
  document.getElementById('button_2').style.backgroundColor = '';
  document.getElementById('button_3').style.backgroundColor = 'green';
  document.getElementById('button_4').style.backgroundColor = '';
  document.getElementById('button_5').style.backgroundColor = '';
  console.log('button 3');
}

function button_4()
{
  img_1.src = "img/snowTree.jpg";
  kop.innerHTML = "Snowy Christmas Tree :p";
  document.getElementById('button_1').style.backgroundColor = '';
  document.getElementById('button_2').style.backgroundColor = '';
  document.getElementById('button_3').style.backgroundColor = '';
  document.getElementById('button_4').style.backgroundColor = 'gold';
  document.getElementById('button_5').style.backgroundColor = '';
  console.log('button 4');
}

function button_5()
{
  img_1.src = "img/filledTree.jpg";
  kop.innerHTML = "Cozy Christmas Tree O.O";
  document.getElementById('button_1').style.backgroundColor = '';
  document.getElementById('button_2').style.backgroundColor = '';
  document.getElementById('button_3').style.backgroundColor = '';
  document.getElementById('button_4').style.backgroundColor = '';
  document.getElementById('button_5').style.backgroundColor = 'red';
  console.log('button 5');
}

function bgChange()
{
  bgCount++;
  if(bgCount == 1)
  {
  document.body.style.backgroundImage = "url('img/bg1.jpg')";
  bgKop.innerHTML = "Achtergrond: 1";
  }
  if(bgCount == 2)
  {
  document.body.style.backgroundImage = "url('img/bg2.jpg')";
  bgKop.innerHTML = "Achtergrond: 2";
  }
  if(bgCount == 3)
  {
  document.body.style.backgroundImage = "url('img/bg3.jpg')";
  bgKop.innerHTML = "Achtergrond: 3";
  }
  if(bgCount == 4)
  {
  document.body.style.backgroundImage = "url('img/bg4.jpg')";
  bgKop.innerHTML = "Achtergrond: 4";
  }
  if(bgCount == 5)
  {
  document.body.style.backgroundImage = "url('img/bg5.jpg')";
  bgKop.innerHTML = "Achtergrond: 5";
  }
  if(bgCount == 6)
  {
  document.body.style.backgroundImage = "url('img/bg6.jpg')";
  bgKop.innerHTML = "Achtergrond: 6";
  }
  if(bgCount == 7)
  {
  document.body.style.backgroundImage = "url('img/bg7.jpg')";
  bgKop.innerHTML = "Achtergrond: 7";
  }
  if(bgCount == 8)
  {
  document.body.style.backgroundImage = "url('img/bg8.jpg')";
  bgKop.innerHTML = "Achtergrond: 8";
  }
  if(bgCount == 9)
  {
  document.body.style.backgroundImage = "url('img/bg9.jpg')";
  bgKop.innerHTML = "Achtergrond: 9";
  }
  if(bgCount == 10)
  {
  document.body.style.backgroundImage = "url('img/bg10.jpg')";
  bgKop.innerHTML = "Achtergrond: 10";
  }
  if(bgCount == 11)
  {
    bgCount = 0;
  }
}
