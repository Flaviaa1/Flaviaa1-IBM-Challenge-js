import {IBM, Usuarios} from './db'
import mongoose from 'mongoose';
import {rejects} from 'assert';
import bcrypt from 'bcrypt';

const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });

const crearToken = (usuarioLogin, secreta, expiresIn) => {

   
    const { usuario } = usuarioLogin;

    return jwt.sign({ usuario }, secreta, { expiresIn })
}
//el resolvers
export const resolvers = {
    Query: {
        getIBMS: (root, {limite}) => {
            return IBM.find({}).limit(limite)
        },
        getIBM : (root, {id})  => {
            return new Promise((resolve, object) => {
                IBM.findById(id, (error, ibm) => {
                    if(error) rejects(error) 
                    else resolve(ibm)
                });
            });
    },

    obtenerUsuario: (root, args, {usuarioActual}) =>{
        if(!usuarioActual) {
            return null
        }

        console.log(usuarioActual);
        //OBTENER EL USUARIO ACTUAL DEL REQUEST DE JTW verificado
        const usuario = Usuarios.findOne({usuario: usuarioActual.usuario})
         return usuario;
    }
},
    Mutation: {
        
     crearUsuario : async(root, {usuario, nombre, password}) => {

        ///revisar si un uusarios es igual
        const existeUsuario = await Usuarios.findOne({usuario});

         if(existeUsuario){
             throw new Error('El usuario ya existe')
         }
         const nuevoUsuario = await new Usuarios({

            usuario, 
            nombre,
            password
            
         }).save();

         return(
             "Creado Corecctamente"
         )
        
     },

     autenticarUsuario: async( root,  { usuario, password}) => {
         const nombreUsuario = await Usuarios.findOne( {usuario});
         if (!nombreUsuario) {
           throw new Error ('El usuario no encontrado')          
         }

         const passwordCorrecto = await bcrypt.compare(password, nombreUsuario.password)
            if (!passwordCorrecto) {
                throw new Error("Password incorrecto");

           
            }
            return {
                token: crearToken(nombreUsuario, process.env.SECRETO, '24h' )
               
            }
        },

        nuevoIBM: (root, {input}) => {
            const nuevoIbm = new IBM ({
                concepto: input.concepto,
                monto: input.monto,
                fecha: input.fecha,
                tipo: input.tipo
            })

            nuevoIbm.id =nuevoIbm._id;

            return new Promise((resolve, object) => {
                nuevoIbm.save((error) => {
                   if (error) rejects(error) 
                   else resolve(nuevoIbm)
       
               })
           });

        },

        actualizarIMB: (root, {input}) => {
            return new Promise((resolve, object) => {
                IBM.findOneAndUpdate({_id : input.id},input, {new: true}, (error, ibm) => {
                    if(error) rejects(error) 
                    else resolve(ibm)
               })

            });

            

        },

        eliminarIBM: (root, {id}) => {

            return new Promise((resolve, object) => {
                IBM.findOneAndRemove({_id: id}, (error) =>{
                    if(error) rejects(error) 
                    else resolve('Se elimino correctamente')
                })
             });

        },

    }
 }


