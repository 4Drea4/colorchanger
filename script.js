var index = 0;
function changeColors(){
    var colors = [      
        "Red",
        "Blue",
        "#FF5733",  // Fiery Red
        "#33FF57",  // Fresh Green
        "#3357FF",  // Calm Blue
        "#FF33A1",  // Bright Pink
        "#33FFF5",  // Aqua Blue
        "#FF8333",  // Sunset Orange
        "#33FF83",  // Mint Green
        "#5733FF",  // Deep Purple
        "#FF3381",  // Fuchsia
        "#33FF33",  // Lime Green
        "#FF3333",  // Bold Red
        "#33A1FF",  // Sky Blue
        "#A1FF33",  // Neon Green
        "#8333FF",  // Violet
        "#FF5733",  // Coral
        "#33FFDD",  // Teal
        "#FF33D4",  // Magenta
        "#33FF6B",  // Neon Green
        "#A133FF",  // Electric Purple
        "#FF3381",  // Hot Pink
        "#FFB833",  // Amber
        "#33FFAA",  // Turquoise
        "#FF3399",  // Cerise
        "#33FF66",  // Spring Green
        "#9933FF"   // Lavender
    ];

    document.getElementsByTagName("body")[0].style.background = colors[index++];
    if(index > colors.length - 1)
        index = 0;
}