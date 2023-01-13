/*

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [
        // spawn
        {
          x: 153, z: -392,
          text: "Spawn Peninsula", 
          textColor: "yellow", 
          offsetX: 0,
          offsetY: 0, 
          font: "bold 25px Calibri,sans serif",
        },
        // Spise
            // Main
        {
          x: 43, z: -1005,
          text: "Spise",
          textColor: "yellow",
          offsetX: 0,
          offsetY: 0,
          font: "bold 20px Calibri,sans serif",
        },
            // Hjerte Mountain
        {
          x: -71, z: -792,
          text: "Hjerte Mountain",
          textColor: "green",
          offsetX: 0,
          offsetY: 0,
          font: "bold 16px Calibri,sans serif",
        },
        // Novio Diat 
        {
          x: 933, z: -1788,
          text: "Novio Diat",
          textColor: "yellow",
          offsetX: 0,
          offsetY: 0,
          font: "bold 20px Calibri,sans serif",
        },
        // Everfall
        {
          x: 202, z: 1589,
          text: "Everfall",
          textColor: "yellow",
          offsetX: 0,
          offsetY: 0,
          font: "bold 20px Calibri,sans serif",
        },
        // Kandyland
        {
          x: 202, z: 372,
          text: "Kandyland",
          textColor: "yellow",
          offsetX: 0,
          offsetY: 0,
          font: "bold 20px Calibri,sans serif",
        }
      ] 
}
