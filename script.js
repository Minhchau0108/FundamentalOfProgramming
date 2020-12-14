function play() {
  // Generate a random number between 0 and 1 and assign it to a variable.
  const randomNumber = Math.floor(Math.random()*2);// enter your code
  
  let message = document.getElementById('result');

  //Log to the console "Yes" if the randomNumber is 0.
  //Lisewise, log "No" to the console if the randomNumber is 1.
  if(randomNumber == 0) {
    console.log('Yes');
    message.innerHTML = "Yes";
  }
  else {
    console.log('No');
    message.innerHTML = "No";
  }
}