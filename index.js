
/*************************************** 1) NUEVAS FUNCIONALIDADES DE LOS LENGUAJES ECMASCRIPT****************** */

//ES7
 const expAnterior = Math.pow(2,3) //dos elevado a la 3 = 8
 const expActual = 2**3 // un solo asterico es multiplicacion, dos asteriscos es exponecial. 2**3=8
 console.log(expAnterior, expActual)

 const array = [1,2,3,4,5,6,8,9,0]
 console.log(array.includes(2))// el metodo includes arrija un true o false 
 console.log(array.includes(7))

//ES 8
/*Las principales funcionalidades de este realease son: 
1) async await: para mejor control asincronico
2) Object.entries, Object.values, Object.keys. Para unm mejor control interno sobre las propiedades de un objeto.*/

const obj = {
    nombre: "esteban",
    apellido: "guzman",
    edad:30,
    esCasado: true, 
}

//console.log(Object.values(obj))//da un arreglo con el valor de las propiedades
//console.log(Object.entries(obj))//unm arreglo que dentro de el contiene otro arreglo con dos elementos. El primero es la llave y el 2* el valor
//console.log(Object.keys(obj))//da un arreglo de las propiedades

//es asi que puedo saber cuantas propiedadees tiene el objeto obj, debido a que guardamos en una constante el arreglo arrojadp por Object.entries
const arrayObj = Object.entries(obj)
console.log(arrayObj.length)

//si deseo modificar o cambiar usamos los metodos de arreglos ya conocidos 

const arrayObjMod = arrayObj.map(([c,v])=> [c, `${v} modificado`])
console.log(arrayObjMod)

const objMod = Object.fromEntries(arrayObjMod)
console.log(objMod)//mediante el Object.fronEntries convierte el array en objeto 

//ES9
/*las principales funcionalmmidades de este realese son : 
1) resolvedores de promesa con .finally(), para controlar si una promesa se cumple o no
2) Mayor control a los objetos con los operadores rest y spread*/

//el spread operator se lo utiliza para concatenar, crear copias identicas  y expanmdir un arreglo u objeto.  

const animales1 = ["perro", "gato", "pez"]
const animales2 = ["leon", "raton", "conejo"]

//animales1.concat(animales2)//sintaxis anterior

const animales = [...animales1,...animales2]
console.log(animales)

//ejemplo con objetos
 
const obj1 = {
    nombre: "avril",
    apellido: "neila"
}

const obj2 = {
    nombre: "maximo",
    edad: 38,
    esCasado: true,
}

const obj3 = {...obj1,...obj2}
console.log(obj3)//reescribe la propiedad nombre, se queda con el ultimo. no escribe dos propiedades iguales, no las añade. 



//el spread operator me permite hacer copias identicas de lo que esta dentro de ese casillero pero guardada en otro lugar. Me permite copiar la informaciom de un casillero y despues puedo hacer cambiosin verse afectada mla informacion inicial.

//const obj1Copia= obj1//en este caso apunta al mismo lugar en memoria que obj1
const obj1Copia= {...obj1}
obj1Copia.nombre= "jose",
console.log(obj1Copia)
console.log(obj1)


//rest operator: nos permite representar un numero indefinido de argumentos como un array. tambiemn sirve cuando hacemos un destructuring, para guradar informaciomn que desconocemos en un objeto

const funcionRest = (a,b,...otros) => {
    console.log(a);
    console.log(b);
    console.log(otros);
}

funcionRest(1,2,3,4,5,6,)// muestra 1 2 [3,4,5,6]

//destructuring con rest operator 

const objRest ={
    nombre: "emanuel",
    apellido: "hoyos",
    curso: "js",
    edad: 40,
}

const {nombre,...otraInfo}= objRest
console.log(otraInfo)//muestra un objeto con las llaves y claves de las propiedades apellido, curso y edad

/*Ejercicio: dado los objeto indicado emn la siguiente actividad: 
1) realizar una lista nueva (array) que contenga todos los tipos de productos (mno cantidades). Comnsejo utilizar Object.Keys y Array.includes. Mostrar el array por consola.
2) porstemriormemnte obtener el total de productos vendidos por todos los objetos (mutilizar Object.values).*/

const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2,
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4,
    }

]

const arrayFrutas=[]
let total = 0
objetos.forEach(objeto => {
    const array= Object.keys(objeto)
    //console.log(array)//manda dos arreglo por separado de [manzanas, peras, carnes jugos, dulces] y de [manzanas sandias huevos jmugos panes ]
    array.forEach(fruta=>{
        !arrayFrutas.includes(fruta) && arrayFrutas.push(fruta)
       // if(!arrayFrutas.includes(fruta)){
      //          arrayFrutas.push(fruta)
      //  }
    })
    
   //total
const valoresArreglo = Object.values(objeto)
console.log(valoresArreglo)
valoresArreglo.forEach(valor => total+= valor)
   
})

console.log(arrayFrutas)//[manzanas carmne dulces huevos peras jugmos sandias panes ]
console.log(total)//26

//ES 10
/*Las principales fumncionalidades de este mmrealease son: 
1) String.trim(): remueve los espacios innecesarios en una cadena. Sirve mpara vamlidar cadenas enviadasm vacias mo eliminar mlos espacios iniciales y finales,
2)Array.flat(): Remueve amnidaciones internas en arrays para dejar un arreglo plano.
3) mDinamic import: permite importar solo los modulos necesarios, agorrando espacio y memoria*/

