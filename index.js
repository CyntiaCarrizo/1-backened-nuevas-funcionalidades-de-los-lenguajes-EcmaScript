
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





/***************************MANEJOS DE ARCHIVOS JS******************/
/*REPASO:
Función definida: Función que se declara con un nombre desde el inicio. Usualmente se usan para tareas específicas y no suelen reasignarse.

Función anónima: Función que se declara sin tener un nombre, sino que se asigna a una variable desde el inicio.
 Se suele utilizar para reasignaciones o para callbacks.

Callback: Bloque de código que encapsula una o más instrucciones, para ser utilizadas en cualquier otro momento del programa

Promesa: Operación asíncrona que tiene dos canales de salida: resolverse o rechazarse. Permiten mejor control que los callbacks

Operación síncrona: Operación bloqueante en la cual, una tarea no puede comenzar hasta que haya finalizado la otra tarea.
Las operaciones síncronas o bloqueantes, nos sirven cuando necesitamos que las operaciones se ejecuten una detrás de otra,
 es decir, se utiliza cuando deseamos que las tareas sean secuenciales, independientemente del tiempo que demore cada operación.


Operación asíncrona: Operación no bloqueante en la cual se pueden iniciar múltiples tareas independientemente de que no hayan 
finalizado las tareas previas.
1)setTimeout se utiliza para establecer un temporizador que ejecute una tarea después de un determinado tiempo. permite entender en un par de
 líneas la idea del asincronismo.
  A diferencia de una operación síncrona, podremos notar como setTimeout inicia su ejecución, y una vez que haya transcurrido el tiempo,
veremos el resultado, aun cuando el resto de las operaciones hayan terminado.

2)setInterval funciona como setTimeout, la diferencia radica en que éste reiniciará el conteo y ejecutará la tarea nuevamente cada vez que 
se cumpla dicho intervalo de tiempo.
Un timer devuelve un apagador el cual permite detener el intervalo cuando se cumpla cierta operación.
Suele utilizarse mucho para poner tiempos límites en alguna página para llenar formularios (Hay ciertas páginas que te dan tiempo límite 
para hacer la operación, O TE BOTAN).
*/



/*console.log("Primer console")

setTimeout(() => {
    console.log("console setTimeout")
}, 5000);

console.log("ultimo console")

const { info } = require('console')*/



/*          Más allá de la memoria… manejo de archivos

    El problema: persistencia de la memoria.
Cuando comenzamos a manejar más información, nos encontraremos con una de las grandes molestias del programador: tener que comenzar desde 0 cada vez que el programa termina su ejecución.
Todas las cosas que creamos, movimos o trabajamos desaparecen, ya que sólo persiste en memoria, y esta se borra automáticamente al finalizar el programa.
El mundo real no te permite eso
Si tratara de registrar usuarios para la página web de mi empresa ¡imagina si tuviera que hacer una actualización de la página!
Al actualizar la página (el servidor), necesitaría reiniciarse Y todos los usuarios desaparecerían. Tendríamos que pedirle a cada usuario que vuelva a registrarse y a subir su información.
¡La solución!
La primera solución al problema de persistencia en memoria fue guardar la información en archivos. Estos son un conjunto de información que podemos almacenar.
Así, cuando se requiera nuevamente la información, podemos leer el archivo que habíamos guardado y recuperar la información, aún si el programa había finalizado.
¡Tu Sistema Operativo funciona así!


Implementando archivos en nodejs: fs

        fs en Nodejs
fs es la abreviación utilizada para FileSystem, el cual, como indica el nombre, es un sistema de manejador de archivos que nos proporcionará 
node para poder crear, leer, actualizar o eliminar un archivo, sin tener que hacerlo nosotros desde cero. 
Así, crear un archivo con contenido será tan fácil como escribir un par de líneas de código, en lugar de tener que lidiar con los datos binarios 
y transformaciones complejas y de un nivel más bajo en la computadora.
La programación se basa en un principio clave: no reinventes la rueda. Los módulos a utilizar son soluciones ya proporcionadas por otros 
desarrolladores, con el fin de concentrarnos en la solución de problemas más específicos.

¿Cómo utilizamos el File System de Nodejs en nuestro propio código?

            Utilizando fs
fs existe desde el momento en el que instalamos Nodejs en nuestro computador, por lo que, para utilizarlo, podemos llamarlo desde cualquier
archivo que tengamos de nuestro código con la siguiente línea: 

    const fs= requiere("fs")

De ahí en adelante todo el módulo de FileSystem estará contenido en la variable fs. Sólo debemos utilizarlo llamando sus métodos como una clase. Esto podremos hacerlo de 3 formas: síncrono, con callbacks o con promesas.
Utilizando fs de manera sincrónica
fs síncrono:
¡El uso de fs de manera síncrona es bastante sencillo! para ello, sólo utilizaremos la palabra Sync después de cada operación que queramos 
realizar. Hay muchas operaciones para trabajar con archivos, pero sólo abarcaremos las principales.
Las principales operaciones que podemos hacer con fs síncrono son:
writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, 
lo sobreescribe. Se le pasan dos parametros: primero la ruta del archivo y segundo el contenido del archivo 
readFileSync = Para obtener el contenido de un archivo. Se pasan dos parametros: el primero es la ruta y el segundo
es el encouding ( utf-8)
appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
existsSync = Corrobora que un archivo exista!*/



