console.log("this is a CV Screener Project");

const data = [
  {
    name: "Rohan Das",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },

  {
    name: "Shubham Sharma",
    age: 28,
    city: "Bangalore",
    language: "JavaScript",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },

  {
    name: "Camella Cabello",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },

  {
    name: "Aishwariya Rai",
    age: 45,
    city: "Mumbai",
    language: "Python",
    framework: "Flask",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
  },

  {
    name: "Rohit Sharma",
    age: 34,
    city: "Jharkhand",
    language: "Go",
    framework: "Go Framework",
    image: "https://randomuser.me/api/portraits/men/89.jpg",
  },
];

function CVIteratorNext(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      if (nextIndex < profiles.length) {
        return {
          value: profiles[nextIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

const candidates = CVIteratorNext(data);
nextCV();
// console.log(candidates.next().value);
// console.log(candidates.next());

let next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV() {
  let currentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if (currentCandidate != undefined) {
    image.innerHTML = `<img src="${currentCandidate.image}">`;
    profile.innerHTML = `<ul class="list-group list-group-flush">
                            <li class="list-group-item">Name- ${currentCandidate.name}</li>
                            <li class="list-group-item">Age- ${currentCandidate.age}</li>
                            <li class="list-group-item">City- ${currentCandidate.city}</li>
                            <li class="list-group-item">Language- ${currentCandidate.language}</li>
                            <li class="list-group-item">Frameworks- ${currentCandidate.framework}</li>
                        </ul>`;
  } else {
    alert("No More Candidate..");
    window.location.reload();
  }
}
