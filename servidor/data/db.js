// const moongose = require('mongoose');

// require('dotenv').config({path:'variables.env'});

// const conectarDB = async() => {
//     try {
        
//         await moongose.connect(process.env.DB_MONGO,{
//          useNewUrlParser: true,
//          useUnifiedTopology: true,
//          useFindAndModify: false,
//          useCreateIndex: true
//         })
//         console.log('db CONECTADA');
//     } catch (error) {
//         console.log('Hubo un error');
//         console.log(error);
//         process.exit(1);//detener la app
        
//     }
// }


// export default conectarDB;

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/clientes', {useNewUrlParser: true, useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true});


const usuariosSchema = new mongoose.Schema({
     usuario:String,
     nombre:String,
     rol:String,
     password:String
});
const IBMSchema = new mongoose.Schema({
     concepto: String,
     monto: Number,
     fecha: Date,
     tipo: String
})

usuariosSchema.pre('save', function(next){

     if(!this.isModified('password')){
          return next();
     }
          bcrypt.genSalt(10, (err, salt)=> {
               if(err) return next(err)
               bcrypt.hash(this.password, salt, (err, hash) =>{
                    if(err) return next(err);
                    this.password =hash;
                    next();
               });
          })
     
})

const Usuarios = mongoose.model('usuarios', usuariosSchema);
const IBM = mongoose.model('IBM', IBMSchema);

export {Usuarios, IBM}