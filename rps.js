// This is the word based version of Rock Paper Scissors
// It's also easier
function start(){
    var user = readLine("Rock, Paper, Scissors (No capitals) ");
    var inm = Randomizer.nextInt(1,3);
    //allow user input
    if(user == "rock"){
        println("You threw Rock");
    }else if(user== "paper"){
        println("You threw Paper");
    }else if(user == "scissors"){
        println("You threw Scissors");
    }else if(user != "rock" ||user !=  "paper" ||user !=  "scissors"){
        println("ERROR: not correct.");
        po();
    }
    //Computer Choice
    if(inm == 1){
        println("Computer throws Rock");
    }else if(inm == 2){
        println("Computer throws Paper");
    }else if(inm == 3){
        println("Computer throws Scissors");
    }
    if(inm == 1 && user == "paper" || inm == 2 && user == "scissors" || inm == 3 && user == "rock"){
        println("You win!");
    }else if(inm == 1 && user == "scissors" || inm == 2 && user == "rock" || inm == 3 && user == "paper"){
        println("You lose!");
    }else if(inm == 1 && user == "rock" || inm == 2 && user == "paper" || inm == 3 && user == "scissors"){
        println("It's a draw!");
    }
    po();
}
    function po(){
    var con = readBoolean("Do you want to play again? (True/False) ");
    if(con == true){
        start();
    }else{
        println("gg");
    }
}
