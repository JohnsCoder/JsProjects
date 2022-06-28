function arrayOfArrays(a, s) {
  af = [];
  z = 0;
  e = a.length / s;
  if (!(a.length % s)) {
    for (let i = 0; i < e; i++) {
      af.push(a.slice(z, (z += s)));
    }
  } else {
    return console.log("Matriz não pode ter esse tamanho!!!");
  }
  af.forEach((e) => console.log(e));
}

function calcMatriz(m1, m2, cxl1, op) {
  mf = [];
  switch (op) {
    case "add":
      for (e in m1) {
        mf.push(m1[e] + m2[e]);
      }
      break;
    case "sub":
      for (e in m1) {
        mf.push(m1[e] - m2[e]);
      }
      break;
  }

  arrayOfArrays(mf, cxl1);
}
calcMatriz(
  [7, 8, 9, 56, 65, 67, 67, 67, 34],
  [2, 2, 3, 76, 67, 67, 67, 56, 23],
  3,
  "sub"
);
