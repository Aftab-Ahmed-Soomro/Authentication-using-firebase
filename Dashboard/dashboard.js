import {updateDoc, getDoc ,doc, deleteDoc ,auth ,signOut ,onAuthStateChanged ,db ,collection ,getDocs} from '../firebase.js'

let logOutBtn = document.getElementById('logOutBtn');
let data = document.querySelector('.data');
// let updatedName = document.getElementById('stdName');
// let updatedLink = document.getElementById('assignmentLink');
// let updateAssignmentBtn = document.getElementById('updateAssignment');
// let isEdit = null;
let form = document.querySelector('.form')
form.style.height = '0px';
form.style.overflow = 'hidden';

const logOut = () => {
    signOut(auth).then(() => {
        Toastify({
            text: 'Log Out Successfully',  
            duration: 3000   
            }).showToast();
      }).catch((error) => {
        Toastify({
            text: error,  
            duration: 3000   
            }).showToast();
      });
}

logOutBtn.addEventListener('click',logOut)

const getAssignments = async () => {
    data.innerHTML = '';
    try {
        const querySnapshot = await getDocs(collection(db, "assignments"));
        if (querySnapshot.empty) {
            data.innerHTML = 'No Data';
        }
    querySnapshot.forEach((doc) => {
        // console.log(doc.data(),doc.id);
    const {StudentName,AssignmentLink} = doc.data();
    // console.log(StudentName,AssignmentLink);
    data.innerHTML += `
    <div class="card m-auto" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title text-center">${StudentName}</h5>
        <p class="card-text text-center">${AssignmentLink}</p>
    </div>
    </div>
    <!-- <div class='d-flex m-auto mt-3'>
        <button onclick = "editData('${doc.id}',this)" type="button" class="btn btn-secondary me-2">Edit</button>
        <button onclick = "deleteData('${doc.id}',this)" type="button" class="btn btn-danger">Delete</button>   
    </div> -->
    <hr>
    `
    // console.log(`${doc.id} => ${doc.data()}`);
    });
    }
    catch (error) {
        console.log(error);
    }
}

// window.editData = async (id, loader) => {
//     loader.innerText = 'Editing...';
//     try {
//         let currentData = await getDoc(doc(db, "assignments", id));
//         const {StudentName,AssignmentLink} = currentData.data();
//         updatedName.value = StudentName;
//         updatedLink.value = AssignmentLink;
//         isEdit = id;
//         form.style.height = 'auto';
//         form.style.overflow = 'visible';
//         // console.log(StudentName,AssignmentLink);
//     }
//     catch (error){
//         console.log(error);
//     }
//     finally {
//         loader.innerText = 'Edit';
//     }
// }

// const updateData = async () => {
//     // console.log('updated');
//     updateAssignmentBtn.innerText = 'Updating...'
//     try {
//         await updateDoc(doc(db, "assignments", isEdit),{
//              StudentName : updatedName.value,
//              AssignmentLink : updatedLink.value
//         });
//         getAssignments();
//     }
//     catch (error){
//         loader.innerText = 'Delete';
//         console.log(error);
//     }
//     finally {
//         updateAssignmentBtn.innerText = 'Update'
//         form.style.height = '0px';
//         form.style.overflow = 'hidden';
//     }
// }

// updateAssignmentBtn.addEventListener('click',updateData);

// window.deleteData = async (id,loader) => {
//     loader.innerText = 'Deleting...';
//     try {
//         await deleteDoc(doc(db, "assignments", id));
//         getAssignments();
//     }
//     catch (error){
//         loader.innerText = 'Delete';
//         console.log(error);
//     }
// }

getAssignments();

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = '../Login/login.html'
    }
});  