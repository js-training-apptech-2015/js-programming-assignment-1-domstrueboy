function solution2(A, B){

A = parseInt(A);
B = parseInt(B);

  if( isInteger(A) && isInteger(B) &&
    A < B){

      var max = 0, maxA, maxB, tmp;

      for(var i = A; i <= B; i++){
        for (var j = A; j <= B; j++){
          tmp = i^j;
          if(tmp > max){
            max = tmp;
            maxA = A;
            maxB = B;
            console.log(max, maxA, maxB); // for debuging
          }
        }
      }

    return max;
  }
  else {
    return null;
  }

}

function isInteger(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}
