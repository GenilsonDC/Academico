const pessoas = [
    { id: 1, name: "Gabriela", age: 23 },
    { id: 5, name: "João", age: 26 },
    { id: 3, name: "Thais", age: 54 },
    { id: 2, name: "Fabiana", age: 43 },
    { id: 4, name: "Juan", age: 67 },
];

const saidaPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    saidaPessoas.set(id, { ...pessoa });
};

for ([identifcador, { id, name, age }] of saidaPessoas) {
    console.log(identifcador, id, name, age);

}