
const fs = require('fs')

const path= './Usuarios.json'

class ManagerUsuarios{

    async crearUsuarios(usuario){
        try {
            const usuariosFile = await this.consultarUsuarios()
            usuariosFile.push(usuario)
            await fs.promises.writeFile(path, JSON.stringify(usuariosFile))
        } catch (error) {
            console.log(error)
        }
    }

  async consultarUsuarios (){
        try {
            if (fs.existsSync(path)) {
                const usuarios = fs.promises.readFile(path, 'utf-8')
                const usuriosJS = JSON.parse(usuarios)
                return usuriosJS
            } else {
                return []
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const manager = new  ManagerUsuarios()
const usuario1 ={
    nombre:'esteban',
    apellido:'suarez',
    curso:'JS',
    edad:45,
}

const usuario2 ={
    nombre:'emanuel',
    apellido:'ricchi',
    curso:'Backend',
    edad:38,
}


async function prueba (){
    const consultaUsuarios= await manager.consultarUsuarios()
    console.log(consultaUsuarios)// []
    await manager.crearUsuarios(usuario2)

}


prueba()