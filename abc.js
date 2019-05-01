





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

var container ;
var graphdiv ;
var data=[];
var maxContri = 0;




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
    if(curr == 0 ){
        currstreak = [0]; // reset the streak
        
    }
    else{
        if(currstreak[0]==0){
            currstreak[1]=x[i].getAttribute("data-date"); //set start date
        }
        if(currstreak[1]!=undefined){
            currstreak[2]=x[i].getAttribute("data-date"); //set end date
        }
        currstreak[0]++;//increase the streak
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

var el =document.querySelector(".js-calendar-graph-svg").children[0].querySelectorAll('g');
el.forEach(function(parent){
	Array.from(parent.children).forEach(function(rect){
        var temp=[]
     temp[0]=parseInt(parent.getAttribute('transform').substring(10,parent.getAttribute('transform').indexOf(",")))
//        temp[0]=parseInt(rect.getAttribute('x'))
        temp[1]=parseInt(rect.getAttribute('y'))
        temp[2]=parseInt(rect.getAttribute('data-count'))
        temp[3]=rect.getAttribute('fill')
        temp[4]=parseInt(rect.getAttribute('width'))
        data.push(temp)
    })
})
//console.log(arr);



















container = document.querySelector(".graph-before-activity-overview");
graphdiv = document.createElement("div");



graphdiv.className = 'graph-div metry-container';
graphdiv.innerHTML=`
<style>
h1{
    color:${ selected[3] };
    font-size:20px;
}
.graph-div{
    height: 800px;
}
.graphspan{
    font-style:italic;
    font-size:12px;
    color:lightgrey;
}
canvas{
   /* position:absolute;*/

}
</style>
`
graphdiv.innerHTML+=`<h5> Current Streak</h5> <h1> ${ currstreak[0] } ${currstreak[0]==0 ? '' :`<span class=\"graphspan\">From ${currstreak[1] }</span>`}</h1><h5>Maximum contribution in a day</h5> <h1> ${max[0] } <span class=\"graphspan\"> On  ${ max[1] }</span></h1>`;

container.insertBefore(graphdiv,container.firstChild);   





/*
var data = [
    [0,0,0,"#ebedf0"],[0,10,0,"#ebedf0"],[0,20,0,"#ebedf0"],[0,30,0,"#ebedf0"],[0,40,0,"#ebedf0"],[0,50,0,"#ebedf0"],[0,60,0,"#ebedf0"],
    [11,0,0,"#ebedf0"],[11,10,0,"#ebedf0"],[11,20,0,"#ebedf0"],[11,30,0,"#ebedf0"],[11,40,0,"#ebedf0"],[11,50,0,"#ebedf0"],[11,60,0,"#ebedf0"],
    [22,0,0,"#ebedf0"],[22,10,0,"#ebedf0"],[22,20,0,"#ebedf0"],[22,30,0,"#ebedf0"],[22,40,0,"#ebedf0"],[22,50,0,"#ebedf0"],[22,60,0,"#ebedf0"],
    [33,0,0,"#ebedf0"],[33,10,0,"#ebedf0"],[33,20,0,"#ebedf0"],[33,30,0,"#ebedf0"],[33,40,0,"#ebedf0"],[33,50,0,"#ebedf0"],[33,60,0,"#ebedf0"],
    [44,0,0,"#ebedf0"],[44,10,0,"#ebedf0"],[44,20,0,"#ebedf0"],[44,30,0,"#ebedf0"],[44,40,0,"#ebedf0"],[44,50,0,"#ebedf0"],[44,60,0,"#ebedf0"],
    [55,0,0,"#ebedf0"],[55,10,0,"#ebedf0"],[55,20,0,"#ebedf0"],[55,30,0,"#ebedf0"],[55,40,0,"#ebedf0"],[55,50,0,"#ebedf0"],[55,60,0,"#ebedf0"],
    [66,0,0,"#ebedf0"],[66,10,0,"#ebedf0"],[66,20,0,"#ebedf0"],[66,30,0,"#ebedf0"],[66,40,0,"#ebedf0"],[66,50,0,"#ebedf0"],[66,60,0,"#ebedf0"],
    [77,0,0,"#ebedf0"],[77,10,0,"#ebedf0"],[77,20,0,"#ebedf0"],[77,30,0,"#ebedf0"],[77,40,0,"#ebedf0"],[77,50,0,"#ebedf0"],[77,60,0,"#ebedf0"],
    [88,0,0,"#ebedf0"],[88,10,0,"#ebedf0"],[88,20,0,"#ebedf0"],[88,30,0,"#ebedf0"],[88,40,0,"#ebedf0"],[88,50,0,"#ebedf0"],[88,60,0,"#ebedf0"],
    [99,0,0,"#ebedf0"],[99,10,0,"#ebedf0"],[99,20,0,"#ebedf0"],[99,30,0,"#ebedf0"],[99,40,0,"#ebedf0"],[99,50,0,"#ebedf0"],[99,60,0,"#ebedf0"],
    [110,0,0,"#ebedf0"],[110,10,0,"#ebedf0"],[110,20,0,"#ebedf0"],[110,30,2,"#c6e48b"],[110,40,0,"#ebedf0"],[110,50,0,"#ebedf0"],[110,60,0,"#ebedf0"],
    [121,0,0,"#ebedf0"],[121,10,0,"#ebedf0"],[121,20,0,"#ebedf0"],[121,30,0,"#ebedf0"],[121,40,0,"#ebedf0"],[121,50,0,"#ebedf0"],[121,60,0,"#ebedf0"],
    [132,0,0,"#ebedf0"],[132,10,0,"#ebedf0"],[132,20,0,"#ebedf0"],[132,30,0,"#ebedf0"],[132,40,0,"#ebedf0"],[132,50,0,"#ebedf0"],[132,60,0,"#ebedf0"],
    [143,0,0,"#ebedf0"],[143,10,0,"#ebedf0"],[143,20,0,"#ebedf0"],[143,30,0,"#ebedf0"],[143,40,0,"#ebedf0"],[143,50,0,"#ebedf0"],[143,60,0,"#ebedf0"],
    [154,0,0,"#ebedf0"],[154,10,0,"#ebedf0"],[154,20,0,"#ebedf0"],[154,30,0,"#ebedf0"],[154,40,0,"#ebedf0"],[154,50,0,"#ebedf0"],[154,60,0,"#ebedf0"],
    [165,0,0,"#ebedf0"],[165,10,0,"#ebedf0"],[165,20,0,"#ebedf0"],[165,30,0,"#ebedf0"],[165,40,0,"#ebedf0"],[165,50,0,"#ebedf0"],[165,60,0,"#ebedf0"],
    [176,0,0,"#ebedf0"],[176,10,0,"#ebedf0"],[176,20,0,"#ebedf0"],[176,30,0,"#ebedf0"],[176,40,0,"#ebedf0"],[176,50,0,"#ebedf0"],[176,60,0,"#ebedf0"],
    [187,0,0,"#ebedf0"],[187,10,0,"#ebedf0"],[187,20,0,"#ebedf0"],[187,30,0,"#ebedf0"],[187,40,0,"#ebedf0"],[187,50,0,"#ebedf0"],[187,60,0,"#ebedf0"],
    [198,0,0,"#ebedf0"],[198,10,0,"#ebedf0"],[198,20,0,"#ebedf0"],[198,30,0,"#ebedf0"],[198,40,0,"#ebedf0"],[198,50,0,"#ebedf0"],[198,60,0,"#ebedf0"],
    [209,0,0,"#ebedf0"],[209,10,0,"#ebedf0"],[209,20,0,"#ebedf0"],[209,30,0,"#ebedf0"],[209,40,0,"#ebedf0"],[209,50,0,"#ebedf0"],[209,60,0,"#ebedf0"],
    [220,0,4,"#7bc96f"],[220,10,0,"#ebedf0"],[220,20,0,"#ebedf0"],[220,30,0,"#ebedf0"],[220,40,0,"#ebedf0"],[220,50,0,"#ebedf0"],[220,60,0,"#ebedf0"],
    [231,0,0,"#ebedf0"],[231,10,0,"#ebedf0"],[231,20,0,"#ebedf0"],[231,30,0,"#ebedf0"],[231,40,0,"#ebedf0"],[231,50,0,"#ebedf0"],[231,60,0,"#ebedf0"],
    [242,0,0,"#ebedf0"],[242,10,0,"#ebedf0"],[242,20,0,"#ebedf0"],[242,30,0,"#ebedf0"],[242,40,0,"#ebedf0"],[242,50,0,"#ebedf0"],[242,60,0,"#ebedf0"],
    [253,0,0,"#ebedf0"],[253,10,0,"#ebedf0"],[253,20,0,"#ebedf0"],[253,30,0,"#ebedf0"],[253,40,0,"#ebedf0"],[253,50,0,"#ebedf0"],[253,60,0,"#ebedf0"],
    [264,0,0,"#ebedf0"],[264,10,0,"#ebedf0"],[264,20,0,"#ebedf0"],[264,30,0,"#ebedf0"],[264,40,0,"#ebedf0"],[264,50,0,"#ebedf0"],[264,60,0,"#ebedf0"],
    [275,0,2,"#c6e48b"],[275,10,0,"#ebedf0"],[275,20,0,"#ebedf0"],[275,30,0,"#ebedf0"],[275,40,0,"#ebedf0"],[275,50,0,"#ebedf0"],[275,60,2,"#c6e48b"],
    [286,0,1,"#c6e48b"],[286,10,0,"#ebedf0"],[286,20,0,"#ebedf0"],[286,30,0,"#ebedf0"],[286,40,0,"#ebedf0"],[286,50,0,"#ebedf0"],[286,60,0,"#ebedf0"],
    [297,0,0,"#ebedf0"],[297,10,0,"#ebedf0"],[297,20,0,"#ebedf0"],[297,30,0,"#ebedf0"],[297,40,0,"#ebedf0"],[297,50,0,"#ebedf0"],[297,60,0,"#ebedf0"],
    [308,0,0,"#ebedf0"],[308,10,0,"#ebedf0"],[308,20,0,"#ebedf0"],[308,30,0,"#ebedf0"],[308,40,0,"#ebedf0"],[308,50,0,"#ebedf0"],[308,60,0,"#ebedf0"],
    [319,0,0,"#ebedf0"],[319,10,0,"#ebedf0"],[319,20,0,"#ebedf0"],[319,30,0,"#ebedf0"],[319,40,0,"#ebedf0"],[319,50,0,"#ebedf0"],[319,60,0,"#ebedf0"],
    [330,0,0,"#ebedf0"],[330,10,0,"#ebedf0"],[330,20,0,"#ebedf0"],[330,30,0,"#ebedf0"],[330,40,0,"#ebedf0"],[330,50,0,"#ebedf0"],[330,60,0,"#ebedf0"],
    [341,0,0,"#ebedf0"],[341,10,0,"#ebedf0"],[341,20,0,"#ebedf0"],[341,30,0,"#ebedf0"],[341,40,0,"#ebedf0"],[341,50,0,"#ebedf0"],[341,60,0,"#ebedf0"],
    [352,0,0,"#ebedf0"],[352,10,0,"#ebedf0"],[352,20,0,"#ebedf0"],[352,30,0,"#ebedf0"],[352,40,0,"#ebedf0"],[352,50,0,"#ebedf0"],[352,60,0,"#ebedf0"],
    [363,0,0,"#ebedf0"],[363,10,0,"#ebedf0"],[363,20,0,"#ebedf0"],[363,30,0,"#ebedf0"],[363,40,0,"#ebedf0"],[363,50,0,"#ebedf0"],[363,60,0,"#ebedf0"],
    [374,0,0,"#ebedf0"],[374,10,0,"#ebedf0"],[374,20,0,"#ebedf0"],[374,30,0,"#ebedf0"],[374,40,0,"#ebedf0"],[374,50,0,"#ebedf0"],[374,60,0,"#ebedf0"],
    [385,0,0,"#ebedf0"],[385,10,0,"#ebedf0"],[385,20,0,"#ebedf0"],[385,30,0,"#ebedf0"],[385,40,0,"#ebedf0"],[385,50,0,"#ebedf0"],[385,60,0,"#ebedf0"],
    [396,0,0,"#ebedf0"],[396,10,0,"#ebedf0"],[396,20,0,"#ebedf0"],[396,30,0,"#ebedf0"],[396,40,0,"#ebedf0"],[396,50,0,"#ebedf0"],[396,60,0,"#ebedf0"],
    [407,0,0,"#ebedf0"],[407,10,2,"#c6e48b"],[407,20,0,"#ebedf0"],[407,30,0,"#ebedf0"],[407,40,0,"#ebedf0"],[407,50,0,"#ebedf0"],[407,60,0,"#ebedf0"],
    [418,0,0,"#ebedf0"],[418,10,0,"#ebedf0"],[418,20,0,"#ebedf0"],[418,30,0,"#ebedf0"],[418,40,0,"#ebedf0"],[418,50,0,"#ebedf0"],[418,60,0,"#ebedf0"],
    [429,0,0,"#ebedf0"],[429,10,0,"#ebedf0"],[429,20,0,"#ebedf0"],[429,30,0,"#ebedf0"],[429,40,0,"#ebedf0"],[429,50,0,"#ebedf0"],[429,60,0,"#ebedf0"],
    [440,0,0,"#ebedf0"],[440,10,0,"#ebedf0"],[440,20,0,"#ebedf0"],[440,30,0,"#ebedf0"],[440,40,0,"#ebedf0"],[440,50,0,"#ebedf0"],[440,60,0,"#ebedf0"],
    [451,0,0,"#ebedf0"],[451,10,0,"#ebedf0"],[451,20,0,"#ebedf0"],[451,30,0,"#ebedf0"],[451,40,0,"#ebedf0"],[451,50,0,"#ebedf0"],[451,60,0,"#ebedf0"],
    [462,0,0,"#ebedf0"],[462,10,0,"#ebedf0"],[462,20,0,"#ebedf0"],[462,30,0,"#ebedf0"],[462,40,0,"#ebedf0"],[462,50,11,"#196127"],[462,60,8,"#239a3b"],
    [473,0,8,"#239a3b"],[473,10,3,"#c6e48b"],[473,20,5,"#7bc96f"],[473,30,4,"#7bc96f"],[473,40,2,"#c6e48b"],[473,50,6,"#7bc96f"],[473,60,4,"#7bc96f"],
    [484,0,3,"#c6e48b"],[484,10,0,"#ebedf0"],[484,20,4,"#7bc96f"],[484,30,0,"#ebedf0"],[484,40,2,"#c6e48b"],[484,50,1,"#c6e48b"],[484,60,6,"#7bc96f"],
    [495,0,2,"#c6e48b"],[495,10,5,"#7bc96f"],[495,20,4,"#7bc96f"],[495,30,2,"#c6e48b"],[495,40,1,"#c6e48b"],[495,50,1,"#c6e48b"],[495,60,3,"#c6e48b"],
    [506,0,4,"#7bc96f"],[506,10,2,"#c6e48b"],[506,20,3,"#c6e48b"],[506,30,1,"#c6e48b"],[506,40,2,"#c6e48b"],[506,50,3,"#c6e48b"],[506,60,3,"#c6e48b"],
    [517,0,1,"#c6e48b"],[517,10,3,"#c6e48b"],[517,20,4,"#7bc96f"],[517,30,1,"#c6e48b"],[517,40,3,"#c6e48b"],[517,50,3,"#c6e48b"],[517,60,3,"#c6e48b"],
    [528,0,3,"#c6e48b"],[528,10,2,"#c6e48b"],[528,20,2,"#c6e48b"],[528,30,3,"#c6e48b"],[528,40,1,"#c6e48b"],[528,50,2,"#c6e48b"],[528,60,1,"#c6e48b"],
    [539,0,1,"#c6e48b"],[539,10,1,"#c6e48b"],[539,20,1,"#c6e48b"],[539,30,3,"#c6e48b"],[539,40,1,"#c6e48b"],[539,50,2,"#c6e48b"],[539,60,2,"#c6e48b"],
    [550,0,1,"#c6e48b"],[550,10,3,"#c6e48b"],[550,20,7,"#239a3b"],[550,30,6,"#7bc96f"],[550,40,1,"#c6e48b"],[550,50,2,"#c6e48b"],[550,60,1,"#c6e48b"],
    [561,0,13,"#196127"],[561,10,1,"#c6e48b"],[561,20,1,"#c6e48b"],[561,30,1,"#c6e48b"],[561,40,2,"#c6e48b"],[561,50,1,"#c6e48b"],[561,60,1,"#c6e48b"],
    [572,0,0,"#ebedf0"],[572,10,1,"#c6e48b"],[572,20,1,"#c6e48b"],[572,30,2,"#c6e48b"],[572,40,0,"#ebedf0"],
    ]
  */
    data.forEach(arr => maxContri = maxContri < arr[2] ? arr[2] : maxContri)
    // console.log(`Max Contri is ${maxContri}`)
    
    makeGraph();
    
    
    
    













})
// 16:9
/**
 * W    16
 * / =  /
 * H    9
*/
function makeGraph(){
    const W = document.querySelector(".metry-container").clientWidth,H = Math.floor((W*9)/16)
    
    console.log(data)
    
    
    
    
    let angX = 0.5, angY = -0.89, angZ = 0, angStep = 0.1
    // let trnX = -210, trnY = 60, trnZ = 40, trnStep = 10
    let trnX = -240, trnY = 100, trnZ = 40, trnStep = 10
    var scene = new THREE.Scene()
    scene.background = new THREE.Color( 0xffffff)
    var camera = new THREE.PerspectiveCamera(45, W / H, 1, 10000)
    var renderer = new THREE.WebGLRenderer({antialias: true})
    console.log(renderer)
    renderer.setSize(W,H)
    // renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    graphdiv.appendChild(renderer.domElement)
    // console.log(data)
    var light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );
    var geometry
    // new THREE.BoxGeometry(50, 200, 50, 10, 10, 10)
    var material
    // new THREE.MeshLambertMaterial({color: 0xfffff})
    var cube
    //new THREE.Mesh(geometry, material)
    var cubes = new THREE.Object3D()
    scene.add(cubes)
    scene.add(new THREE.AmbientLight(0x212223));
    const NUM = 10
    var posX = -200, posY = 0, posZ = -100
    var maxHeight = 30, minHeight = 5, cubeHeight = 0, cubeWidth = 0
    for(let i = 0; i < data.length; i++){
      cubeHeight = minHeight
      if(maxContri > 0)
        cubeHeight += data[i][2] * (maxHeight / maxContri)
      
      cubeWidth=data[i][4]+1
      console.log(cubeWidth)
      geometry = new THREE.BoxGeometry(cubeWidth, cubeHeight, cubeWidth)
      material = new THREE.MeshLambertMaterial({color: data[i][3]})
      cube = new THREE.Mesh(geometry, material)
      cube.castShadow = true
      cube.receiveShadow = true
      // cube.position.set(posX, posY, posZ)
      cube.position.set(posX + data[i][0], posY + (cubeHeight / 2), posZ + (data[i][1]))
      cubes.add(cube)
    }
    // console.log(cubes)
    var dirLight = new THREE.DirectionalLight(0xffffff, 1.2)
    dirLight.position.set(-40, 12, -10)
    dirLight.castShadow = true
    scene.add(dirLight)
    camera.position.z = 500
    scene.add(camera)
    rend = () => {
      cubes.translateX = trnX
      cubes.translateY = trnY
      cubes.translateZ = trnZ
      cubes.position.set(trnX, trnY, trnZ)
      cubes.rotation.x = angX
      cubes.rotation.y = angY
      cubes.rotation.z = angZ
      renderer.render(scene, camera)
    }
    var x = requestAnimationFrame(rend)


    window.addEventListener('keydown', (ev) => {
      console.log(ev.keyCode)
      switch(ev.keyCode){
        case 37: //left
          angY -= angStep
          break
        case 38: //up
          angX += angStep
          break
        case 39: //right
          angY += angStep
          break
        case 40: //bottom
          angX -= angStep
          break
        case 222: //Z up
          angZ -= angStep
          break
        case 191: //Z up
          angZ += angStep
          break
        case 87: //W
          trnY += trnStep
          break
        case 83: //S
          trnY -= trnStep
          break
        case 65: //A
          trnX -= trnStep
          break
        case 68: //D
          trnX += trnStep
          break
        case 82: //R
          trnZ += trnStep
          break
        case 70: //F
          trnZ -= trnStep
          break
        default:
          return
      }
      console.log(`${angX}  ${angY}  ${angZ} ||| ${trnX} ${trnY} ${trnZ}`)
      requestAnimationFrame(rend)
    })


}