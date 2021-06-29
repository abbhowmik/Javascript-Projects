// console.log("this is a notes app project");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");

  let notes = localStorage.getItem("notes");

  // let notesObj = [];

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value,
  };

  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  // clearing the addtext value so that no text is being displaying
  addTxt.value = "";
  addTitle.value = "";
  // console.log(notesObj);
  showNotes();
});

// function to showing the notes
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  // let title = "ashis";
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div id="div" class="noteCard mx-3 my-2 card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
           
            
          </div>
        </div> `;
  });

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
               Nothing in your notes, add note by "Add Note" clicking
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
    // notesElm.innerHTML = `<div class="alert alert-info" role="alert">
    //     A simple info alert—check it out!
    //     </div>`;
  }
}

// function to deleting the notes
function deleteNote(index) {
  // console.log("i am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1); // it keep all the notes without this , means it deleted that particular note
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function (element) {
  let searchVal = searchTxt.value.toLowerCase();
  // console.log("input fired!", searchTxt.value);

  let noteCard = document.getElementsByClassName("noteCard");
  Array.from(noteCard).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(searchVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
      // console.log("nothing matched");f
    }
  });
});

// let markBtn = document.getElementById("markBtn");
// markBtn.addEventListener("click", function (element) {
//   element.style.color = "red";
// });

// function marked(index) {
//   console.log("I am marked", index);
//   // document.getElementById("div").style.backgroundColor = "green";
//   let x = document.getElementById("div").querySelector(".card-body");
//   x[0].style.backgroundColor = "red";
// }

{
  /* <div class="card-body">
  <h5 class="card-title">Note No.${index + 1}</h5>
  <p class="card-text">${element}</p>
  <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">
    Delete Note
  </button>
</div>; */
}
