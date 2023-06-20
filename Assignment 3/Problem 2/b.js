function squareRoot() {
    var numbers = [1, 2];
    var result = 0;
    numbers.forEach((element) => {
      var squares = Math.pow(element, 2);
      result = result + squares;
    });
    var squareRootResult = Math.sqrt(result);
  
    return squareRootResult;
  }
  const result = squareRoot();
  console.log(result);
  