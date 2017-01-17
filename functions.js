const check = document.getElementsByTagName('button')[0];
let output = document.getElementsByTagName('p')[0];


function checkNumber(e) {
  let input = parseInt(document.querySelector('input[type=text]').value, 10);

  if (Number.isNaN(input) || input<0 || input>10000){
   output.textContent = 'Nieproprawna wartosc';
   } else {
    output.textContent =" "
    for(let k = 3; k<input; k++) {

      let primeNumber = 0;

      for (let i = 2; i < k; i++) {
        if (k/i == Math.floor(k/i)){
          primeNumber = 1;
          break;
        }
      }
      if (primeNumber === 0) {
        output.textContent += k + ' ';
      }

    }   
  }
  e.preventDefault();
}
check.addEventListener('click', checkNumber, false);