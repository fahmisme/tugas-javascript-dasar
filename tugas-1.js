const ListA = [1,2,3,4,5];

// Tidak menyertakan index di array baru
let results = [];

for (let index = 0; index < ListA.length; index++) {
  let result = [];
  
  ListA.forEach((listA, indexListA) => {
    if (index !== indexListA) {
      result.push(listA);
    };
    results.push(result);
  });
};

// Kalkulasi semua array baru
let hasil = [];
results.forEach((values) => {
  let temp = 0;
  values.forEach((value) => {
    temp += value;
  });
  hasil.push(temp);
});

// Temukan nilai minimal dan maksimal
let hasilMin = Math.min.apply(Math, hasil);
let hasilMax = Math.max.apply(Math, hasil);
console.log('Min : ', hasilMin, ',', 'Max : ',hasilMax);