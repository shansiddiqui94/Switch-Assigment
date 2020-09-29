//Switch Statement HW

let favoriteMovie = prompt("What is your favorite movie")

switch (favoriteMovie) {
    case 'Jaws':
        favoriteMovie = "You're gonna need a bigger boat.";
        console.log(favoriteMovie)
        break;

    case "The Shining":
        favoriteMovie = "All work and no play makes Jack a dull boy.";
        console.log(favoriteMovie)
        break;

    case "Star Wars":
        favoriteMovie = "Do. Or do not. There is no try.";
        console.log(favoriteMovie)
        break;

    case "Forrest Gump":
        favoriteMovie = "Life was like a box of chocolates.";
        console.log(favoriteMovie)
        break;

    case "Back to the Future":
        favoriteMovie = "Where we're going, we don't need roads.";
        console.log(favoriteMovie)
        break;

    default:
        favoriteMovie = "Great movie choice!";

}