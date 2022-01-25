const apiKey = 'sk.eyJ1IjoibmVvYW5nZWwiLCJhIjoiY2t2ZHpya2xvMWR6YjMxcGduNzMzcnd1YiJ9.PcaLCEul1HAaq6c63mj13A';
//default access token: pk.eyJ1IjoibmVvYW5nZWxpY2EiLCJhIjoiY2t1eWN2bzc3NzIycDJ2bnppemUwcHM5MiJ9.2sM0T2Ab5ebbGXo9DZ-0ag 
//CSU MAP access token: sk.eyJ1IjoibmVvYW5nZWwiLCJhIjoiY2t2ZHpya2xvMWR6YjMxcGduNzMzcnd1YiJ9.PcaLCEul1HAaq6c63mj13A
const mymap = L.map('map').setView([8.957458576952163, 125.59690422498869], 19);
//8.957458576952163, 125.59690422498869
//'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}' -- satellite
//'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' --prev tile
L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
   /* id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey*/
    zoomControl: false,
    attribution: 'Map data &copy; OpenStreetMap contributors'
}).addTo(mymap);

mymap.zoomControl.setPosition('bottomright');






/*
    New Science Building
*/


const marker =  L.marker([8.958023, 125.597351]).addTo(mymap);


marker.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);
});

//add popmessage
let template = `
    <div class="popup">
         <h3> New Science Building</h3>
         <img src="images/nsb.jpg"/>
         </a>
    </div>
`
let label = `
    <div class="label">
    <h4> New Science Building </h4>

`
marker .bindPopup(template);
//marker .bindTooltip(<a href="https://www.facebook.com"></a>);




let locationName= `
    <div class = "label">
        <h4>New Science Building</h4>
    </div>

`

const polygon = L.polygon([
    [8.958288, 125.596847],
    [8.958450, 125.597719],
    [8.957726, 125.597888],
    [8.957576, 125.596966],

],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100
});
//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});

/* 
    New Administration Building
*/

const marker1 = L.marker([8.957272, 125.597445]).addTo(mymap);

marker1.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//add popmessage
let template1 = `
    <div class = "popup">
        <h3> New Administration Building</h3>
        <img src="images/newadmin.jpg"/>
        </a>
    </div>
`
marker1.bindPopup(template1);

/* labeling location

    New Administration Building

*/


let locationName1= `
    <div class = "label">
        <h4>New Administration Building</h4>
    </div>

`

