let dimension: number = Number(prompt("Ingrese la dimension"));
let n: string[] = new Array(dimension);

for (let index = 0; index < n.length; index++) {
  n[index] = prompt(
    `Ingrese un nùmero que quiere poner en el lugar,${n[index]},:`
  );
}

for (let i = n.length; i >= 0; i--) {
  console.log(`El nùnero que ingresó en la posicion,${i} es :${n[i]}`);
}
