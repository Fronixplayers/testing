function getBotResponse(input) {
    //rock paper scissors
    if (input == "Rock") {
        return "paper";
    } else if (input == "Paper") {
        return "scissors";
    } else if (input == "Scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Menu") {
        return "1.capcut, 2.training, 3.next!";
    } else if (input == "Capcut") {
        return "check in tools";
    } else {
        return "Kuch or Puchle Iske alawa?";
    }

    //working

    if (input == "Hello") {
        return "Hello FronixBot Here, how can i help you?";
    } else if (input == "Bye") {
        return "Talk to you later!";
    } else {
        return "Kuch or Puchle Iske alawa?";
    }

    //Hal Chal

    if (input == "How are you?") {
        return "I'am Fine how can i help you?";
    } else if (input == "Bye") {
        return "Talk to you later!";
    } else {
        return "Kuch or Puchle Iske alawa?";
    }
}