const polygon1 = L.polygon([
   [8.957444, 125.597182],
   [8.957009, 125.597241],
   [8.957070, 125.597769],
   [8.957505, 125.597697],
   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName1,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Old Administration Building
*/

const marker2 = L.marker([8.956845, 125.597442]).addTo(mymap);

marker2.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//add popmessage
let template2 = `
    <div class = "popup">
        <h3> Old Administration Building</h3>
        <img src="images/oldadmin.jpg"/>
        </a>
    </div>
`
marker2.bindPopup(template2);

/* labeling location

    Old Administration Building

*/


let locationName2= `
    <div class = "label">
        <h4>Old Administration Building</h4>
    </div>

`

const polygon2 = L.polygon([
   [8.956979, 125.597094],
   [8.956762, 125.597144],
   [8.956764, 125.597252],
   [8.956483, 125.597298],
   [8.956496, 125.597451],
   [8.956618, 125.597432],
   [8.956706, 125.597486],
   [8.956758, 125.597711],
   [8.957063, 125.597639],
   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName2,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    New CAS Building
*/

const marker3 = L.marker([8.956140, 125.597750]).addTo(mymap);

marker3.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template3 = `
    <div class = "popup">
        <h3>New CAS Building </h3>
        <img src="images/newcasbuilding.jpg"/>
        </a>
    </div>
`
marker3.bindPopup(template3);

/* labeling location

    New CAS Building

*/


let locationName3= `
    <div class = "label">
        <h4>New CAS Building</h4>
    </div>

`

const polygon3 = L.polygon([
   [8.956345, 125.597418],
   [8.956451, 125.597960],
   [8.955884, 125.598094],
   [8.955805, 125.597523],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName3,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Mechatronics Building
*/

const marker4 = L.marker([8.955405, 125.597933]).addTo(mymap);

marker4.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template4 = `
    <div class = "popup">
        <h3> Mechatronics Building</h3>
        <img src="images/mecha.jpg"/>
        </a>
    </div>
        
`
marker4.bindPopup(template4);

/* labeling location

    Mechatronics Building

*/


let locationName4= `
    <div class = "label">
        <h4>Mechatronics Building</h4>
    </div>

`

const polygon4 = L.polygon([
   [8.955516, 125.597593],
   [8.955147, 125.597677],
   [8.955285, 125.598281],
   [8.955622, 125.598196],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName4,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CEIT Complex
*/

const marker5 = L.marker([8.955020, 125.597998]).addTo(mymap);

marker5.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template5 = `
    <div class = "popup">
        <h3>CEIT Complex</h3>
        <img src="images/ceit.jpg"/>
        </a>
    </div>
`
marker5.bindPopup(template5);

/* labeling location

    CEIT Complex

*/


let locationName5= `
    <div class = "label">
        <h4>CEIT Complex</h4>
    </div>

`

const polygon5 = L.polygon([
   [8.955103, 125.597674],
   [8.954792, 125.597772],
   [8.954902, 125.598326],
   [8.955211, 125.598255],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName5,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100
});
/*
//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Old ROTC Building
*/

const marker6 = L.marker([8.954970, 125.597589]).addTo(mymap);

marker6.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template6 = `
    <div class = "popup">
        <h3>Old ROTC Building</h3>
        <img src="images/noimage.png"/>
        </a>
    </div>
        
`
marker6.bindPopup(template6);

/* labeling location

    Old ROTC Building

*/


let locationName6= `
    <div class = "label">
        <h4>Old ROTC Building</h4>
    </div>

`

const polygon6 = L.polygon([
   [8.954987, 125.597510],
   [8.954892, 125.597548],
   [8.954908, 125.597654],
   [8.954979, 125.597624],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName6,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100
});

//marker6 .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Annex 2 Building
*/

const marker7 = L.marker([8.954520, 125.598120]).addTo(mymap);

marker7.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template7 = `
    <div class = "popup">
        <h3>Annex 2 Building</h3>
        <img src="images/annex 2.jpg"/>
        </a>
    </div>
`
marker7.bindPopup(template7);

/* labeling location

    Annex 2 Building

*/


let locationName7= `
    <div class = "label">
        <h4>Annex 2 Building</h4>
    </div>

`

const polygon7 = L.polygon([
   [8.954653, 125.598249],
   [8.954383, 125.598300],
   [8.954324, 125.597983],
   [8.954592, 125.597929],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName7,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    DOST Building
*/

const marker8 = L.marker([8.953197, 125.598182]).addTo(mymap);

marker8.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template8 = `
    <div class = "popup">
        <h3>DOST Building</h3>
        <img src="images/dost.jpg"/>
        </a>
    </div>
`
marker8.bindPopup(template8);

/* labeling location

    DOST Building

*/


let locationName8= `
    <div class = "label">
        <h4>DOST Building</h4>
    </div>

`

const polygon8 = L.polygon([
   [8.953247, 125.597954],
   [8.953311, 125.598383],
   [8.953141, 125.598401],  
   [8.953040, 125.597970], 
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName8,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Rooting Recovery
*/

const marker9 = L.marker([8.952845, 125.598320]).addTo(mymap);

marker9.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template9 = `
    <div class = "popup">
        <h3>Rooting Recovery</h3>
        <img src="images/noimage.png"/>
        </a>
    </div>
        
`
marker9.bindPopup(template9);

/* labeling location

    Rooting Recovery

*/


let locationName9= `
    <div class = "label1">
        <h4>Rooting Recovery</h4>
    </div>

`

const polygon9 = L.polygon([
   [8.952932, 125.598179],
   [8.952980, 125.598412],
   [8.952731, 125.598460],
   [8.952675, 125.598205],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName9,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Solar Dyer
*/

const marker10 = L.marker([8.952700, 125.597950]).addTo(mymap);

marker10.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template10 = `
    <div class = "popup">
        <h3>Solar Dyer</h3>
        <img src="images/noimage.png"/>
        </a>
    </div>        
`
marker10.bindPopup(template10);

/* labeling location

    Solar Dyer

*/


let locationName10= `
    <div class = "label1">
        <h4>Solar Dyer</h4>
    </div>

`

const polygon10 = L.polygon([
   [8.952745, 125.597798],
   [8.952567, 125.597819],
   [8.952620, 125.598133],
   [8.952792, 125.598109],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName10,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Micoriza Office
*/

const marker11 = L.marker([8.952620, 125.597485]).addTo(mymap);

marker11.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template11 = `
    <div class = "popup">
        <h3>Micoriza Office</h3>
        <img src="images/noimage.png"/>
        </a>
    </div>        
`
marker11.bindPopup(template11);

/* labeling location

    Micoriza Office

*/


let locationName11= `
    <div class = "label">
        <h4>Micoriza Office</h4>
    </div>

`

const polygon11 = L.polygon([
   [8.952660, 125.597353],
   [8.952692, 125.597551],
   [8.952541, 125.597581],
   [8.952512, 125.597372],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName11,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Micoriza Green House
*/

const marker12 = L.marker([8.952460, 125.596740]).addTo(mymap);

marker12.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template12 = `
    <div class = "popup">
        <h3>Micoriza Green House</h3>
        <img src="images/noimage.png"/>
        </a>
        </div>        
`
marker12.bindPopup(template12);

/* labeling location

    Micoriza Green House

*/


let locationName12= `
    <div class = "label1">
        <h4>Micoriza Green House</h4>
    </div>

`

const polygon12 = L.polygon([
   [8.952475, 125.596323],
   [8.952303, 125.596344],
   [8.952390, 125.597090],
   [8.952591, 125.597063],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName12,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Gent's Dormitory
*/

const marker13 = L.marker([8.952950, 125.597380]).addTo(mymap);

marker13.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template13 = `
    <div class = "popup">
        <h3>New Gent's Dormitory</h3>
        <img src="images/Gent_s Dormitory.jpg"/>
        </a>
    </div>        
`
marker13.bindPopup(template13);

/* labeling location

    New Gent's Dormitory

*/


let locationName13= `
    <div class = "label">
        <h4>New Gent's Dormitory</h4>
    </div>

`

const polygon13 = L.polygon([
   [8.952972, 125.597178],
   [8.952842, 125.597211],
   [8.952889, 125.597542],
   [8.953027, 125.597476],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName13,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    COFES
*/

const marker14 = L.marker([8.953245, 125.597335]).addTo(mymap);

marker14.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template14 = `
    <div class = "popup">
        <h3>COFES</h3>
        <img src="images/COFES.jpg"/>
        </a>
    </div>        
`
marker14.bindPopup(template14);

/* labeling location

    COFES

*/


let locationName14= `
    <div class = "label">
        <h4>COFES</h4>
    </div>

`

const polygon14 = L.polygon([
   [8.953307, 125.597152],
   [8.953091, 125.597184],
   [8.953147, 125.597502],
   [8.953351, 125.597458],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName14,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    OATC
*/

const marker15 = L.marker([8.953690, 125.597154]).addTo(mymap);

marker15.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template15 = `
    <div class = "popup">
        <h3>OATC</h3>
        <img src="images/OATC.jpg"/>
        </a>
    </div>        
`
marker15.bindPopup(template15);

/* labeling location

    OATC

*/


let locationName15= `
    <div class = "label">
        <h4>OATC</h4>
    </div>

`

const polygon15 = L.polygon([
   [8.953810, 125.597007],
   [8.953503, 125.597045],
   [8.953542, 125.597299],
   [8.953842, 125.597272],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName15,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Native Chicken House
*/

const marker16 = L.marker([8.954210, 125.596660]).addTo(mymap);

marker16.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template16 = `
    <div class = "popup">
        <h3>Native Chicken House</h3>
        <img src="images/Native Chicken House.jpg"/>
        </a>
    </div>        
`
marker16.bindPopup(template16);

/* labeling location

    Native Chicken House

*/


let locationName16= `
    <div class = "label1">
        <h4>Native Chicken House</h4>
    </div>

`

const polygon16 = L.polygon([
   [8.954287, 125.596516],
   [8.954057, 125.596581],
   [8.954089, 125.596804],
   [8.954314, 125.596753],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName16,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Pigpens
*/

const marker17 = L.marker([8.954385, 125.596120]).addTo(mymap);

marker17.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template17 = `
    <div class = "popup">
        <h3>Pigpens</h3>
        <img src="images/Pigpens.jpg"/>
        </a>
    </div>        
`
marker17.bindPopup(template17);

/* labeling location

    Pigpens

*/


let locationName17= `
    <div class = "label1">
        <h4>Pigpens</h4>
    </div>

`

const polygon17 = L.polygon([
   [8.954462, 125.595994],
   [8.954502, 125.596198],
   [8.954271, 125.596238],
   [8.954247, 125.596023],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName17,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Old Farm Mechanization Center
*/

const marker18 = L.marker([8.954773, 125.597244]).addTo(mymap);

marker18.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template18 = `
    <div class = "popup">
        <h3>Old Farm Mechanization Center</h3>
        <img src="images/oldfarm.jpg"/>
        </a>
    </div>
        
`
marker18.bindPopup(template18);

/* labeling location

    Old Farm Mechanization Center

*/


let locationName18= `
    <div class = "label1">
        <h4>Old Farm Mechanization Center</h4>
    </div>

`

const polygon18 = L.polygon([
   [8.954888, 125.597319],
   [8.954631, 125.597365],
   [8.954620, 125.597303],
   [8.954819, 125.597247],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName18,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Ecolodge Park Building
*/

const marker19 = L.marker([8.955055, 125.596995]).addTo(mymap);

marker19.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template19 = `
    <div class = "popup">
        <h3>Ecolodge Park Building</h3>
        <img src="images/Ecolodge Park Building.jpg"/>
        </a>
    </div>        
`
marker19.bindPopup(template19);

/* labeling location

    Ecolodge Park Building

*/


let locationName19= `
    <div class = "label">
        <h4>Ecolodge Park Building</h4>
    </div>

`

const polygon19 = L.polygon([
   [8.955077, 125.596925],
   [8.954979, 125.596943],
   [8.954994, 125.597049],
   [8.955097, 125.597031],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName19,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Ecolodge
*/

const marker20 = L.marker([8.955165, 125.596872]).addTo(mymap);

marker20.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template20 = `
    <div class = "popup">
        <h3>Ecolodge</h3>
        <img src="images/Ecolodge.jpg"/>
        </a>
    </div>
`
marker20.bindPopup(template20);

/* labeling location

    Ecolodge

*/


let locationName20= `
    <div class = "label">
        <h4>Ecolodge</h4>
    </div>

`

const polygon20 = L.polygon([
   [8.955224, 125.596917],
   [8.955083, 125.596936],
   [8.955067, 125.596823],
   [8.955205, 125.596795],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName20,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Church
*/

const marker21 = L.marker([8.955270, 125.596715]).addTo(mymap);

marker21.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template21 = `
    <div class = "popup">
        <h3>Church</h3>
        <img src="images/Church.jpg"/>
        </a>
    </div>
        
`
marker21.bindPopup(template21);

/* labeling location

    Church

*/


let locationName21= `
    <div class = "label">
        <h4>Church</h4>
    </div>

`

const polygon21 = L.polygon([
   [8.955319, 125.596762],
   [8.955189, 125.596769],
   [8.955188, 125.596675],
   [8.955303, 125.596641],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName21,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Gent's Dormitory
*/

const marker22 = L.marker([8.955095, 125.595720]).addTo(mymap);

marker22.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template22 = `
    <div class = "popup">
        <h3>Old Gent's Dormitory</h3>
        <img src="images/gents.jpg"/>
        </a>
    </div>        
`
marker22.bindPopup(template22);



/* labeling location

    Gent's Dormitory

*/


let locationName22= `
    <div class = "label">
        <h4>Old Gent's Dormitory</h4>
    </div>

`

const polygon22 = L.polygon([
   [8.955113, 125.595542],
   [8.954981, 125.595574],
   [8.955047, 125.595891],
   [8.955169, 125.595864],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName22,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Basketball/Volleyball Court
*/

const marker23 = L.marker([8.955530, 125.595672]).addTo(mymap);

marker23.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template23 = `
    <div class = "popup">
        <h3>Basketball/Volleyball Court</h3>
        <img src="images/basketball.jpeg"/>
        </a>
    </div>        
`
marker23.bindPopup(template23);

/* labeling location

    Basketball/Volleyball Court

*/


let locationName23= `
    <div class = "label1">
        <h4>Basketball/Volleyball Court</h4>
    </div>

`

const polygon23 = L.polygon([
   [8.955679, 125.595452],
   [8.955274, 125.595508],
   [8.955330, 125.595870],
   [8.955746, 125.595816],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName23,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Physical Fitness Office
*/

const marker24 = L.marker([8.955585, 125.595975]).addTo(mymap);

marker24.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template24 = `
    <div class = "popup">
        <h3>Physical Fitness Office</h3>
        <img src="images/Physical Fitness Office.jpg"/>
        </a>
    </div>        
`
marker24.bindPopup(template24);

/* labeling location

    Physical Fitness Office

*/


let locationName24= `
    <div class = "label">
        <h4>Physical Fitness Office</h4>
    </div>

`

const polygon24 = L.polygon([
   [8.955613, 125.595900],
   [8.955499, 125.595927],
   [8.955523, 125.596034],
   [8.955642, 125.596010],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName24,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CAS Restroom
*/

const marker25 = L.marker([8.955530, 125.596282]).addTo(mymap);

marker25.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template25 = `
    <div class = "popup">
        <h3>CAS Restroom</h3>
        <img src="images/CAS Restroom.jpg"/>
        </a>
    </div>
`
marker25.bindPopup(template25);

/* labeling location

    CAS Restroom

*/


let locationName25= `
    <div class = "label1">
        <h4>CAS Restroom</h4>
    </div>

`

const polygon25 = L.polygon([
   [8.955580, 125.596364],
   [8.955474, 125.596372],
   [8.955448, 125.596265],
   [8.955549, 125.596241],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName25,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CAS Building
*/

const marker26 = L.marker([8.955600, 125.596645]).addTo(mymap);

marker26.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template26 = `
    <div class = "popup">
        <h3>CAS Building</h3>
        <img src="images/CAS Building.jpg"/>
        </a>
    </div>
`
marker26.bindPopup(template26);

/* labeling location

    CAS Building

*/


let locationName26= `
    <div class = "label">
        <h4>CAS Building</h4>
    </div>

`

const polygon26 = L.polygon([
   [8.955703, 125.596875],
   [8.955567, 125.596912],
   [8.955475, 125.596403],
   [8.955581, 125.596371],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName26,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Cafeteria
*/

const marker27 = L.marker([8.955680, 125.596990]).addTo(mymap);

marker27.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template27 = `
    <div class = "popup">
        <h3>Cafeteria</h3>
        <img src="images/Cafeteria.jpg"/>
        </a>
    </div>        
`
marker27.bindPopup(template27);

/* labeling location

    Cafeteria

*/


let locationName27= `
    <div class = "label">
        <h4>Cafeteria</h4>
    </div>

`

const polygon27 = L.polygon([
   [8.955734, 125.596879],
   [8.955767, 125.597044],
   [8.955598, 125.597092],
   [8.955554, 125.596926],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName27,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    University Gymnasium
*/

const marker28 = L.marker([8.956000, 125.595635]).addTo(mymap);

marker28.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template28 = `
    <div class = "popup">
        <h3>University Gymnasium</h3>
        <img src="images/University Gymnasium.jpg"/>
        </a>
    </div>
`
marker28.bindPopup(template28);

/* labeling location

    University Gymnasium

*/


let locationName28= `
    <div class = "label1">
        <h4>University Gymnasium</h4>
    </div>

`

const polygon28 = L.polygon([
   [8.956099, 125.595360],
   [8.955783, 125.595418],
   [8.955900, 125.595872],
   [8.956175, 125.595793],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName28,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Annex 3
*/

const marker29 = L.marker([8.956445, 125.595430]).addTo(mymap);

marker29.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template29 = `
    <div class = "popup">
        <h3>Annex 3</h3>
        <img src="images/Annex 3.jpg"/>
        </a>
    </div>        
`
marker29.bindPopup(template29);

/* labeling location

    Annex 3

*/


let locationName29= `
    <div class = "label">
        <h4>Annex 3</h4>
    </div>

`

const polygon29 = L.polygon([
   [8.956719, 125.595414],
   [8.956165, 125.595514],
   [8.956147, 125.595410],
   [8.956695, 125.595312],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName29,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    ORGMS Office
*/

const marker30 = L.marker([8.956803, 125.595640]).addTo(mymap);

marker30.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template30 = `
    <div class = "popup">
        <h3>ORGMS Office</h3>
        <img src="images/ORGMS Office.jpg"/>
        </a>
    </div>        
`
marker30.bindPopup(template30);

/* labeling location

    ORGMS Office

*/


let locationName30= `
    <div class = "label">
        <h4>ORGMS Office</h4>
    </div>

`

const polygon30 = L.polygon([
   [8.956846, 125.595713],
   [8.956752, 125.595731],
   [8.956723, 125.595538],
   [8.956819, 125.595517],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName30,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});
//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});

/*
    Bookstore
*/

const marker31 = L.marker([8.956916, 125.595605]).addTo(mymap);

marker31.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template31 = `
    <div class = "popup">
        <h3>Bookstore</h3>
        <img src="images/Bookstore.jpg"/>
        </a>
    </div>
`
marker31.bindPopup(template31);

/* labeling location

    Bookstore

*/


let locationName31= `
    <div class = "label">
        <h4>Bookstore</h4>
    </div>

`

const polygon31 = L.polygon([
   [8.956975, 125.595718],
   [8.956874, 125.595738],
   [8.956827, 125.595471],
   [8.956929, 125.595451],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName31,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Arcade


const marker32 = L.marker([8.957427, 125.595330]).addTo(mymap);

//popmessage
let template32 = `
    <div class = "popup">
        <h3>Arcade</h3>
        <a href="https://facebook.com/">
        <img src="Arcade.jpg"/>
        </a>
    </div>        
`
marker32.bindPopup(template32);

/* labeling location

    Arcade




let locationName32= `
    <div class = "label">
        <h4>Arcade</h4>
    </div>

`

const polygon32 = L.polygon([
   [8.957639, 125.595096],
   [8.957692, 125.595454],
   [8.954721, 125.597554],
   [8.955142, 125.597479],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName32,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});
*/

/*
    Oval
*/

const marker33 = L.marker([8.956525, 125.596460]).addTo(mymap);

marker33.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template33 = `
    <div class = "popup">
        <h3>Oval</h3>
        <img src="images/Oval.jpg"/>
        </a>
    </div>        
`
marker33.bindPopup(template33);

/* labeling location

    Oval

*/


let locationName33= `
    <div class = "label">
        <h4>Oval</h4>
    </div>

`

const polygon33 = L.polygon([
   [8.957156, 125.595964],
   [8.957269, 125.596685],
   [8.955931, 125.596978],
   [8.955732, 125.596230],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName33,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    New State of Art Library
*/

const marker34 = L.marker([8.957890, 125.596325]).addTo(mymap);

marker34.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template34 = `
    <div class = "popup">
        <h3>New State of Art Library</h3>
        <img src="images/New State of Art Library.jpg"/>
        </a>
    </div>        
`
marker34.bindPopup(template34);

/* labeling location

    New State of Art Library

*/


let locationName34= `
    <div class = "label">
        <h4>New State of Art Library</h4>
    </div>

`

const polygon34 = L.polygon([
   [8.958312, 125.596401],
   [8.958349, 125.596597],
   [8.958238, 125.596602],
   [8.958068, 125.596589],  
   [8.957914, 125.596533],
   [8.957792, 125.596443],
   [8.957707, 125.596355],
   [8.957619, 125.596271], 
   [8.957568, 125.596166],
   [8.957515, 125.596005],
   [8.957500, 125.595869],
   [8.957705, 125.595866],
   [8.957708, 125.595984],
   [8.957742, 125.596086],
   [8.957784, 125.596166],
   [8.957858, 125.596246],
   [8.957961, 125.596326],
   [8.958070, 125.596385],
   [8.958184, 125.596401],

],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName34,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Harrison Statue
*/

const marker35 = L.marker([8.958519, 125.596730]).addTo(mymap);

marker35.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template35 = `
    <div class = "popup">
        <h3>Harrison Statue</h3>
        <img src="images/Harrison Statue.jpg"/>
        </a>
    </div>
`
marker35.bindPopup(template35);

/* labeling location

    Harrison Statue

*/


let locationName35= `
    <div class = "label1">
        <h4>Harrison Statue</h4>
    </div>

`

const polygon35 = L.polygon([
   [8.958518, 125.596694],
   [8.958523, 125.596725],
   [8.958479, 125.596734],
   [8.958473, 125.596702],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName35,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CAS Canteen
*/

const marker36 = L.marker([8.958500, 125.596935]).addTo(mymap);

marker36.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template36 = `
    <div class = "popup">
        <h3>CAS Canteen</h3>
        <img src="images/CAS Canteen.jpg"/>
        </a>
    </div>
`
marker36.bindPopup(template36);

/* labeling location

    CAS Canteen

*/


let locationName36= `
    <div class = "label1">
        <h4>CAS Canteen</h4>
    </div>

`

const polygon36 = L.polygon([
   [8.958514, 125.596885],
   [8.958518, 125.596961],
   [8.958469, 125.596967],
   [8.958457, 125.596886],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName36,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CAS Student Center
*/

const marker37 = L.marker([8.958540, 125.5970]).addTo(mymap);

marker37.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template37 = `
    <div class = "popup">
        <h3>CAS Student Center</h3>
        <img src="images/CAS Student Center.jpg"/>
        </a>
    </div>        
`
marker37.bindPopup(template37);

/* labeling location

    CAS Student Center

*/


let locationName37= `
    <div class = "label1">
        <h4>CAS Student Center</h4>
    </div>

`

const polygon37 = L.polygon([
   [8.958537, 125.596981],
   [8.958502, 125.596984],
   [8.958509, 125.597038],
   [8.958547, 125.597033],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName37,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CAS Covered Court
*/

const marker38 = L.marker([8.958590, 125.597220]).addTo(mymap);

marker38.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template38 = `
    <div class = "popup">
        <h3>CAS Covered Court</h3>
        <img src="images/CAS Covered Court.jpg"/>
        </a>
    </div>        
`
marker38.bindPopup(template38);

/* labeling location

    CAS Covered Court

*/


let locationName38= `
    <div class = "label1">
        <h4>CAS Covered Court</h4>
    </div>

`

const polygon38 = L.polygon([
   [8.958605, 125.597263],
   [8.958564, 125.597270],
   [8.958548, 125.597173],
   [8.958597, 125.597169],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName38,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Executive House
*/

const marker39 = L.marker([8.958280, 125.598050]).addTo(mymap);

marker39.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template39 = `
    <div class = "popup">
        <h3>Executive House</h3>
        <img src="images/Executive House.jpg"/>
        </a>
    </div>
`
marker39.bindPopup(template39);

/* labeling location

    Executive House

*/


let locationName39= `
    <div class = "label1">
        <h4> Executive House</h4>
    </div>

`

const polygon39 = L.polygon([
   [8.958296, 125.597936],
   [8.958320, 125.598108],
   [8.958230, 125.598116],
   [8.958198, 125.597958],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName39,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Bio Diagnostic Laboratory
*/

const marker40 = L.marker([8.958085, 125.598056]).addTo(mymap);

marker40.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template40 = `
    <div class = "popup">
        <h3>Bio Diagnostic Laboratory</h3>
        <img src="images/Bio Diagnostic Laboratory.jpg"/>
        
`
marker40.bindPopup(template40);

/* labeling location

    Bio Diagnostic Laboratory

*/


let locationName40= `
    <div class = "label1">
        <h4>Bio Diagnostic Laboratory</h4>
    </div>

`

const polygon40 = L.polygon([
   [8.958100, 125.597984],
   [8.958129, 125.598121],
   [8.958036, 125.598132],
   [8.958003, 125.597999],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName40,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Power House
*/

const marker41 = L.marker([8.957525, 125.597617]).addTo(mymap);

marker41.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template41 = `
    <div class = "popup">
        <h3>Power House</h3>
        <img src="images/powerhouse.png"/>
        </a>
    </div>
`
marker41.bindPopup(template41);

/* labeling location

    Power House

*/


let locationName41= `
    <div class = "label1">
        <h4>Power House</h4>
    </div>

`

const polygon41 = L.polygon([
   [8.957522, 125.597588],
   [8.957472, 125.597596],
   [8.957483, 125.597642],
   [8.957536, 125.597641],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName41,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
//Ochoa Statue

const marker42 = L.marker([8.958262, 125.598020]).addTo(mymap);

//popmessage
let template42 = `
    <div class = "popup">
        <h3>Ochoa Statue</h3>
        <img src="mecha.jpg"/>
        
`
marker42.bindPopup(template42);

*/

/*
    Food Technology Building
*/

const marker43 = L.marker([8.958910, 125.596360]).addTo(mymap);

marker43.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template43 = `
    <div class = "popup">
        <h3>Food Technology Building</h3>
        <img src="images/Food Technology Building.jpg"/>
        </a>
    </div>        
`
marker43.bindPopup(template43);

/* labeling location

    Food Technology Building

*/


let locationName43= `
    <div class = "label">
        <h4>Food Technology Building</h4>
    </div>

`

const polygon43 = L.polygon([
   [8.958937, 125.596227],
   [8.958822, 125.596246],
   [8.958854, 125.596415],
   [8.958969, 125.596399],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName43,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Dairy
*/

const marker44 = L.marker([8.959185, 125.596400]).addTo(mymap);

marker44.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template44 = `
    <div class = "popup">
        <h3>Dairy</h3>
        <img src="images/Dairy.jpg"/>
        </a>
    </div>        
`
marker44.bindPopup(template44);

/* labeling location

    Dairy

*/


let locationName44= `
    <div class = "label">
        <h4>Dairy</h4>
    </div>

`

const polygon44 = L.polygon([
   [8.959221, 125.596432],
   [8.959132, 125.596446],
   [8.959117, 125.596367],
   [8.959205, 125.596351],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName44,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CEGS Student Center
*/

const marker45 = L.marker([8.958927, 125.596760]).addTo(mymap);

marker45.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template45 = `
    <div class = "popup">
        <h3>CEGS Student Center</h3>
        <img src="images/CEGS Student Center.jpg"/>
        </a>
    </div>
`
marker45.bindPopup(template45);

/* labeling location

    CEGS Student Center    

*/


let locationName45= `
    <div class = "label">
        <h4>CEGS Student Center</h4>
    </div>

`

const polygon45 = L.polygon([
    [8.958985, 125.596718],
    [8.959002, 125.596791],
    [8.958846, 125.596810],
    [8.958828, 125.596746],      
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName45,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CEGS Canteen
*/

const marker46 = L.marker([8.958988, 125.596935]).addTo(mymap);

marker46.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template46 = `
    <div class = "popup">
        <h3>CEGS Canteen</h3>
        <img src="images/CEGS Canteen.jpg"/>
        </a>
    </div>
`
marker46.bindPopup(template46);

/* labeling location

    CEGS Canteen    
*/



let locationName46= `
    <div class = "label1">
        <h4>CEGS Canteen</h4>
    </div>

`

const polygon46 = L.polygon([
   [8.958987, 125.596858],
   [8.958893, 125.596884],
   [8.958922, 125.597015],
   [8.959063, 125.597004],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName46,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CEGS Building
*/

const marker47 = L.marker([8.959120, 125.596750]).addTo(mymap);

marker47.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template47 = `
    <div class = "popup">
        <h3>CEGS Building</h3>
        <img src="images/CEGS Building.jpg"/>
        </a>
    </div>
`
marker47.bindPopup(template47);

/* labeling location

    CEGS Building   
*/


let locationName47= `
    <div class = "label">
        <h4>CEGS Building</h4>
    </div>

`

const polygon47 = L.polygon([
   [8.959204, 125.596678],
   [8.959220, 125.596775],
   [8.959013, 125.596818],
   [8.958991, 125.596716],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName47,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CEGS/CED Restroom
*/

const marker48 = L.marker([8.959165, 125.596881]).addTo(mymap);

marker48.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template48 = `
    <div class = "popup">
        <h3>CEGS/CED Restroom</h3>
        <img src="images/noimage.png"/>
        </a>
    </div>        
`
marker48.bindPopup(template48);

/* labeling location

    CEGS/CED Restroom    

*/


let locationName48= `
    <div class = "label1">
        <h4>Restroom</h4>
    </div>

`

const polygon48 = L.polygon([
   [8.959206, 125.596911],
   [8.959115, 125.596935],
   [8.959103, 125.596836],
   [8.959191, 125.596823],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName48,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CED Student Center

*/

const marker49 = L.marker([8.959294, 125.596730]).addTo(mymap);

marker49.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template49 = `
    <div class = "popup">
        <h3>CED Student Center</h3>
        <img src="images/CED Student Center.jpg"/>
        </a>
    </div>        
`
marker49.bindPopup(template49);

/* labeling location

    CED Student Center   
*/


let locationName49= `
    <div class = "label">
        <h4>CED Student Center</h4>
    </div>

`

const polygon49 = L.polygon([
   [8.959335, 125.596790],
   [8.959243, 125.596804],
   [8.959221, 125.596659],
   [8.959309, 125.596638],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName49,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CED Building
*/

const marker50 = L.marker([8.959330, 125.597100]).addTo(mymap);

marker50.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template50 = `
    <div class = "popup">
        <h3>CED Building</h3>
        <img src="images/CED Building.jpg"/>
        </a>
    </div>        
`
marker50.bindPopup(template50);

/* labeling location

    CED Building 

*/


let locationName50= `
    <div class = "label">
        <h4>CED Building</h4>
    </div>

`

const polygon50 = L.polygon([
   [8.959319, 125.596802],
   [8.959209, 125.596822],
   [8.959310, 125.597403],
   [8.959426, 125.597381], 
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName50,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CED Canteen
*/

const marker51 = L.marker([8.959590, 125.597208]).addTo(mymap);

marker51.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template51 = `
    <div class = "popup">
        <h3>CED Canteen</h3>
        <img src="images/noimage.png"/>
        </a>
    </div>
`
marker51.bindPopup(template51);

/* labeling location

    CED Canteen

*/


let locationName51= `
    <div class = "label">
        <h4>CED Canteen</h4>
    </div>

`

const polygon51 = L.polygon([
   [8.959610, 125.597125],
   [8.959515, 125.597152],
   [8.959544, 125.597291],
   [8.959647, 125.597267],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName51,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CHED
*/

const marker52 = L.marker([8.959540, 125.597515]).addTo(mymap);

marker52.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template52 = `
    <div class = "popup">
        <h3>CHED</h3>
        <img src="images/CHED.jpg"/>
        </a>
    </div>        
`
marker52.bindPopup(template52);


/* labeling location

    CHED
*/



let locationName52= `
    <div class = "label">
        <h4>CHED</h4>
    </div>

`

const polygon52 = L.polygon([
   [8.959573, 125.597404],
   [8.959602, 125.597599],
   [8.959467, 125.597631],
   [8.959435, 125.597433],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName52,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Gasoline Station
*/

const marker53 = L.marker([8.959660, 125.597890]).addTo(mymap);

marker53.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template53 = `
    <div class = "popup">
        <h3>Gasoline Station</h3>
        <img src="images/gas.png"/>
        </a>
    </div>        
`
marker53.bindPopup(template53);


/* labeling location

    Gasoline Station
*/



let locationName53= `
    <div class = "label1">
        <h4>Gasoline Station</h4>
    </div>

`

const polygon53 = L.polygon([
   [8.959669, 125.597840],
   [8.959682, 125.597923],
   [8.959613, 125.597947],
   [8.959595, 125.597856],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName53,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});



/*
    Waiting Shed
*/

const marker54 = L.marker([8.959635, 125.596632]).addTo(mymap);

marker54.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template54 = `
    <div class = "popup">
        <h3>Waiting Shed</h3>
        <img src="images/shed.jpg"/>
        </a>
    </div>
`
marker54.bindPopup(template54);

/* labeling location

    Waiting Shed

*/


let locationName54 = `
    <div class = "label1">
        <h4>Waiting Shed</h4>
    </div>

`

const polygon54 = L.polygon([
   [8.959607, 125.596608],
   [8.959624, 125.596602],
   [8.959630, 125.596640],
   [8.959608, 125.596646],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName54,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Guard House
*/

const marker55 = L.marker([8.959463, 125.596440]).addTo(mymap);

marker55.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template55 = `
    <div class = "popup">
        <h3>Guard House</h3>
        <img src="images/Guard House.jpg"/>
        </a>
    </div>
`
marker55.bindPopup(template55);

/* labeling location

    Guard House

*/


let locationName55= `
    <div class = "label1">
        <h4>Guard House</h4>
    </div>

`

const polygon55 = L.polygon([
   [8.959484, 125.596412],
   [8.959489, 125.596463],
   [8.959408, 125.596478],
   [8.959398, 125.596432],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName55,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Over Pass
*/

const marker56 = L.marker([8.959609, 125.596077]).addTo(mymap);

marker56.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template56 = `
    <div class = "popup">
        <h3>Over Pass</h3>
        <img src="images/Over Pass.jpg"/>
        </a>
    </div>
`
marker56.bindPopup(template56);

/* labeling location

    Over Pass

*/


let locationName56= `
    <div class = "label1">
        <h4>Over Pass</h4>
    </div>

`

const polygon56 = L.polygon([
   [8.959697, 125.596076],
   [8.959493, 125.596109],
   [8.959499, 125.596143],
   [8.959703, 125.596103],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName56,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CAA Canteen
*/

const marker57 = L.marker([8.959135, 125.595940]).addTo(mymap);

marker57.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template57 = `
    <div class = "popup">
        <h3>CAA Canteen</h3>
        <img src="images/CAA Canteen.jpg"/>
        </a>
    </div>
        
`
marker57.bindPopup(template57);

/* labeling location

    CAA Canteen

*/


let locationName57= `
    <div class = "label1">
        <h4>CAA Canteen</h4>
    </div>

`

const polygon57 = L.polygon([
   [8.959150, 125.595868],
   [8.959157, 125.595969],
   [8.959095, 125.595969],
   [8.959081, 125.595877],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName57,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Food Innovation Center
*/

const marker58 = L.marker([8.958825, 125.595870]).addTo(mymap);

marker58.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template58 = `
    <div class = "popup">
        <h3>Food Innovation Center</h3>
        <img src="images/Food Innovation Center.jpg"/>
        </a>
    </div>        
`
marker58.bindPopup(template58);

/* labeling location

    Food Innovation Center

*/


let locationName58= `
    <div class = "label">
        <h4>Food Innovation Center</h4>
    </div>

`

const polygon58 = L.polygon([
   [8.958848, 125.595777],
   [8.958756, 125.595794],
   [8.958762, 125.595931],
   [8.958871, 125.595915],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName58,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CAA Building
*/

const marker59 = L.marker([8.959095, 125.595616]).addTo(mymap);

marker59.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template59 = `
    <div class = "popup">
        <h3>CAA Building</h3>
        <img src="images/CAA Building.jpg"/>
        </a>
    </div>
        
`
marker59.bindPopup(template59);

/* labeling location

    CAA Building

*/


let locationName59= `
    <div class = "label">
        <h4>CAA Building</h4>
    </div>

`

const polygon59 = L.polygon([
   [8.959084, 125.595515],
   [8.959048, 125.595577],
   [8.959070, 125.595656],
   [8.959121, 125.595658],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName59,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CAA Restroom
*/

const marker60 = L.marker([8.95900, 125.595710]).addTo(mymap);

marker60.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template60 = `
    <div class = "popup">
        <h3>CAA Restroom</h3>
        <img src="images/noimage.png"/>
        </a>
    </div>        
`
marker60.bindPopup(template60);

/* labeling location

    CAA Restroom

*/


let locationName60= `
    <div class = "label">
        <h4>CAA Restroom</h4>
    </div>

`

const polygon60 = L.polygon([
    [8.959003, 125.595626],
    [8.958958, 125.595635],
    [8.958977, 125.595729],
    [8.959016, 125.595723],  
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName60,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Agro-workshop/TESDA
*/

const marker61 = L.marker([8.958750, 125.595636]).addTo(mymap);

marker61.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template61 = `
    <div class = "popup">
        <h3>Agro-workshop/TESDA</h3>
        <img src="images/noimage.png"/>
        </a>
    </div>        
`
marker61.bindPopup(template61);

/* labeling location

    Agro-workshop/TESDA

*/


let locationName61= `
    <div class = "label">
        <h4>Agro-workshop/TESDA</h4>
    </div>

`

const polygon61 = L.polygon([
     [8.95878, 125.5956842],
     [8.95872, 125.5956975],
     [8.95869, 125.5955657],
     [8.95875, 125.5955543],
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName61,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    CAA Diagnostic Laboratory
*/

const marker62 = L.marker([8.958680, 125.595508]).addTo(mymap);

marker62.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template62 = `
    <div class = "popup">
        <h3>CAA Diagnostic Laboratory</h3>
        <img src="images/CAA Diagnostic Laboratory.jpg"/>
        </a>
    </div>
`
marker62.bindPopup(template62);

/* labeling location

    CAA Diagnostic Laboratory

*/


let locationName62= `
    <div class = "label">
        <h4>CAA Diagnostic Laboratory</h4>
    </div>

`

const polygon62 = L.polygon([
   [8.958670, 125.595465],
   [8.958634, 125.595469],
   [8.958646, 125.595572],
   [8.958694, 125.595559],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName62,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Tissue Culture Laboratory
*/

const marker63 = L.marker([8.958575, 125.595390]).addTo(mymap);

marker63.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template63 = `
    <div class = "popup">
        <h3>Tissue Culture Laboratory</h3>
        <img src="images/tissue.png"/>
        </a>
    </div>
`
marker63.bindPopup(template63);

/* labeling location

    Tissue Culture Laboratory

*/


let locationName63= `
    <div class = "label">
        <h4>Tissue Culture Laboratory</h4>
    </div>

`

const polygon63 = L.polygon([
   [8.958592, 125.595330],
   [8.958520, 125.595340],
   [8.958541, 125.595481],
   [8.958603, 125.595471],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName63,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Green House
*/

const marker64 = L.marker([8.958860, 125.595082]).addTo(mymap);

marker64.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template64 = `
    <div class = "popup">
        <h3>Green House</h3>
        <img src="images/Green House.jpg"/>
        </a>
    </div>
        
`
marker64.bindPopup(template64);

/* labeling location

    Green House
*/



let locationName64= `
    <div class = "label1">
        <h4>Green House</h4>
    </div>

`

const polygon64 = L.polygon([
   [8.959057, 125.595123],
   [8.959033, 125.594954],
   [8.958633, 125.595024],
   [8.958646, 125.595188],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName64,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});


/*
    Hardenning Area
*/

const marker65 = L.marker([8.958825, 125.594880]).addTo(mymap);

marker65.on("click",function(evt){

    var myIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        shadowSize: [41,41]

    });
    this.setIcon(myIcon);

});


//popmessage
let template65 = `
    <div class = "popup">
        <h3>Hardenning Area</h3>
        <img src="images/hardenning.jpg"/>
        </a>
    </div>        
`
marker65.bindPopup(template65);

/* labeling location

    Hardenning Area
*/



let locationName65= `
    <div class = "label1">
        <h4>Hardenning Area</h4>
    </div>

`

const polygon65 = L.polygon([
   [8.959052, 125.594767],
   [8.958978, 125.594928],
   [8.958628, 125.594997],
   [8.958596, 125.594817],   
],{
    radius: 20,
    color:'transparent',
    fillColor:'transparent',
    fillopacity: 0

}).addTo(mymap).bindTooltip(locationName65,{
    permanent:true,
    color:"transparent",
    className: "no-background",
    direction: "center",
    opacity:100 
});

//marker .bindTooltip('angelica',{permanent:true, className: "my-label", offset:[5,-6]});





