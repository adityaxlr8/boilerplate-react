import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig);
const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase , googleAuthProvider , database as default }

















// database.ref('expenses').on('child_removed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
// })

// database.ref('expenses').on('child_changed',(snapshot) =>{
//   console.log(snapshot.key , snapshot.val()) 
// })
// database.ref('expenses').on('child_added',(snapshot) =>{
//   console.log(snapshot.key , snapshot.val()) 
// })

 

// database.ref('expenses').on('value',(snapshot)=>{

//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses)
// })
 



// database.ref('expenses')
//         .once('value')
//         .then((snapshot) => {

        //   const expenses = [];
        //   snapshot.forEach((childSnapshot) => {
        //     expenses.push({
        //       id:childSnapshot.key,
        //       ...childSnapshot.val()
        //     })
        //   });
        //   console.log(expenses)
        // })


// database.ref('expenses').push({
// description:'Hello world ',
// note :'mai hun jo isme aya',
// amount:555,
// createdAt:12/2/2002
// })

 // database.ref('expenses').push({
//   description:'Parachute ',
//   note :'mai madar hun jo aya',
//   amount:666,
//   createdAt:24/12/2008
//   })
// database.ref('expenses').push({
//     description:'Skydiving karenge re ',
//     note :'hai mere mein dum',
//     amount:777,
//     createdAt:18/8/2012
//     })



// database.ref().on('value',(snapshot)=>{
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`) 
// })

// const notes =[{
//   id:12,
//   title:'Firts note',
//   body:'This is my note '
// },{
//   id:12,
//   title:'Firts note',
//   body:'This is my note '
// }]

//   database.ref('notes').push({
//     title:'Course topics ',
//     body:'React native,Python,Angular'
//   })

// database.ref('notes/-LoLjcsUgoZzM6bTtuc6').remove()


// const firebaseNotes = {
//   notes:{
//     adasdsa:{
//       title:'Firts note',
//       body:'This is my note'
//     },
//     adnkskldajsa :{
//       title:'Firts note',
//        body:'This is my note'
//       }
//   }
// }


// database.ref('notes').set(notes)










// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//   const val =snapshot.val() 
//   console.log(val)  
// })  
// .catch((e)=>{
//   console.log('Error fetching data',e)
// })




// database.ref().set({
//   name: 'Aditya',  
//   age:26,
//   stress:2,
//   job:{
//     title:'Web developer',
//     company:'Google'
//   },
//   location:{
//     city:'Hyderabad',
//     country:'India'
//   }
// }).then(()=>{
//   console.log('Data is saved')
// }).catch(() =>{
//   console.log('This failed')
// })

// // database.ref()
// // .remove()
// // .then(()=>{
// //   console.log('sucess') 
// // }).catch(()=>{
// //   console.log('failed')
// // })
  
// database.ref().update({
//   stress:5,
//   'job/company':'Amazon',
//   'location/city':'London'
// })