//Sync

const fs = require ('fs')

/*const path = './file1.txt'

if (fs.existsSync(path)) {
    console.log('Archivo existente')
    //LEER
    const info = fs.readFileSync(path, 'utf-8')
    console.log(info)//Primer texto
    //ADICIONAR
    fs.appendFileSync(path, 'Segunmdo texto')

    const infoMod= fs.readFileSync(path, 'utf-8')
    console.log(infoMod)
    //ELIMINAR
    //fs.unlinkSync(path)
} else {
    fs.writeFileSync(path,'Primer texto')
}*/




/* Forma Asincrona: 

    fs con Callbacks
Funciona muy similar a las operaciones síncronas. Sólo que al final recibirán un último argumento, que como 
podemos intuir, debe ser un callback.
Según lo vimos en las convenciones de callbacks de la clase pasada, el primer argumento suele ser un error. 
Esto permite saber si la operación salió bien, o si salió mal. Sólo readFile maneja un segundo argumento, 
con el resultado de la lectura del archivo.
Por último: el manejo por callbacks es totalmente asíncrono, así que cuidado dónde lo usas.
Las principales operaciones que podemos hacer con fs con callbacks son:
writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, 
lo sobreescribe. Al sólo escribir, su callback sólo maneja: (error)=>
readFile = Para obtener el contenido de un archivo. Como pide información, su callback es de la forma: 
(error, resultado)=>
appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!, al sólo ser escritura, 
su callback sólo maneja: (error)=>
unlink = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
Al no retornar contenido, su callback sólo es (error)=>*/




/*const pathCB = './fileCB.txt'
if (fs.existsSync(pathCB)) {
        fs.readFile(pathCB, 'utf-8', (error, info)=>{
            if (error) {
                console.log('Error de ReadFile',error)
            } else {
                console.log(info)//Primer texto CB
                fs.appendFile(pathCB, 'Segundo texto CB', (error)=>{
                    if (error) {
                        console.log(error)
                    } else {
                        console.log('Info CB adicionada con exito')//Info CB adicionada con exito
                       // fs.readFile(pathCB, 'utf-8', (error, info)=>{
                       //     if (error) {
                       //         console.log(error)
                       //     } else {
                       //         console.log(info)
                       //         fs.unlink(pathCB, (error)=>{
                       //             if (error) {
                        //                console.log(error)
                       //             } else {
                       //                 console.log('Archivo CB eliminado con exito ')
                         //           }
                          //      })
                          //  }
                       // }) 
                    }
                })
            }
        })
} else {
    fs.writeFile(pathCB, 'Primer texto CB', (error)=>{
        if (error) {
            console.log(error)
        } else {
            console.log('Archivo CB creado con exito')
        }
    })
}*/





/*
fs utilizando promesas:

fs con promesas
Ya sabemos trabajar con archivos, ya vimos cómo trabajarlos de manera asíncrona, ahora viene el punto más valioso: 
trabajar con archivos de manera asíncrona, con promesas. esto lo haremos con su propiedad fs.promises

Al colocar a nuestro módulo fs el .promises
estamos indicando que, la operación que se hará debe ser ejecutada de manera asíncrona, pero en lugar de manipularla 
con un callback, lo podemos hacer con .then +.catch, o bien con async/await.
Los argumentos y estructura es casi idéntico al síncrono, por lo tanto sus operaciones principales serán:
fs.promises.writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
fs.promises.readFile = Para obtener el contenido de un archivo.
fs.promises.appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
fs.promises.unlink= Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.*/



/*const pathProm= './fileProm.txt'

if (fs.existsSync(pathProm)) {
    fs.promises.readFile(pathProm, 'utf-8')
    .then(info=>{console.log(info)
        return fs.promises.appendFile(pathProm, ' Segundo texto de promesas ')
    })
    .then(()=>{
        console.log('Info de promesa adiciona con exito ')
            return fs.promises.readFile(pathProm, 'utf-8')
    })
  //  .then(info=>{
  //      console.log(info)
  //          return fs.promises.unlink(pathProm)
  //  })
   // .then(()=>console.log('Archivo de promesa eliminamdo con exito'))
    .catch(error=>console.log(error))
} else {
    fs.promises.writeFile(pathProm, 'Primer texto Promesas')
    .then(()=>console.log('Archivo de promesa creado con exito'))
    .catch(error=>console.log(error))
}*/




