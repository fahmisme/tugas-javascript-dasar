const ListA = [1,2,3,4,5]

// variable untuk menampung array baru
let results = []

// Tidak menyertakan index di array baru
for (let index = 0; index < ListA.length; index++) {
	let result = []
  
  ListA.forEach((listA, indexListA) => {
    if (index !== indexListA) {
    	result.push(listA)
    }
  })
  
  results.push(result)
}

// Kalkulasi semua array baru
let hasil = []

results.forEach((values) => {
	let temp = 0
  
  values.forEach((value) => {
  	temp += value;
  })
  
  hasil.push(temp)
})

var hasilMin = Math.min.apply(Math, hasil)
var hasilMax = Math.max.apply(Math, hasil)
console.log('Min : ', hasilMin, ',', 'Max : ',hasilMax)
