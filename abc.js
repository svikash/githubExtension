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
        "#F9BF9A", "#F47E36", "#D95503", "#481c01"
    ],
    [
        "#F7B5D2", "#f06ba5", "#E6096A", "#45021f"
    ],
    [
        "#C5C0F9", "#786CF3", "#3F2EEE", "#251b8e"
    ],
    [
        "#C1D1FF", "#50a2d4", "#067BC2", "#01243a"
    ],
    [
        "#FEE858","#F4BC35","#E48734","#020014"
    ],
    // https://twitter.com/gladchinda/status/1057623504827355136
];
var selected=color[Math.floor(Math.random()*color.length)];
var max=[0];
var currstreak=[0];

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
    var curr = parseInt(x[i].getAttribute("data-count"));
    if(curr > max[0]){
        max[0] = curr;
        max[1]= x[i].getAttribute("data-date");
    }
    currstreak[0]++;
    if(curr == 0 ){
        currstreak = [0];
        
    }
    else{
        if(currstreak[0]==0){
            currstreak[1]=x[i].getAttribute("data-date"); //set start date
        }
        if(currstreak[1]!=undefined){
            currstreak[2]=x[i].getAttribute("data-date"); //set end date
        }
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
var container = document.querySelector(".graph-before-activity-overview");
var graphdiv = document.createElement("div");
graphdiv.innerHTML=`
<style>
h1{
    color:${ selected[3] };
    font-size:20px;
}
.graphspan{
    font-style:italic;
    font-size:12px;
    color:lightgrey;
}
</style>
`
graphdiv.innerHTML+="<h5> Current Streak</h5> <h1>" + currstreak[0] + " <span class=\"graphspan\">From " + currstreak[1] + "</span></h1><h5>Maximum contribution in a day</h5> <h1>" +max[0] +"<span class=\"graphspan\"> On " +max[1] +"</span></h1>";

container.insertBefore(graphdiv,container.firstChild);   



})

