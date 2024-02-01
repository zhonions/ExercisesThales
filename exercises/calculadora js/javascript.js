function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculate() {
      document.getElementById('display').value = eval(document.getElementById('display').value);
  }
  document.addEventListener('keydown', function (event) {
    const key = event.key;

    switch (key) {
      case '1':
        appendToDisplay('1');
        break;
      case '2':
        appendToDisplay('2');
        break;
      case '3':
        appendToDisplay('3');
        break;
      case '4':
        appendToDisplay('4');
        break;
      case '5':
        appendToDisplay('5');
        break;
      case '6':
        appendToDisplay('6');
        break;
      case '7':
        appendToDisplay('7');
        break;
      case '8':
        appendToDisplay('8');
        break;
      case '9':
        appendToDisplay('9');
        break;
      case '0':
        appendToDisplay('0');
        break;
      case '+':
        appendToDisplay('+');
        break;
      case '-':
        appendToDisplay('-');
        break;
      case '*':
        appendToDisplay('*');
        break;
      case '/':
        appendToDisplay('/');
        break;
      case 'Enter':
        calculate();
        break;
      case 'c':
        clearDisplay();
        break;
      case 'Backspace':
        // Remove a última entrada
        const currentValue = document.getElementById('display').value;
        document.getElementById('display').value = currentValue.slice(0, -1);
        break;
    }
  });
