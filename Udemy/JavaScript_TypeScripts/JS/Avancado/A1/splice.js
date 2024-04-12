const nomes = ["Genilson", "Firmina", "Roberta", "Ana", "Gabriela", "Emival"];
console.log(`\nArray de nomes: `, nomes);

const simulaPop = nomes.splice(-1, 1);
console.log("\nSimulando o pop(): ", simulaPop);
console.log(`Array de nomes: `, nomes);


const simulaShift = nomes.splice(0, 1)
console.log("\nsimulando Shift(): ", simulaShift);
console.log(`Array de nomes: `, nomes);

nomes.splice(nomes.length, 0, "Adiconado1", "Adicionado n"); //
console.log("\nsimulando push(): ", nomes);

nomes.splice(0, 0, "Adiconado2", "Adicionado n2"); //
console.log("\nsimulando unshif(): ", nomes);

const removidos = nomes.splice(-3, 2);
console.log(`\nArray de removidos: `, removidos);
console.log(`Array de nomes: `, nomes);