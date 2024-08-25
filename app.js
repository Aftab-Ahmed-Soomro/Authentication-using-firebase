// import {uploadBytesResumable, uploadBytes, ref,storage,db,collection, addDoc,getDocs, getDownloadURL} from './firebase.js'

// let studentName = document.getElementById('stdName');
// let assignmentLink = document.getElementById('assignmentLink');
// let addAssignment = document.getElementById('addAssignment');
// addAssignment.style.display = 'none'
// let image = document.getElementById('image');
// let pause = document.getElementById('pause');
// let resume = document.getElementById('resume');
// let cancel = document.getElementById('cancel');
// let stateBtns = document.getElementById('stateBtns');
// stateBtns.style.height = '0px'
// stateBtns.style.overflow = 'hidden'
// let progressor = document.getElementById('progressor');
// let showState = document.getElementById('showState');
// let uploadTask;
// let getImage;

// const uploadFile = () => {
//   const files = image.files[0];
//   const imagesRef = ref(storage, files.name);
//   uploadTask = uploadBytesResumable(imagesRef, files);
//   uploadTask.on('state_changed', 
//     (snapshot) => {
//       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       // console.log('Upload is ' + progress + '% done');
//       progressor.innerText = 'Upload is ' + progress + '% done'
//       stateBtns.style.height = 'auto'
//       stateBtns.style.overflow = 'visible'
//       switch (snapshot.state) {
//         case 'paused':
//           // console.log('Upload is paused');
//           showState.innerText = 'Upload is paused'
//           break;
//         case 'running':
//           // console.log('Upload is running');
//           showState.innerText = 'Upload is running'
//           break;
//       }
//     }, 
//     (error) => {
//       console.log(error);
//          }, 
//     () => {
//       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//         // console.log('File available at', downloadURL);
//         getImage = downloadURL;
//         addAssignment.style.display = 'block'
//       });
//     }
//   );
//   uploadBytes(imagesRef, files)
//     .then((snapshot) => {
//     console.log('Uploaded a blob or file!',snapshot);
//   });
// }

// image.addEventListener('change',uploadFile)

// pause.addEventListener('click', () => {
//   // console.log('pause');
//   uploadTask.pause();
// })

// resume.addEventListener('click', () => {
//   // console.log('resume');
//   uploadTask.resume();
// })

// cancel.addEventListener('click', () => {
//   // console.log('cancel');
//   progressor.innerText = ''
//   showState.innerText = ''
//   uploadTask.cancel();
// })

// const assignmentFunc = async () => {
//     if (studentName.value !== '' && assignmentLink.value !== '') {
//         addAssignment.innerText = 'Loading...'
//         try {
//             const docRef = await addDoc(collection(db, "assignments"), {
//               StudentName : studentName.value,
//               AssignmentLink : assignmentLink.value,
//               image : getImage
//             });
//             console.log("Document written with ID: ", docRef.id);
//             getAssignments();
//           } catch (e) {
//             console.error("Error adding document: ", e);
//           }
//           finally {
//             addAssignment.innerText = 'Add';
//           }
//           studentName.value = '';
//           assignmentLink.value = '';
//     }
// }

// addAssignment.addEventListener('click',assignmentFunc)

// const getAssignments = async () => {
//   data.innerHTML = '';
//     try {
//         const querySnapshot = await getDocs(collection(db, "assignments"));
//         if (querySnapshot.empty) {
//           data.innerHTML = `Data Not Found`;
//         }
//     querySnapshot.forEach((doc) => {
//     const {StudentName,AssignmentLink} = doc.data();
//     console.log(StudentName,AssignmentLink);
//     data.innerHTML += `
//     <div class='d-flex flex-column'>
//     <span class='ms-1 mb-2'>Title : <span class=''>${StudentName}</span></span>
//     <span class='ms-1'>Description : <a class="" target="_blank" href='${AssignmentLink}'>${AssignmentLink}</a></span>
//     <hr>
//     </div>
//     `
//     // console.log(`${doc.id} => ${doc.data()}`);
//     });
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// getAssignments();