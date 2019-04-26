export const registrar = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
  }
  
  export const acceder = (email, password) => {
   return firebase.auth().signInWithEmailAndPassword(email, password)
  }
  
  export const verificar = () => {
    let user = firebase.auth().currentUser;   
    if (user) {
    user.sendEmailVerification()
    .then(() => {
    // Email sent.
    alert('se envió un correo de confirmación')
    })
    .catch(() =>{
    });
    }
   }
  export const loginGoogle = () => {
   const provider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth().signInWithPopup(provider).catch(e => {
     console.log(e);
     
   })
  }
  
  export const loginFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);  
  }

  export const cerrar = () =>
    firebase.auth().signOut()

  export const addPost = (textNewPost, privacityValue) => {
    return firebase.firestore().collection('post').add({
      likePost: 0,
      title: textNewPost,
      state: false,
      privacity: privacityValue
    })
  }
  
  export const getPosts = (callback) =>{
   firebase.firestore().collection('post')
     .onSnapshot((querySnapshot) => {
       const data = [];
       querySnapshot.forEach((doc) => {
         data.push({ id: doc.id, ...doc.data() })
       });
       callback(data);
     });
  }
  
  export const getPostsByPrivacity = (privacityValue, callback) =>{
   firebase.firestore().collection('post').where('privacity', '==', privacityValue)
     .onSnapshot((querySnapshot) => {
       const data = [];
       querySnapshot.forEach((doc) => {
         data.push({ id: doc.id, ...doc.data() })
       });
       callback(data);
     });
  }

  export const deletePostOnClick = (idPost) => {
   return firebase.firestore().collection('post').doc(idPost).delete()
  }  
  
  export const editionPost = (idPost, newPost) => {
     return firebase.firestore().collection('post').doc(idPost).update({
     title: newPost
     });
  }  
  
  export const likeCountShow = (idPost, newLike) => {
   return firebase.firestore().collection('post').doc(idPost).update({
     likePost: newLike
     });
  }