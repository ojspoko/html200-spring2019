let quit = false;
let balance = 500;

while (quit === false) {
  let input = prompt('Select an action');

  if (input === 'Q'|| input === 'q') {
      quit = true;
  } else if (input === 'W'|| input === 'w') {
      let withdrawAmount = prompt('Enter an amount to withdraw');
      balance = balance - Number(withdrawAmount);
      alert('Balance: $' + balance);
  } else if (input === 'D'|| input === 'd') {
      let depositAmount = prompt('Enter an amount to deposit');
      balance = balance + Number(depositAmount);
      alert('Balance: $' + balance);
  } else if (input === 'B'|| input === 'b') {
      alert('Balance: $' + balance);
  }
}
