let HandlePhotoSelect = false;
let phselect = document.querySelector(".phselect");
let selectText = document.querySelector("#selectText");
let phselectList = document.querySelector(".phselectList");
let selectListOne = document.querySelector("#selectListOne");
let photoBox = document.querySelector(".photoBox");
let phSelectTextList = ["街拍", "人像"];
let phSelectTextOne = "街拍";
let phSelectTextTwo = "人像";
let footerReload = false;
console.log(selectText.textContent);
let photoList = [
  {
    src: "../assets/images/photo/first.jpg",
    name: 0,
    direction: false,
  },
  {
    src: "../assets/images/photo/1.jpg",
    name: 1,
    direction: true,
  },
  {
    src: "../assets/images/photo/2.jpg",
    name: 2,
    direction: true,
  },
  {
    src: "../assets/images/photo/3.jpg",
    name: 3,
    direction: false,
  },
  {
    src: "../assets/images/photo/4.jpg",
    name: 4,
    direction: false,
  },
  {
    src: "../assets/images/photo/5.jpg",
    name: 5,
    direction: false,
  },
  {
    src: "../assets/images/photo/6.jpg",
    name: 6,
    direction: false,
  },
  {
    src: "../assets/images/photo/7.jpg",
    name: 7,
    direction: true,
  },
  {
    src: "../assets/images/photo/8.jpg",
    name: 8,
    direction: true,
  },
  {
    src: "../assets/images/photo/9.jpg",
    name: 9,
    direction: true,
  },
  {
    src: "../assets/images/photo/10.jpg",
    name: 10,
    direction: false,
  },
  {
    src: "../assets/images/photo/11.jpg",
    name: 11,
    direction: true,
  },
  {
    src: "../assets/images/photo/12.jpg",
    name: 12,
    direction: true,
  },
  {
    src: "../assets/images/photo/13.jpg",
    name: 13,
    direction: true,
  },
  {
    src: "../assets/images/photo/14.jpg",
    name: 14,
    direction: true,
  },
  {
    src: "../assets/images/photo/15.jpg",
    name: 15,
    direction: true,
  },
  {
    src: "../assets/images/photo/66.jpg",
    name: 16,
    direction: true,
  },
  {
    src: "../assets/images/photo/17.jpg",
    name: 17,
    direction: true,
  },
  {
    src: "../assets/images/photo/18.jpg",
    name: 18,
    direction: false,
  },
  {
    src: "../assets/images/photo/19.jpg",
    name: 19,
    direction: true,
  },
  {
    src: "../assets/images/photo/20.jpg",
    name: 20,
    direction: false,
  },
  {
    src: "../assets/images/photo/21.jpg",
    name: 21,
    direction: false,
  },
  {
    src: "../assets/images/photo/22.jpg",
    name: 22,
    direction: false,
  },
  {
    src: "../assets/images/photo/23.jpg",
    name: 23,
    direction: false,
  },
  {
    src: "../assets/images/photo/24.jpg",
    name: 24,
    direction: true,
  },
  {
    src: "../assets/images/photo/25.jpg",
    name: 25,
    direction: true,
  },
  {
    src: "../assets/images/photo/26.jpg",
    name: 26,
    direction: true,
  },
  {
    src: "../assets/images/photo/27.jpg",
    name: 27,
    direction: true,
  },
  {
    src: "../assets/images/photo/28.jpg",
    name: 28,
    direction: true,
  },
  {
    src: "../assets/images/photo/29.jpg",
    name: 29,
    direction: true,
  },
  {
    src: "../assets/images/photo/30.jpg",
    name: 30,
    direction: false,
  },
];

let photoPeopleList = [
  {
    src: "../assets/images/photo/people/people1.jpg",
    name: "people1",
    direction: true,
  },
  {
    src: "../assets/images/photo/people/people2.jpg",
    name: "people2",
    direction: true,
  },
  {
    src: "../assets/images/photo/people/people3.jpg",
    name: "people3",
    direction: true,
  },
  {
    src: "../assets/images/photo/people/people4.jpg",
    name: "people4",
    direction: true,
  },
  {
    src: "../assets/images/photo/people/people5.jpg",
    name: "people5",
    direction: true,
  },
  {
    src: "../assets/images/photo/people/people6.jpg",
    name: "people6",
    direction: true,
  },
  {
    src: "../assets/images/photo/people/people7.jpg",
    name: "people7",
    direction: true,
  },
  {
    src: "../assets/images/photo/people/people8.jpg",
    name: "people8",
    direction: true,
  },
  {
    src: "../assets/images/photo/people/people9.jpg",
    name: "people9",
    direction: false,
  },
  {
    src: "../assets/images/photo/people/people10.jpg",
    name: "people10",
    direction: true,
  },
  {
    src: "../assets/images/photo/people/people11.jpg",
    name: "people11",
    direction: true,
  },
];

function HandlePhotoSelectFn() {
  HandlePhotoSelect = !HandlePhotoSelect;
  if (HandlePhotoSelect) {
    phselectList.classList.add("phselectList_handle");
  } else {
    phselectList.classList.remove("phselectList_handle");
  }
  // console.log(HandlePhotoSelect.value)
}
function switchPhSelectTextFn() {
  if (selectText.textContent == "街拍") {
    selectText.innerText = "人像";
    selectListOne.innerHTML = "街拍";

    // phSelectTextOne = "人像";
    // phSelectTextTwo = "街拍";
    photoFinalList = photoPeopleList;
    footerReload = true;
    photoBox.innerHTML = "";
    randerPhotoList(photoFinalList);
    // reloadTl();

    // console.log(photoFinalList);
  } else if (selectText.textContent == "人像") {
    selectText.innerText = "街拍";
    selectListOne.innerHTML = "人像";

    // phSelectTextOne = "街拍";
    // phSelectTextTwo = "人像";
    photoFinalList = photoList;
    footerReload = true;
    photoBox.innerHTML = "";
    randerPhotoList(photoFinalList);
    // reloadTl();
    // console.log(photoFinalList);
  }
}

let phtoBoxList = null;
function randerPhotoList(list) {
  list.forEach((child) => {
    photoBox.innerHTML += `
        <div  class="worksChildPhotoBox"  >
            <img class='' src=${child.src} alt="">
        </div>
    `;
  });
}
photoFinalList = photoList;
randerPhotoList(photoFinalList);
