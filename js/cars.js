const car = {};
car["modelo"]="Fiesta";
car["marca"]="Ford";
car["ano"]=2013;
car["arcondicionado"]=true

const car2 = {};
car2["modelo"]="Uno";
car2["marca"]="Fiat";
car2["ano"]=2000;
car2["arCondicionado"]=false

const cars = [];
cars.push(car);
cars.push(car2);


console.log(car);
console.log(car2);
console.log(cars);

for (let index = 0; index < cars.length; index++) {
    mensagem= `${mensagem} ${cars[index].marca} - ${cars[index].modelo} ${cars[index].ano}\n`

}
alert(mensagem);
    