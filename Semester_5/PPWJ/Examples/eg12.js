let randomValue = Math.floor(Math.random() * 6);

let response;
switch (randomValue) {
    case 0:
        response = "Yes, definitely.";
        break;
    case 1:
        response = "No, not at all.";
        break;
    case 2:
        response = "Maybe, ask again.";
        break;
    case 3:
        response = "It is certain.";
        break;
    case 4:
        response = "Outlook not so good.";
        break;
    case 5:
        response = "Reply hazy, try again.";
        break;
    default:
        response = "Unexpected response.";
}

console.log(response);
