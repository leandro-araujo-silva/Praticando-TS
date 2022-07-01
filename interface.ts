interface Usuario {
  id: number;
  name: string;
}

let novoUsuario: Usuario = {
  id: 1,
  name: 'Rodrigo',
}

function registerNewUser(newUsuario: Usuario) {
  newUsuario.id = 1
}