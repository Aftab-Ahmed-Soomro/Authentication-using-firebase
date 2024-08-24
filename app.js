import {db,collection, addDoc,getDocs } from './firebase.js'

let studentName = document.getElementById('stdName');
let assignmentLink = document.getElementById('assignmentLink');
let addAssignment = document.getElementById('addAssignment');
let data = document.querySelector('.data');

const assignmentFunc = async () => {
    if (studentName.value !== '' && assignmentLink.value !== '') {
        addAssignment.innerText = 'Loading...'
        try {
            const docRef = await addDoc(collection(db, "assignments"), {
              StudentName : studentName.value,
              AssignmentLink : assignmentLink.value
            });
            console.log("Document written with ID: ", docRef.id);
            getAssignments();
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          finally {
            addAssignment.innerText = 'Add';
          }
          studentName.value = '';
          assignmentLink.value = '';
    }
}

addAssignment.addEventListener('click',assignmentFunc)

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