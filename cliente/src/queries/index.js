import gql from 'graphql-tag';

export const IBMS_QUERY=gql `

query {
  getIBMS{
    id
    monto
    concepto
    fecha
    tipo
  }
}
`; 

export const IBM_QUERY = gql`

query getIBM($id: ID!){
  getIBM(id:$id){
    monto
    fecha
    concepto
    tipo
    id
  }
}
`;


export const USUARIO_ACTUAL =gql `
query obtenerUsuario {
  obtenerUsuario {
    usuario
    nombre
  }
}
`;