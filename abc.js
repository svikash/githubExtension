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
        "#663131"
    ],
    [
        "#f25f04"
    ],
    [
        "#E6096A"
    ],
    [
        "#3F2EEE"
    ],
    [
        "#067BC2"
    ],
    [
        "#fffb31"
    ],
    [

    ],
    // https://twitter.com/gladchinda/status/1057623504827355136
]
console.log("Helloo");
document.addEventListener("DOMContentLoaded",function(){
    var x=document.getElementsByClassName("day");
for(var i =0;i<x.length;i++){
    if(x[i].getAttribute("fill")== "#ebedf0"){
      //  x[i].setAttribute("fill","#000");
    }    
    else if(x[i].getAttribute("fill")=="#c6e48b"){
        x[i].setAttribute("fill","#E0CCE0");
    }
    else if(x[i].getAttribute("fill")=="#7bc96f"){
        x[i].setAttribute("fill","#BA49BA");
    }
    else if(x[i].getAttribute("fill")=="#239a3b"){
        x[i].setAttribute("fill","#660066");
    }
    else if(x[i].getAttribute("fill")=="#196127"){
        x[i].setAttribute("fill","#330033");
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
        y[i].style["background-color"]=("rgb(186, 73, 186)");
    }
    else if(p=="rgb(123, 201, 111)"){
        y[i].style["background-color"]="#BA49BA";
    }
    else if(p=="rgb(35, 154, 59)"){
        y[i].style["background-color"]="#660066";
    }
    else if(p=="rgb(25, 97, 39)"){
        y[i].style["background-color"]="#330033";
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