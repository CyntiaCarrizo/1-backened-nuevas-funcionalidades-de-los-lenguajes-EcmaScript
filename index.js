
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




/***********************************CLASE 2) PROGRAMACION SINCRONICA Y ASINCRONICA***** */
/*FUNCIONES: CONJUNTO DE INSTRUCCIONES para realizar una tarea en particular, con la finalidad de poderla reutilizar facilmente.
pueden o no recibir parametros. Dichos parametrops pueden ser cualquier tipo de dato, tambien pueden ser funciones. 
retornan algun valor o tambien pueden retornar otras funciones.
ordenan el codigo.

1) tradicional: declaradas bajo la sintaxis:
 function nombre(arg) {
    return args
}
2) arrow function: declaradas bajmo la sintaxis: 
cmonst nombre = (args) => {
    return args
}  
anonima intrinsicamente
3)funcion definmida: cuenta con un nombre especifico. Usualmente se usan para no reasignarse.
4)funcion anonima: no cuenta con nombre, solo implementacion. Son usualmente pensadas para reasignarse o utilizarse. */

//funcion tradicional

function sumar (a,b){
    //bloque a ejecutar
    const resultado= a+b
    console.log(resultado)
    return (resultado)
}

//funcion tradicional simplimficada

function sumar2 (a,b){
   
    return a+b
}


console.log(sumar(4,5))//9
console.log(sumar2(8,5))//13
//funciones flechas o arrow function

const arrowFunction = (a,b) =>{
    const resultado = a+b
    console.log(resultado)
    return resultado
}

const arrowFunction2 = (a,b) => a+b
const arrowFunction3 = (a) => a+5
console.log(arrowFunction(6,6))//12
console.log(arrowFunction2(8,7))//15
console.log(arrowFunction3(5))//10


/*1)sincronismo o bloqueante: cuando se ejecutan las mfunciones lo hacen una  ala mvez, si x alguna razon una requiere mas tiempo para ejecutarse
lo que sucede es que todo el poceso se detiene hasta que esa linea se termine de ejecutar.

2) Asincronico o no bloqueante: significa que cada fumncion o tarea seguira el hilo de la resolucion que considere su ritmo. Hay que ser cautelosos 
al utilizarlas:
a)No controlamos cuando terminara, solo cuando comienza
b)Si una tarea depende del resultado de otra, habra problemas, pues esperara su ejecucion en paralelo.
las operaciones asincromnicas son no bloqueantes, esto significa, que las tareas pueden irse ejecutamndo en paralelo y no esperar por las demas tareas.
Asi la tarea numero 3 podria terminar imncluso anmtes que la tarea numero 1.

3)Callback:
Es una funcion como mcualquier otra la diferencia esta en que está se pasa como parametro (argumento) para poder ser utilizada por otra funcion.
Permiten entonces que las funciones ejecuten operaciones adicionales dentro de si mismas.
Cuando pasamo un callback, lo hacemos porque no siempre sambemos que queremos que se ejecute en cada casmo de nuestra mfuncion.
    Algunos ejemplos donde has utilizado callbacks son:
    1) el metodo onClick en frontend
    2) metodo forEach
    3) memtodo map o filter 

convenciones:
1)El callbacks siempre es el ultimo parametro 
2)El callback suele ser una funmcion que recibe dos parametros
3)la funcion llama al callback al terminar de ejecutar todas sus operaciones 
4)Si la operacion fue exmitosa, la funcion llamara al callback pasanmdo null como primer parametro y si genera algun resultado este se pasara 
como segundo parametro
5)Si la operacion resultado es un error, la funcion llamara al callback pasando el error obtenido como primer parametro
6) Sintaxis de un callbacks: 

const ejemploCallback = (error, resultado) => {
    if(error){
        //hacer algo con el error!!
    }else{
        //hacer algo con el resultado 
    }
}
*/

function callback(parametro){
    return `Hola ${parametro}`
}

function principal (parametro1, cb) {
    const resultado = cb(parametro1)
    return resultado
}

console.log(principal ("pablo", callback))//Hola pablo}

/*En algun momento el mundo laboral te exige hacer mas que una suma o resta. Nos encontraremos con procesos que requieren operaciones de mas pasos.
Si nosotros trabajamos con callbacks, podemos encadenar un conjunto de operaciones secuenciales. Asi un callback puede llamar a otro callback, 
y este puede llamar a otra y asi sucesivamente, formandose un callbacks hell.
*/

/*Promesas: resuleven de alguna manera el problema de asincronia.
representa la terminación o el fracaso de una operación asíncrona. 
Son un objeto que contienen un valor ahora, men el futuro mo puede que nunmca este.
Es un objeto especial que nos permitira encapsular una operacion,la cual reaccionara a dos posibles situacimones dentro de una promesa: 
1)que dmeberia hacer si la promesa se cumple?
2)que deberia hacer si la promesa no se cumple?
Una promesa funciona muy similar al mundo real. Al prometerse algo, es una promesa en estado pendienmte (pending), no sabemos cuando se resolvera
esa promesa. Sin embargo cuando llega el momento se nos notifica si la promesa se cumplio (fulfilled tambiem lo encontramos como resolve) o talvez
a pesar del tiempo, al final nos notifiquen que la promesa no pudo cumplirse, se rechazo (reject).
Podemos crear funciones que devuelvan promesas o consumir funmciones que devuelmven promesas
  */

//crear promesas

function funcpromesa(a,b){
    return new Promise ((resolve, reject)=>{
        if (a===0){
            reject `promesa rechazada`
        }else{
            resolve (a+b)
        }
    })
}

console.log(funcpromesa(5,4)) //Promise{9}


//la manipulacion de promesa se hace por medio de .then .catch y async await
//.then: (si la promesa se resuelve sastifactoria)
//.catch (promesa rechazada)
/*Problemas con .then y .catch
Cuando necesitamos más que sólo una operación para poder ejecutar algo asíncrono, no basta con el uso de una promesa solamente,
 sino que necesitamos un entorno completo para poder ejecutar dichas operaciones .then en este caso sólo nos sirve para encadenar las promesas 
 y obtener sus resultados, pero no nos permite un entorno completo asíncrono para trabajar, por lo cual nos obliga a trabajar TODO dentro de ese
scope.
Además, el principal problema de los .then y .catch son su encapsulamiento excesivo, impidiendo o limitando que podamos acceder a los recursos
de algunos resultados, variables, etc.
*/


/*ASYNC AWAIT:  
Es otra forma de manipular promesas.
Es unma forma de escribir programacion asincrona como si fuera sincronica. 
No se necesita anidar.
async se colocará al inicio de una función, indicando que todo el cuerpo de esa función deberá ejecutarse de manera asíncrona
await servirá (como indica su nombre) para esperar por el resultado de la promesa y extraer su resultado.
Al ser operaciones que podrían salir bien, PERO TAMBIÉN MAL, es importante encerrar el cuerpo en un bloque try {} catch {} */

const dividir= (dividiendo, divisor)=>{
    return new Promise ((resolve, reject)=>{
        if (divisor === 0) {
            reject ("No se pueden hacer divisiones entre cero.")
        } else {
            resolve(dividiendo/divisor)
        }
    })
}

const funcionAsync = async() =>{
    try {
        let resultado = await dividir(10,5)
        console.log (resultado)
    } catch (error) {
        console.log(error)
    }
}  

funcionAsync()//2

