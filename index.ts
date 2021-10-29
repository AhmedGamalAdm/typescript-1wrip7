let A, B, C: number;
A = parseInt(prompt(' يرجى أدخال الرقم المطلوب '));
B = parseInt(prompt(' يرجى أدخال الرقم المطلوب '));
C = A + B;
console.log(C);

if (A + B > 0) {
  console.log('العدد موجب');
}
if (A + B < 0) {
  console.log('العدد سالب');
}
if (A == 0) {
  console.log('العدد يساوى صفر');
}

console.log('النهاية');
