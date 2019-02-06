import { registrar, acceder, observador, aparecer, cerrar, verificar, loginGoogle, loginFacebook, addNote, deleteNote} from './controller/controller-firebase.js';
import Create from "./templates/createAccount.js"
const changeHash = (hash) =>  {
    location.hash = '#'+hash;
  }
  
export const signInOnSubmit = () => {
    const email = document.querySelector('#email2').value;
    const password = document.querySelector('#password2').value;
    acceder(email, password)
      .then(() => changeHash('/post'))
      .catch(() => {})
}

export const signInOnSubmitGoogle = () => {
  loginGoogle()
    .then(() => changeHash('/post'))
    .catch(() => {})
}

export const signInOnSubmitFacebook = () => {
  loginFacebook()
    .then(() => changeHash('/post'))
    .catch(() => {})
}
export const signInOnSubmitCreate = () => {
  //  document.getElementById('root').append(Create())
  // .then(() => changeHash('/create'))
  // .catch(() => {})
  changeHash('/create')
}
  // const email = document.querySelector('#email').value;
  // const password = document.querySelector('#password').value;
  // registrar(email, password)
  //   .then(() => changeHash('/create'))
  //   .catch(() => {})


  
export const addNoteOnSubmit = (event) => {
    event.preventDefault();
    const input = document.getElementById('input-new-note');
   
    addNote(input.value)
      .then(() => {
        input.value = '';
        data.message = 'Nota agregada'
      }).catch(() => {
        input.value = '';
        data.message = 'Lo sentimos, no se pudo agregar la nota';
      });
}

export const deleteNoteOnClick = (objNote) =>
  deleteNote(objNote.id)