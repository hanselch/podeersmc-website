// TODO: After making the next map update, do the form

// Setting up the links
//  Getting the iFrame link
var mapLink = document.getElementById("mapLink");
//  Setting up the link to the maps
const mapLinks = [
  '/server-maps/12.22.22/index.html'
];
// deafult value
mapLink.src = mapLinks[0]

// Get the value
//   get "submit" button
const showMap = document.getElementById("showMap");
//   when the "submit" button is clicked get the
//   value and set the iframe src to the mapLinks
//   selected
showMap.addEventListener("click", () => {
  var getMapDate = document.getElementById("map-date");
  var output = getMapDate.value;
  mapLink.src = mapLinks[output]
})
