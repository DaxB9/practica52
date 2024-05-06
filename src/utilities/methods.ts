import { generate } from './generator';
export const dpf = (
  k: number,
  i: number,
  years: number
) => {
  let x = 0;
  while (x < years) {
    const I = i * k;
    k = k + I;
    x++;
  }
  return k;
};

export const coinGame = (nl: number, gap: number, cjue: number, simulations: number) => {
  let results: number[] = [];
  for (let i = 0; i < simulations; i++) {
    let gta = 0;
    let cd = 0;
    while (cd < nl) {
      cd++;
      const am1 = generate(Math.round(10 + 89 * Math.random()), 2048, Math.round(1000 + 8999 * Math.random()), 1)[0];
      const am2 = generate(Math.round(10 + 89 * Math.random()), 2048, Math.round(1000 + 8999 * Math.random()), 1)[0];
      const am3 = generate(Math.round(10 + 89 * Math.random()), 2048, Math.round(1000 + 8999 * Math.random()), 1)[0];
      if ((am1 > 0.5 && am2 > 0.5 && am3 > 0.5) || (am1 <= 0.5 && am2 <= 0.5 && am3 <= 0.5)) {
        gta += gap - cjue;
      } else {
        gta -= cjue;
      }
    }
    results = [...results, gta]
  }
  return results;
};
export const calculateMean = (results: number[]) => {
  let mean = 0;
  for (let i = 0; i < results.length; i++) {
    mean += results[i];
  }
  return mean = mean / results.length;
}
export const minimizeFunction = (nmi: number) => {
  let x1 = 0, x2 = 0;
  let x3 = 0;
  let aux1, aux2,aux3;
  let auxz, z = 0,zc;
  let seed;
  let a;
  let xic,x2c,x3c;
  for (let i = 0; i < nmi; i++) {
    seed = Math.round(Math.random() * 8999 + 1000);
    seed = seed % 2 == 0 ? seed + 1 : seed;
    a = Math.round(Math.random() * 20);
    const randArray = generate(a, 1024, seed, 3);
    // aux1 = Math.round(randArray[0] * 1000);
    // aux2 = Math.round(randArray[1] * 95 + 5);
    xic=10*randArray[0];
    xic=Number(xic.toFixed(2));
    x2c=Math.round(100*randArray[1])
    if (xic+x2c>= 2) {
      // aux3 = Math.round(randArray[2] * 95 + 5);
      x3c=1+randArray[2];
      x3c=Number(x3c.toFixed(2));
      zc=(2*xic)+(3*x2c)-x3c
      zc=Number(zc.toFixed(2));
      if (zc > z) {
        console.log(x1,x2,x3,z)
        z = zc;
        x1 = xic;
        x2 = x2c;
        x3 = x3c;
      }
    }
  }
  return { z: z, x1: x1, x2: x2 , x3: x3};
}
export const diceGame = (nmj: number, cj: number, pcj: number, simulations: number) => {
  let cjue = 0,
    gneta = 0,
    jgc = 0;
  let rd1, rd2, sdado;
  let results: unknown[] = [];
  for (let i = 0; i < simulations; i++) {
    (cjue = 0), (gneta = 0), (jgc = 0);
    while (cjue < nmj) {
      cjue++;
      gneta += cj;
      rd1 = Math.round(1 + 5 * generate(Math.round(10 + 89 * Math.random()), 2048, Math.round(1000 + 8999 * Math.random()), 1)[0]);
      rd2 = Math.round(1 + 5 * generate(Math.round(10 + 89 * Math.random()), 2048, Math.round(1000 + 8999 * Math.random()), 1)[0]);
      sdado = rd1 + rd2;
      if (sdado === 7) gneta -= pcj;
      else jgc++;
    }
    const pgjc = (jgc / nmj) * 100;
    results = [...results, { gneta, pgjc, jgc }];
  }
  return results;
}

