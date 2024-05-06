export const generate = (a: number, quantity: number, seed: number, limit: number) => {
  let x = seed;
  const m = Math.pow(2, Math.log(quantity) / Math.log(2) + 2);
  let r;
  a = a * 8 + 5;
  const randArray: number[] = [];
  for (let i = 0; i < limit; i++) {
    x = (a * x) % m;
    r = x / (m - 1);
    randArray.push(r);
  }
  return randArray;
};
