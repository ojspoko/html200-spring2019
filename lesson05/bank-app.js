let quit = false;
let balance = 500;

while (quit === false) {
  let input = prompt('Select an action');

  switch(input) {
    case 'Q':
    quit = true;
    break;

    case 'B':
    alert('Balance: $' + balance);
    break;

    case 'W':
    let withdrawAmount = prompt('Enter an amount to withdraw');
    balance = balance - Number(withdrawAmount);
    alert('Balance: $' + balance);
    break;

    case 'D':
    let depositAmount = prompt('Enter an amount to deposit');
    balance = balance + Number(depositAmount);
    alert('Balance: $' + balance);
    break;
  }
}
