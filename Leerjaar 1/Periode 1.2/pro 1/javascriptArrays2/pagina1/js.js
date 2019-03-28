let kerst = ["Bells", "Candy Cane", "Sleight", "Elf", "Santa", "Carols", "Gold", "Happy", "Reindier", "Gingerbread",
 "Holiday", "Icy", "Christmas list", "Merry", "X-may", "Nutcrakker", "Red", "Rudolf", "Santa Claus", "Snowball", "Sweater", "Snowman",
  "Christmas Tree", "Turkey", "Workshop", "Unwrap", "Gift", "Wintertime", "X-mas", "Mistleto", "Naughty", "Nice", "North Pole"];

let toevoeg = ["ste","de"];
let arrayText = "";
let number = 1;

//start code
let x,y,text="";
for(x=1; x <=6; x++){
  for (y=1; y < x; y++)
  {
    text=text+("*");
  }
console.log(text);
text='';
}
arrayText = "<ul>";
for (let i = 0; i < kerst.length; i++)
{
    if (i == 0 || i == 7 || i > 19)
  //  if (i == 1 )
    {
        arrayText += "<li><i>" + number++ + toevoeg[0] + " " + kerst[i] + "</i></li>";
    }
    else
    {
       arrayText += "<li>" + number++ + toevoeg[1] + " " + kerst[i] + "</li>";
    }
}
arrayText += "</ul>";
opgave1.innerHTML = arrayText;
