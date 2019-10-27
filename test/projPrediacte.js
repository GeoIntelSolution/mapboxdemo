const proj4 = require('proj4');
proj4.defs("EPSG:2434","+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs")
const leftbottom=[481665.387,2940387.457]
const rightup=[575280.365,4920618.659]

console.log("leftbottom",proj4("EPSG:2434","EPSG:4326",leftbottom))
console.log("leftbottom",proj4("EPSG:2434","EPSG:4326",rightup))