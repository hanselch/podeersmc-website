// const tapToShow = document.getElementById("tapShow");
const tapToShow = document.querySelectorAll("#tapShow")
const shownContent = document.querySelectorAll(".shownContent");

let isShown = false;
shownContent[0].style.display = "none"
shownContent[1].style.display = "none"
shownContent[2].style.display = "none"
shownContent[3].style.display = "none"

tapToShow[0].addEventListener("click", () => {
  if (isShown == false) {
    isShown = true;
    shownContent[0].style.display = "block" 
  } else {
    isShown = false;
    shownContent[0].style.display = "none" 
  }
});
tapToShow[1].addEventListener("click", () => {
  if (isShown == false) {
    isShown = true;
    shownContent[1].style.display = "block" 
  } else {
    isShown = false;
    shownContent[1].style.display = "none" 
  }
});
tapToShow[2].addEventListener("click", () => {
  if (isShown == false) {
    isShown = true;
    shownContent[2].style.display = "block" 
  } else {
    isShown = false;
    shownContent[2].style.display = "none" 
  }
});
tapToShow[3].addEventListener("click", () => {
  if (isShown == false) {
    isShown = true;
    shownContent[3].style.display = "block" 
  } else {
    isShown = false;
    shownContent[3].style.display = "none" 
  }
});