export const sugarProblem = (simulations: number, nmd: number, cbod: number, creord: number, cuInv: number, cua: number, pvu: number) => {
  console.log(nmd, cbod, creord, cuInv, cua, pvu)
  const results: any[] = [];
  for (let i = 0; i < simulations; i++) {
    let ctinv = 0, ib = 0, cd = 0, ctreord = 0, gneta = 0, dins = 0, tent = 0;
    let iazu = cbod, cta = cua * cbod, pazu = 0;
    let rdazu, rtent, dazu = 0;
    while (cd < nmd) {
      cd++;
      if (tent > 0) {
        tent--;
        if (tent === 0) {
          iazu += pazu;
        }
      }
      if (!(cd % 7 === 0)) {
        rdazu = generate(Math.round(10 + 89 * Math.random()), 2048, Math.round(1000 + 8999 * Math.random()), 1);
        if (rdazu[0] === 1) rdazu[0] = 0.9999999999999999;
        dazu = Math.round(-100 * Math.log(1 - rdazu[0]));

        if (dazu > iazu) {
          dins += dazu - iazu;
          ib += iazu * pvu;
          iazu = 0;
        }
        else {
          iazu -= dazu;
          ib += dazu * pvu;
          ctinv += cuInv * iazu;
        }
      }
      else {
        pazu = cbod - iazu;
        cta += pazu * cua;
        ctreord += creord;
        rtent = generate(Math.round(10 + 89 * Math.random()), 2048, Math.round(1000 + 8999 * Math.random()), 1);
        tent = Math.round(1 + 2 * rtent[0]);
      }

    }
    const ct = ctinv + cta + ctreord;
    gneta = ib - ct;
    results.push({ gneta, dins, ct });
  }
  return results;
}



export const articleSold = (simulations: number, nmh: number, cfd: number, cua: number, puv: number) => {
  const results: any = [];
  for (let i = 0; i < simulations; i++) {
    let chr = 0, caTotal = 0,  cac = 0, gneta = 0;
    while (chr < nmh) {
      chr++;
      const rlc = generate(Math.round(10 + 89 * Math.random()), 2048, Math.round(1000 + 8999 * Math.random()), 1)[0];
      let lc = 4 * rlc;
      while (lc > 0) {
        const rcac = generate(Math.round(10 + 89 * Math.random()), 2048, Math.round(1000 + 8999 * Math.random()), 1)[0];
        if (rcac > 0.2 && rcac <= 0.5) {
          cac = 1;
        }
        if (rcac > 0.5 && rcac <= 0.9) {
          cac = 2;
        }
        if (rcac > 0.9 && rcac <= 1) {
          cac = 3;
        }
        caTotal += cac;
        lc--;
      }
    }
    gneta = caTotal * (puv - cua) - cfd;
    results.push({ caTotal, gneta });
  }
  return results;
}

export const eggsProblem = (simulations: number, nmd: number, pvuh: number, pvup: number) => {
  const results: any = [];
  for (let i = 0; i < simulations; i++) {
    let cd = 0, nhue = 0, nhuer = 0, npm = 0, npv = 0;
    while (cd < nmd) {
      cd++;
      const rchueg = generate(Math.round(10 + 89 * Math.random()), 2048, Math.round(1000 + 8999 * Math.random()), 1)[0];
      let chueg = 0;
      if (rchueg <= 0.41 && rchueg > 0.14) {
        chueg = 1;
      }
      if (rchueg <= 0.68 && rchueg > 0.41) {
        chueg = 2;
      }
      if (rchueg <= 0.86 && rchueg > 0.68) {
        chueg = 3;
      }
      if (rchueg <= 0.95 && rchueg > 0.86) {
        chueg = 4;
      }
      if (rchueg <= 0.98 && rchueg > 0.95) {
        chueg = 5;
      }
      if (rchueg <= 0.99 && rchueg > 0.99) {
        chueg = 6;
      }
      while (chueg > 0) {
        chueg--;
        const refhue = generate(Math.round(10 + 89 * Math.random()), 2048, Math.round(1000 + 8999 * Math.random()), 1)[0];
        if (refhue <= 0.2) {
          nhuer++;
        }
        if (refhue > 0.2 && refhue <= 0.5) {
          const rbsp = generate(Math.round(10 + 89 * Math.random()), 2048, Math.round(1000 + 8999 * Math.random()), 1)[0];
          if (rbsp <= 0.2) {
            npm++;
          }
          else {
            npv++;
          }
        }
        if (refhue > 0.5 && refhue <= 1) {
          nhue++;
        }
      }
    }
    const gneta = nhue * pvuh + npv * pvup
    results.push({ gneta, nhue, npv, npm, nhuer })
  }
  return results;
}
export const obtainMeanOfObjects = (numberArray: any[]) => {
  const propertyNames = Object.keys(numberArray[0]);
  const means: any = { ...numberArray[0] };
  for (let i = 1; i < numberArray.length; i++) {
    for (let j = 0; j < propertyNames.length; j++) {
      means[propertyNames[j]] += numberArray[i][propertyNames[j]];
    }
  }
  for (let j = 0; j < propertyNames.length; j++) {
    means[propertyNames[j]] /= numberArray.length;
  }
  return means
}
