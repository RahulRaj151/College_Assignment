let shipCode = prompt("Enter the first letter of the ship's serial number:").toLowerCase();
let shipClass;

switch (shipCode) {
    case 'b':
        shipClass = "Battleship";
        break;
    case 'c':
        shipClass = "Cruiser";
        break;
    case 'd':
        shipClass = "Destroyer";
        break;
    case 'f':
        shipClass = "Frigate";
        break;
    default:
        shipClass = "Unknown";
        break;
}

alert(`Ship Class: ${shipClass}`);
