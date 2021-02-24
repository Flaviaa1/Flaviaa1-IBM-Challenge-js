import gql from 'graphql-tag';

export const NUEVO_IBM = gql `
mutation nuevoIBM($input: IBMInput){
  nuevoIBM (input:$input){
    id
    monto
    concepto
    fecha
    tipo
  }
}
`
;

export const ACTUALIZAR_IBM =gql `
 mutation actualizarIBM ($input: IBMInput) {
  actualizarIMB(input:$input){
    monto
    concepto
    fecha
    tipo
  }
}
`;

export const ELIMINAR_IBM = gql`

mutation eliminarIBM($id: ID!){
    eliminarIBM(id: $id)
  }
`;

export const NUEVO_USUARIO = gql `

mutation crearUsuario($usuario: String!,$nombre:String!, $password:String!){
    crearUsuario (usuario: $usuario,nombre:$nombre, password: $password)
}

`;

export const AUTENTICAR_USUARIO = gql `
  mutation autenticarUsuario($usuario: String!, $password: String! ) {
  autenticarUsuario(usuario: $usuario, password: $password){
    token
  }
}
`;
