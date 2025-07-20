
const colors =  [
  "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure",
  "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue",
  "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse",
  "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson",
  "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray",
  "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen",
  "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
  "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet",
  "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue",
  "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro",
  "GhostWhite", "Gold", "GoldenRod", "Gray", "Green",
  "GreenYellow", "Grey", "HoneyDew", "HotPink", "IndianRed",
  "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush",
  "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
  "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink",
  "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey",
  "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen",
  "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
  "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
  "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin",
  "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab",
  "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen",
  "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru",
  "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple",
  "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon",
  "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver",
  "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow",
  "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle",
  "Tomato", "Turquoise", "Violet", "Wheat", "White",
  "WhiteSmoke", "Yellow", "YellowGreen"
]

const n = colors.length

const bd=document.body
const b1=document.getElementById('s1')      //start button
const b2=document.getElementById('s2')      //stop button
const ans=document.getElementById('ans1')

let changer;        //changing switch
let i=0;            //color counter
let changin=false;     //control switch

b1.addEventListener('click',function(){
    if(changin==false){
        changer = setInterval(()=>{         //setting interval of color changing 
            bd.style.backgroundColor = colors[i%n]
            i++;
            console.log(i);
        }, 100)
        changin=true;  
    }
})

b2.addEventListener('click',function(){
    clearInterval(changer)
    changin=false;
})

bd.addEventListener('keydown',function(e){
    ans.innerText=e.key;
})
