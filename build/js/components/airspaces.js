function fetchAirspaces(){if(!window.map)return void console.error("Map not initialized yet");const e=window.map.getCenter(),n=e.lat.toFixed(6),a=e.lng.toFixed(6),o=`${process.env.APP_DOMAIN}/api/airspaces?lat=${n}&lng=${a}&dist=200000`;fetch(o).then((e=>e.json())).then((e=>{window.airspaceEFG.clearLayers();const n=[];e.items.forEach((e=>{if((0!==e.type||4!==e.icaoClass)&&e.geometry&&"Polygon"===e.geometry.type){const a=e.geometry.coordinates[0].map((e=>[e[1],e[0]])),o=0===e.lowerLimit.value?"red":"blue",i=(airspaceTypes[e.type],icaoClasses[e.icaoClass],L.polygon(a,{color:o,weight:2,fillOpacity:.3}));n.push({polygon:i,data:e}),window.airspaceEFG.addLayer(i)}})),console.log(`Added ${n.length} airspaces to the map`),window.map.off("click.airspaces"),window.map.on("click.airspaces",(function(e){const a=e.latlng,o=[];if(n.forEach((({polygon:e,data:n})=>{e.getBounds().contains(a)&&o.push(n)})),o.length>0){const e=o.map((e=>`\n            <b>${e.name}</b><br>\n            Type: ${airspaceTypes[e.type]||"Unknown"}<br>\n            ICAO Class: ${icaoClasses[e.icaoClass]||"Unknown"}<br>\n            ↧${e.lowerLimit.value} ${getUnit(e.lowerLimit.unit)}  ↥${e.upperLimit.value} ${getUnit(e.upperLimit.unit)}<br>\n          `)).join("<hr>");L.popup().setLatLng(a).setContent(e).openOn(window.map)}}))})).catch((e=>console.error("Error fetching airspaces:",e)))}const airspaceTypes={0:"Other"},icaoClasses={0:"A"};function getUnit(e){return{1:"ft",6:"FL"}[e]||"Unknown"}window.fetchAirspaces=fetchAirspaces,document.addEventListener("map_initialized",(function(){console.log("Setting up airspace layer events"),window.map.on("overlayadd",(function(e){"Airspaces"!==e.name&&"Gliding"!==e.name&&"Notam"!==e.name||(console.log(`Overlay added: ${e.name}, fetching airspaces`),fetchAirspaces())})),window.map.on("moveend",(function(){window.map.hasLayer(window.airspaceEFG)&&(console.log("Map moved, refreshing airspaces"),fetchAirspaces())}))}));