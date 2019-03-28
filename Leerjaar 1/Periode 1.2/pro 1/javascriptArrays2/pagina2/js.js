//opgave 1
let x,y,text="";
document.write("opgave 1");
for(x=1; x <=6; x++){
  for (y=1; y < x; y++)
  {
    text=text+("&#129297");
  }
console.log(text);
document.write(text + "<br>");
text='';
}

//challenge 1
document.write("challenge 1");
for(x=1; x <=6; x++){
  for (y=1; y < x; y++)
  {
    if (y==2 || y==4) {
      text=text+("&#128566");
    }
    else{
      text=text+("&#129297");
    }

  }
console.log(text);
document.write(text + "<br>");
text='';

}

//challenge 2
document.write("challenge 2");
for(x=1; x <=6; x++){
  for (y=1; y < x; y++)
  {
    if (y==2 || y==4) {
      text=text+("&#128566");
    }
    else{
      text=text+("&#129297");
    }
    if (y==3) {
      text=text+("&#129297");
    }

  }
console.log(text);
document.write(text + "<br>");
text='';

}

//challenge 3
document.write("challenge 3" + "<br>");
for(x=6; x > 0; x--){
  for (y=1; y < x; y++){
    if (y==2 || y==4) {
      text=text+("&#128566");
    }
    else{
      text=text+("&#129297");
    }
    if (y==3){
      text=text+("&#129297");
    }

  }
console.log(text);
document.write(text + "<br>");
text='';

}
