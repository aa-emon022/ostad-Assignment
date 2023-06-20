function primeNumber() {
  var num = 7;

  var isPrimeNumber = true;
  for (var i = 2; i * i <= num; i++) {
    if (num % i == 0) {
        isPrimeNumber = false;
    }
    
  }
  if (isPrimeNumber) {
    return num + ":" + "is  prime number";
    
  } else {
    return num + ":" + "Not a  prime number";
  }
}
primeNumber();

