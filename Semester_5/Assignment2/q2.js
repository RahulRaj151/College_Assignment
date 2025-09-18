let Floor_length= Number(prompt('enter the floor length : ')); //lenght of the floor
let Floor_width= Number(prompt('enter the floor width : ')); //widht d the floor

let Tile_length= Number(prompt('enter the  tile length: ')); // lenght of the tiles
let Tile_width= Number(prompt('enter the  tile width : ')); // widht of the tiles

let floor_Area=Floor_length*Floor_width; // area of the floor
let floor_perimeter=2*(Floor_length+Floor_width); //parameter of the floor
let tile_Area=Tile_length*Tile_width; // tile area
let tileNeed=floor_Area/tile_Area; //title needed
console.log("Tile needed to cover the floor is "+tileNeed); //total floor cover
console.log('The perimeter of the floor is '+floor_perimeter); //total parameter