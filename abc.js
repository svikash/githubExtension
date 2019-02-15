//changeColor.onclick = function(element) {
  //  let color = element.target.value;
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //   chrome.tabs.executeScript(
        //   tabs[0].id,
        //   {code: a});

        // });
 // };
 var color=[
    [
         "#E0CCE0","#BA49BA","#660066","#330033"   
     ],
    [
        "#F3D3D4","#E4999B","#D56062","#3B1B1B"
    ],
     [
        "#DBC6C6", "#AB7A7A", "#663131", "#281313" 
    ],
    [
        "#F9BF9A", "#F47E36", "#D95503", "#481C01"
    ],
    [
        "#F7B5D2", "#ED5296", "#E6096A", "#45021F"
    ],
    [
        "#C5C0F9", "#786CF3", "#3F2EEE", "#251b8e"
    ],
    [
        "#C1D1FF", "#50a2d4", "#067BC2", "#033d61"
    ],
    [
        "#FEE858","#F4BC35","#E48734","#020014"
    ],
    // https://twitter.com/gladchinda/status/1057623504827355136
];
var selected=color[Math.floor(Math.random()*color.length)];
console.log("Helloo");
document.addEventListener("DOMContentLoaded",function(){
    var x=document.getElementsByClassName("day");
for(var i =0;i<x.length;i++){
    if(x[i].getAttribute("fill")== "#ebedf0"){
      //  x[i].setAttribute("fill","#000");
    }    
    else if(x[i].getAttribute("fill")=="#c6e48b"){
        x[i].setAttribute("fill",selected[0]);
    }
    else if(x[i].getAttribute("fill")=="#7bc96f"){
        x[i].setAttribute("fill",selected[1]);
    }
    else if(x[i].getAttribute("fill")=="#239a3b"){
        x[i].setAttribute("fill",selected[2]);
    }
    else if(x[i].getAttribute("fill")=="#196127"){
        x[i].setAttribute("fill",selected[3]);
    }
}
var y=document.querySelectorAll(".legend li");
for(var i =0;i<y.length;i++)
{
    var p=y[i].style["background-color"];
    console.log(p);
    if(p== "rgb(235, 237, 240)"){
      //  x[i].setAttribute("fill","#000");
    }    
    else if(p=="rgb(198, 228, 139)"){
        y[i].style["background-color"]=selected[0];
    }
    else if(p=="rgb(123, 201, 111)"){
        y[i].style["background-color"]=selected[1];
    }
    else if(p=="rgb(35, 154, 59)"){
        y[i].style["background-color"]=selected[2];
    }
    else if(p=="rgb(25, 97, 39)"){
        y[i].style["background-color"]=selected[3];
    }
}

})

/*
#E0CCE0
#BA49BA
#660066
#330033


#F3D3D4
#E4999B
#D56062
#3B1B1B


#067BC2

rgb(235, 237, 240)
rgb(198, 228, 139)
rgb(123, 201, 111)
rgb(35, 154, 59)
rgb(25, 97, 39)

.legend li{

}


*/