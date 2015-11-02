function solution1(A, B, C){

A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

console.log(A,B,C); // for debuging

  if( isNumeric(A) && isNumeric(B) && isNumeric(C) &&
    A < B &&
    C > 0 ){
    return Math.ceil((B - A)/C);
  }
  else {
    return null;
  }

}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
