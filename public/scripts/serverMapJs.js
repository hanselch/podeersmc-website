// TODO: After making the next map update, do the form

// Setting up the links
//  Getting the iFrame link
var mapLink = document.getElementById("mapLink");
//  Setting up the link to the maps
var unChangeNether = [
  "01.05.23",
  "01.12.23",
]

// Get the value
//   get "submit" button
const showMap = document.getElementById("showMap");
//   when the "submit" button is clicked get the
//   value and set the iframe src to the mapLinks
//   selected
var getMapDate = document.getElementById("map-date");
mapLink.src = `/server-maps/${getMapDate.value}/overworld/index.html`
// setDefault map
showMap.addEventListener("click", () => {
  var getMapDate = document.getElementById("map-date");
  var getDimension = document.getElementById("dimension");

  if (getDimension.value == "overworld") {
    mapLink.src = `/server-maps/${getMapDate.value}/overworld/index.html`
  } else if (getDimension.value == "nether") {
    if (!(getMapDate.value in unChangeNether)) {
      mapLink.src = `/server-maps/12.29.22/nether/index.html`
    } else {
      mapLink.src = `/server-maps/${getMapDate.value}/nether/index.html`
    }
  }
})
