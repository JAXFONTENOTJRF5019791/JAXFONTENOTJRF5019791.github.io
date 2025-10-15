$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
console.log(toggleGrid())
console.log(createPlatform(500,250,10,500))
console.log(createPlatform(410,530,90,10))
console.log(createPlatform(410,650,90,10))
console.log(createPlatform(410,410,90,10))
console.log(createPlatform(410,290,90,10))
console.log(createPlatform(500,250,800,10))
console.log(createPlatform(1300,400,100,10))
console.log(createPlatform(950,600,100,10))
console.log(createPlatform(850,500,20,10))
console.log(createPlatform(750,450,20,10))
console.log(createPlatform(660,390,20,10))
console.log(createPlatform(500,350,100,10))
console.log(createPlatform(1180,500,15,10))
    // TODO 2 - Create Platforms




    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
