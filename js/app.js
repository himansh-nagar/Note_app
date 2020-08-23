
console.log("Welcome to notes app. This is Himanshu's Note app");
showNotes();
// If user add a notes its added to the localStroage;

let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click",function(e){
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle")
    let notes = localStorage.getItem("notes");
    if(addTxt.value==''){
        return console.log("This will not go in")
    }
    if(notes==null){
        notesObj=[]
    }else{
        notesObj=JSON.parse(notes);
    }
    let myobj = {
        title:addTitle.value,
        text:addTxt.value
    }
    notesObj.push(myobj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    addTitle.value="";
    showNotes();
});

//  Function to show elements from localstroage

function showNotes() {
    let notes = localStorage.getItem("notes");

    if(notes==null){
        notesObj=[]
    }else{
        notesObj=JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
        html+=`<div class="noteCard" >
        <div class="card-body">
            <h5 class="card-title">${index+1}. ${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id="${index}" type="submit"
            onclick="deleteNote(this.id)"  class="btn delete-btn">Delete Note</button>
        </div>
    </div>`
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length!= 0 ){
        notesElm.innerHTML=html;
    }else{
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

//  Function to delete a note

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj=[]
    }else{
        notesObj=JSON.parse(notes);
    }   
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