const saludo= "      hola a todos"
console.log(saludo)
console.log(saludo.trim());


const arrayFlat = [1,2,3,4[1,2,3,4,5,6,[1,2,3,4,[1,2,3,4]]]]
console.log(arrayFlat.flat(2))
console.log(arrayFlat.flat(5))
console.log(arrayFlat.flat(Infinity))

//ES 11
/*Las prinmmcipales funcionalidades de este realease son: 
1) operador nullish: sirve para poder colocar un valor por defailt a vareiables que podrian ser nulas o indefinidas a diferenmcias del operador ||, estas filtramn "falseys"
2m) variables privadas dentro de las clases, esto permite que algunmas variables mno sean accesibles desde el entorno de minstancia de una clase y solo sea utilizada de manera interna*/

/*concepto de falsey: es un valor que se considera falso cuando se encuentra en un contexto booleano .JavaScript utiliza la conversión de tipos para forzar cualquier valor a un booleano en contextos que lo requieran, como condicionales y bucles .
valores falsey: 0, -0, cadena vacia, false, null, NaN, indefinido. se utiliza con el oprador OR (||), mmostrando el mvalor true

*/

console.log(0||10)//muetra 10 xq el 0 en el or es false mientra que en el nullish es true
console.log(NaN||10)//10 

console.log(0 ?? 10)


/*Actividad: Registrador de tickect de eventos 
Se creara una clase que permitira llevar la gestion completa de usuarios que deseen a dichos eventos. 
1)definir clase ticketManager el cual tendra munm arreglo de eventos que iniciara vacio
2)la clase debe contar con una variable privada "precioBaseDeGanancia" la cual añadira un costo adicinal al precio de cada evento
3)dembe contar con el metodo "getEventos" el cual mostrara los eventos guardados
4)debe contar con el metodo "agregarEvento" el cual recibira los siguientes parametros: mnombre, lugar, precio (debera agregar un 0.15 al valor original), capacidad (50 por defecto), fecha (hoy por defecto)
5) el metodo debera crear ademas el campo id autoincrementable y el campo "participantes" que siempre iniciara con un arreglo vacio    
6) debe contar con un metodo "agregarUsuario" el cual recibira a) id del evento b) id del usuario. El metodo debe evaluar que el evento existay 
que el usuario no haya estado resgitrado previamente ( validacion de fecha y capacidad se ecitara para no alargar el reto ). Si todo esta en orden
debe agregar el id del usuario en el arreglo participantes de ese evento. 
7) debe conta con un metodo "ponerEventoEnGira" el cual recibira a)id del evento b)mnueva localidad c)nueva fecha. El metodo debe copiar el 
evento existente con una nueva localidad, nueva fecha, nuevo id y sus participantes vacios (usar spread operator para el resto de las propiedades)
*/

class ticketManager {
    #precioBaseDeGanancia = 0.15 // prop privada: se definen afuera del constructor y con el numeral
    constructor(){
        this.eventos= []
    }

    getEventos () {
        return this.eventos
    }

    agregarEventos (nombre, lugar, precio, capacidad=50, fecha= new Date()){

        const evento= {
            id: this.#generarId(),
            nombre,
            lugar,
            precio: precio + this.#precioBaseDeGanancia,
            capacidad,
            fecha,
            participantes: []
        }

        this.eventos.push(evento)

    }

    agregarUsuario(idEvento, idUsuario){

        const evento = this.#evaluarEvento(idEvento)
        if (evento) {
            if (evento.participantes.includes(idUsuario)) {
                console.log("participante ya esta incluido en este evento")
            } else {
                evento.participantes.push(idUsuario)
                console.log("participante añadido con exito")
            }
        } else {
            console.log("evento no existe")
        }

    }

    ponerEventoEnGira(idEvento, nuevoLugar, nuevaFecha){
        const evento = this.#evaluarEvento(idEvento)
        if (evento) {
            const nuevoEvento = {
                ...evento,
                id: this.#generarId(),
                lugar: nuevoLugar,
                fecha: nuevaFecha,
                participantes: []
            }

            this.eventos.push(nuevoEvento)

        } else {
            console.log("Evento no existe")
        }
    }

    #generarId (){
        let id= 1
        if (this.eventos.length !==0) {
            id= this.eventos[this.eventos.length-1].id + 1
            
        }
        return id
    }

    #evaluarEvento(idEvento){
        return this.eventos.find(evento=> evento.id === idEvento)
    }
}

const ticketManager1 = new ticketManager()
//const ticketManager2 = new ticketManager()
ticketManager1.agregarEventos("evento1", "lugar1", 3, 100)
ticketManager1.agregarEventos("evento2", "lugar2", 5, 80)
ticketManager1.agregarEventos("evento3", "lugar3", 50)
ticketManager1.agregarUsuario(2,1)
ticketManager1.agregarUsuario(2,1)
ticketManager1.ponerEventoEnGira(1, "nuevoLugar1", new Date ("01/31/2023"))
ticketManager1.ponerEventoEnGira(2, "nuevoLugar2", new Date (5/02/2023 ))

//console.log(ticketManager1)//ticketManager{eventos: []}
//console.log(ticketManager2)//ticketManager{eventos: []}

console.log(ticketManager1.getEventos())//[]
//console.log(ticketManager2.getEventos())//[]

