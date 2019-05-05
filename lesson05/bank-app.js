let quit = false;
let balance = 500;

while (quit === false) {
  let input = prompt('Select an action')

  if (input === 'q') {
      quit = true;
  } else if (input === 'w') {
      let withdrawAmount = prompt('Enter an amount to withdraw');
      balance = balance - Number(withdrawAmount);
      alert(balance);
  } else if (input === 'd') {
      let depositAmount = prompt('Enter an amount to deposit');
      balance = balance + Number(depositAmount);
      alert(balance);
  } else if (input === 'b') {
      alert(balance);
  }
}
