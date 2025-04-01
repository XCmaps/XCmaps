import{getAngleRange,loadPlaceDetails,showFeebackForm,cancelFeedback}from"./spots-helper.js";export function initSpotLZ(){if(!window.map||!window.placesLayerLZ)return void setTimeout(initSpotLZ,500);console.log("Initializing LZ spots module...");const e=L.markerClusterGroup({disableClusteringAtZoom:9,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,maxClusterRadius:250,iconCreateFunction:function(e){return L.divIcon({html:`<div class="cluster-marker">${e.getChildCount()}</div>`,className:"lz-cluster-icon",iconSize:L.point(30,30)})}});window.placesLayerLZ.addLayer(e);let o=null,t=null;function i(){t&&clearTimeout(t),t=setTimeout((()=>{o&&o.abort(),o=new AbortController;const t=o.signal,i=window.map.getBounds(),n=i.getNorthWest().lat,a=i.getNorthWest().lng,r=i.getSouthEast().lat,s=i.getSouthEast().lng;fetch(`/api/places?nw_lat=${n}&nw_lng=${a}&se_lat=${r}&se_lng=${s}&type=LZ`,{signal:t}).then((e=>e.json())).then((i=>{t.aborted||(e.clearLayers(),L.geoJSON(i,{pointToLayer:function(e,o){return L.marker(o,{icon:L.icon({iconUrl:"../assets/images/windsock.png",iconSize:[20,20],iconAnchor:[20,20]})})},onEachFeature:function(o,t){if(o.properties){let e=`<b>${o.properties.name}</b><br>\n                                                    Type: ${o.properties.type}<br>\n                                                    Direction: ${o.properties.direction}<br>\n                                                    <i>Loading details...</i>`,i=L.responsivePopup({hasTip:!0,autoPan:!1,offset:[15,25],maxWidth:900,maxHeight:780}).setContent(e);t.bindPopup(i),t.on("popupopen",(async function(){await loadPlaceDetails(t,o.properties.id)}))}e.addLayer(t)}}),o=null)})).catch((e=>{"AbortError"!==e.name&&console.error("Error fetching LZ places:",e)}))}),300)}window.fetchPlacesLZ=i,window.map.hasLayer(window.placesLayerLZ)&&i(),console.log("PG spots module initialized")}document.addEventListener("map_initialized",(function(){console.log("Map initialized event received in LZ spots module"),setTimeout(initSpotLZ,100)})),setTimeout((()=>{window.mapInitialized&&(console.log("Backup initialization for LZ spots module"),initSpotLZ())}),1e3);