const closeBtn = document.querySelector(".close-btn");
const addCon = document.querySelector(".ad-con");
const arrowbutton = document.querySelector(".arrows");
const componentContainer = document.querySelector(".component-con");
const component = document.querySelectorAll(".component");
const profileBtn = document.querySelector(".profile-btn");
const profileModal = document.querySelector(".nav-ul");
const bellBtn = document.querySelector(".bell-btn");
const bellModal = document.querySelector(".bell-modal");

closeBtn.addEventListener("click", () => {
addCon.style.display = "none"
})
profileBtn.addEventListener("click", () => {
  let panel = profileModal;

  if (panel.style.display === "block") {
    panel.style.display = "none";
     profileBtn.ariaLabel = "profile menue is collapse";
  } else {
    panel.style.display = "block";
    profileBtn.ariaLabel = "profile menue is expanded";
    bellModal.style.display = "none";
  }
});

bellBtn.addEventListener("click", () => {
  let panel = bellModal;

  if (panel.style.display === "block") {
    panel.style.display = "none";
      bellBtn.ariaLabel = "notification is collapse";
  } else {
    panel.style.display = "block";
    bellBtn.ariaLabel = "notification is expanded"
    profileModal.style.display = "none";
  }
});

bellModal.addEventListener("click", (event) => {
  event.stopPropagation();
});



const arrowUp = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5303 12.2803C14.2374 12.5732 13.7626 12.5732 13.4697 12.2803L10 8.81066L6.53033 12.2803C6.23744 12.5732 5.76256 12.5732 5.46967 12.2803C5.17678 11.9874 5.17678 11.5126 5.46967 11.2197L9.46967 7.21967C9.76256 6.92678 10.2374 6.92678 10.5303 7.21967L14.5303 11.2197C14.8232 11.5126 14.8232 11.9874 14.5303 12.2803Z" fill="#4A4A4A"/>
  </svg>`;

const arrowDown = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71967 8.46967C6.01256 8.17678 6.48744 8.17678 6.78033 8.46967L10.25 11.9393L13.7197 8.46967C14.0126 8.17678 14.4874 8.17678 14.7803 8.46967C15.0732 8.76256 15.0732 9.23744 14.7803 9.53033L10.7803 13.5303C10.4874 13.8232 10.0126 13.8232 9.71967 13.5303L5.71967 9.53033C5.42678 9.23744 5.42678 8.76256 5.71967 8.46967Z" fill="#4A4A4A"/>
  </svg>`;

arrowbutton.setAttribute("data-state", "up");
arrowbutton.innerHTML = arrowUp;

const toggleArrow = () => {
  const currentState = arrowbutton.getAttribute("data-state");

  if (currentState === "up") {
    arrowbutton.innerHTML = arrowUp;
    arrowbutton.setAttribute("data-state", "down");
    componentContainer.classList.add("component-hide");
  } else {
    arrowbutton.innerHTML = arrowDown;
    arrowbutton.setAttribute("data-state", "up");
    componentContainer.classList.remove("component-hide");
  }
};

arrowbutton.addEventListener("click", toggleArrow);
const checkBoxes = document.querySelectorAll(".check-container");
const loaderDots = document.querySelectorAll(".loader-dot");
const loaderSpiners = document.querySelectorAll(".loader-spinner");
const loaderMarks = document.querySelectorAll(".loader-mark");
const checkboxStatus = document.querySelectorAll(".checkboxStatus");

const mark_as_done = "completed";

const markCompletedIcon = (index) => {
  const loaderSpiner = loaderSpiners[index];

  loaderDots[index].classList.add("hidden");
  loaderSpiner.classList.add("show-spinner");
  checkboxStatus[index].ariaLabel = "Checkbox loading....";

  setTimeout(() => {
    loaderSpiner.classList.remove("show-spinner");
    loaderMarks[index].classList.add("mark");
    checkBoxes[index].setAttribute(
      "aria-label",
      checkBoxes[index]
        .getAttribute("aria-label")
        .replace("as not done", "as done")
    );
    checkboxStatus[index].ariaLabel = "Successfully marked checkbox";
  }, 2000);

  checkBoxes[index].classList.add(mark_as_done);
};

const markNotCompletedIcon = (index) => {
  const loaderSpiner = loaderSpiners[index];

  loaderMarks[index].classList.remove("mark");
  loaderDots[index].classList.add("hidden");
  loaderSpiner.classList.add("show-spinner");
  checkboxStatus[index].ariaLabel = "Checkbox loading....";

  setTimeout(() => {
    loaderSpiner.classList.remove("show-spinner");
    loaderDots[index].classList.remove("hidden");

    checkBoxes[index].setAttribute(
      "aria-label",
      checkBoxes[index]
        .getAttribute("aria-label")
        .replace("as done", "as not done")
    );
    checkboxStatus[index].ariaLabel = "Successfully unchecked checkbox";
  }, 2000);

  checkBoxes[index].classList.remove(mark_as_done);
};


const count = document.querySelector(".count");

let currentProgress = 0;
let counter = 0;

count.textContent = 0;


const carouselContainer = document.querySelector(".component-con");
const carouselItems = document.querySelectorAll(".component");
const contentShow = document.querySelectorAll(".com-content");
let prevClickedComponent = null;

const handleComponentClick = (event) => {
  const com = event.currentTarget;

  if (prevClickedComponent !== null && prevClickedComponent !== com) {
    prevClickedComponent.classList.remove("component-onclick");
    prevClickedComponent.querySelector(".com-content").style.height = "17px";
  }

  const content = com.querySelector(".com-content");
  const isClicked = com.classList.toggle("component-onclick");

  if (isClicked) {
    content.style.height = "100%";
  } else {
    content.style.height = "17px";
  }

  prevClickedComponent = isClicked ? com : null;
};

component.forEach((com) => {
  com.addEventListener("click", (event) => {
    handleComponentClick(event);
  });
});

document.body.addEventListener("click", (event) => {
  const clickedElement = event.target;

  if (!clickedElement.closest(".component")) {
    if (prevClickedComponent !== null) {
      prevClickedComponent.classList.remove("component-onclick");
      prevClickedComponent.querySelector(".com-content").style.height = "17px";
      prevClickedComponent = null;
    }
  }

});

const markStepCompleted = (index) => {
  checkBoxes[index].checked = true;
  counter--;
  updateProgress();
};

const markStepIncomplete = (index) => {
  checkBoxes[index].checked = false;
  counter++;
  updateProgress();
};


const progressBar = document.querySelector(".bar");

const updateProgress = () => {
  currentProgress = Math.min(5, counter);
  progressBar.style.width = `${currentProgress * 20}%`;
  count.textContent = counter;
};




checkBoxes.forEach((checkBox, index) => {
  checkBox.addEventListener("click", () => {
    if (checkBox.classList.contains(mark_as_done)) {
      markNotCompletedIcon(index);
      markStepCompleted(index);
      const nextIncompleteStep = Array.from(carouselItems).find(
        (item, i) => i > index && !item.classList.contains("component-onclick")
      );
      if (nextIncompleteStep) {
        handleComponentClick({ currentTarget: nextIncompleteStep });
      }
    } else {
      markCompletedIcon(index);
      markStepIncomplete(index);
    }
  });
});