/*Manejo de datos complejos con fs.promises

Como ya podrás imaginar, no todo son archivos .txt, y por supuesto que no todo es una cadena de texto simple.
¿Qué va a pasar cuando queramos guardar el contenido de una variable, aun si esta es un objeto? ¿Y si es un 
arreglo? Normalmente los archivos que solemos trabajar para almacenamiento, son los archivos de tipo json.
Para poder almacenar elementos más complejos, nos apoyaremos del elemento JSON.stringify() y JSON. parse()
    
JSON.stringify
Una vez que tenemos el objeto que queremos guardar en el archivo, tenemos que recordar que éste no puede
 guardarse sólo incrustándolo. Necesitamos convertirlo a formato json, el cual es un formato estándar de 
 guardado y envío de archivos.
La sintaxis para hacer la conversión es:
            JSON.stringify(objetoAconvertir,replacer,'.\t')

JSON.parse
Ahora que entendemos cómo se convierte un objeto a un JSON, es claro mencionar que JSON.parse representa la
 operación contraria. Cuando leemos un archivo, el contenido no es manipulable, así que, para recuperar el 
 objeto que había guardado y no sólo una string representativa de él, entonces hay que transformarlo de vuelta,
 esto se hace con JSON.parse
Su sintaxis es:
            JSON.parse(Json-mque-quiero-transformar-a-objeto)



Ventajas y desventajas de utilzar archivos

Por qué usarlos:
Son excelentes para empezar a aprender persistencia, ya que son muy fáciles de usar
Al ser nativo de node js, no tenemos que hacer instalaciones externas.
Es muy fácil de manipular dentro o fuera de nuestro programa, además de se transferible.

    Desventajas:
Conforme la información crece, nos daremos cuenta que, para querer modificar una sola cosa, necesitamos leer
 todo el archivo, lo cual consume recursos importantes.
Similar al punto anterior, una vez modificado un dato puntual del archivo, tengo que reescribir el archivo 
completamente, lo cual es un proceso innecesario y pesado cuando la información es grande.
Al final, puede ser peligroso tener toda la información en un archivo fácilmente extraíble con un drag&drop a
 otra carpeta.
*/

const productos =[
    {
        nombre: 'Iphone',
        stock: 500,
        precio: 1500,
    },
    {
        nombre: 'Ipad',
        stock: 25,
        precio: 900,
    }
]

const pathJSON = './fileJson.json'

//fs.writeFileSync(pathJSON, JSON.stringify(productos))
const info= fs.readFileSync(pathJSON, 'utf-8')
console.log(info)//la const productos viene con formato texto plano JSON
const infoJS= JSON.parse(info)
console.log(infoJS)//la consta producto viene como una arreglo de objetos, pudiendo asi aplicar metodos



/*ACTIVIDAD

Se creara una clase que permita gestionar usuarios usando fs.promises, este debera contar solo con dos metodos:
Crear un Usuario y Consultar los usuarios guardados.
a)El Manager debe vivir en una clase en un archivo externo llamado ManagerUsuarios.js
b)el metodo CrearUsuario debe recibir un objeto mcon los campos:
nombre, apellido, edad, curso.
El metodo debe guarduar un usuario en mun archivo Usuarios.json. Deben guardarlos dentrmo de un  arreglo, ya que se 
trabajaran con multiples usuarios.
c)El metodo ConsultarUsuarios debe poder leer un archivmo Usuarios.json y devolver el arreglo corresponmdiente a esos 
usuarios.
*/

/*Actividad a entregar:

a)Realizar una clase de nombre “ProductManager”, el cual permitirá trabajar con múltiples productos. Éste debe poder 
agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia de archivos (basado en entregable 1).
b)La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y debe recibir la ruta
a trabajar desde el momento de generar su instancia.
c)Debe guardar objetos con el siguiente formato:
id (se debe incrementar automáticamente, no enviarse desde el cuerpo)
title (nombre del producto)
description (descripción del producto)
price (precio)
thumbnail (ruta de imagen)
code (código identificador)
stock (número de piezas disponibles)
d)Debe tener un método addProduct el cual debe recibir un objeto con el formato previamente especificado,
 asignarle un id autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo).
e)Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver todos los productos en formato 
de arreglo.
f)Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con 
el id especificado y devolverlo en formato objeto
g)Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, así también como el campo
 a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID 
h)Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el 
archivo.

Formato del entregable

Archivo de javascript con el nombre ProductManager.js

 */


