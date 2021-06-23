const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    return userInput === 'rock' ||
     userInput === 'paper' ||
     userInput === 'scissors' ?  
     userInput : 'Invalide Input';
  }
  
  const getComputerChoice = () => {
    comAction = Math.floor(Math.random()*3) // output 0 1 2
    switch (comAction){
      case 0:
      return comAction = 'rock'
        break;
      case 1:
      return comAction = 'paper'
        break;
      case 2:
      return comAction = 'scissors'
        break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    return userChoice === 'Invalide Input'? 'Nothing' :
    userChoice === computerChoice ?  'Tie' : 
    userChoice === 'rock' && computerChoice === 'paper' ||
    userChoice === 'scissors' && computerChoice === 'rock' || 
    userChoice === 'paper' && computerChoice === 'scissors'?
    'Computer': 'User';
    // 2 if in one return
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('1');
    let comChoice = getComputerChoice();
    let resault = determineWinner(userChoice, comChoice);
    console.log(`User : ${userChoice} \nComputer : ${comChoice}`);
    console.log(`And the winner is ${resault} !!!`);
  }
  
  playGame()
