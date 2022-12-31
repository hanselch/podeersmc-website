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
        // spawn portal: 25, -53
        {
          x: 28,
          z: -53,
          text: "To\nSpawn Peninsula", 
          textColor: "yellow", 
          offsetX: 0,
          offsetY: 0, 
          font: "bold 15px Calibri,sans serif",
        },
        // tardiobscurus' portal: 5, -119
        {
          x: 5,
          z: -119,
          text: "To\nSpise",
          textColor: "yellow",
          offsetX: 0,
          offsetY: 0,
          font: "bold 15px Calibri,sans serif",
        },
        // monodin0's portal: 121, -227
        {
          x: 121,
          z: -227,
          text: "To\nMonoDin0's",
          textColor: "yellow",
          offsetX: 0,
          offsetY: 0,
          font: "bold 15px Calibri,sans serif",
        },
        // to mesa biome -493, -428
        {
          x: -493,
          z: -428,
          text: "To\nMesa Biome",
          textColor: "yellow",
          offsetX: 0,
          offsetY: 0,
          font: "bold 15px Calibri,sans serif",
        }
      ] 
}
