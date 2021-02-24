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
