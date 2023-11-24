const closeBtn = document.querySelector(".close-btn");
const addCon = document.querySelector(".ad-con");
const arrowbutton = document.querySelector(".arrows");
const componentContainer = document.querySelector(".component-con");
const component = document.querySelectorAll(".component");
const profileBtn = document.querySelector(".profile-btn");
const profileModal = document.querySelector(".nav-ul");
const bellBtn = document.querySelector(".bell-con");
const bellModal = document.querySelector(".bell-modal");

closeBtn.addEventListener("click", () => {
addCon.style.display = "none"
})

profileBtn.addEventListener("click", () => {
    bellModal.classList.remove("component-hide");
  profileModal.classList.toggle("component-hide")
})
bellBtn.addEventListener("click", () => {
    profileModal.classList.remove("component-hide");
  bellModal.classList.toggle("component-hide")
})
bellModal.addEventListener("click", (event) => {
  event.stopPropagation();
 
});

// document.body.addEventListener("click", () => {
//   bellModal.classList.remove("component-hide")
  
// })



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

const loadingcon = document.querySelectorAll(".com-progress");
const loading1 = `<svg class="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/>
</svg>`;
const loadingIcon = `<div class="loading-container">
        <div class="l-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/>
            </svg>
        </div>
        <div class="l-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="l-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#D9D9D9" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="l-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="l-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
          <div class="l-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
      d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
      fill="#fff"
    ></path>
  </svg></div>
    </div>
`;


 
// loadingcon.forEach((elem) => {
//   elem.innerHTML = loading1;
// });
const count = document.querySelector(".count");

let currentProgress = 0;
let counter = 0;

count.textContent = 0;

const checkBoxes = document.querySelectorAll(".checkbox");
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
  counter++;
  updateProgress();
};

const markStepIncomplete = (index) => {
  checkBoxes[index].checked = false;
  counter--;
  updateProgress();
};

checkBoxes.forEach((checkBox, index) => {
  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      markStepCompleted(index);
      // Expand the next incomplete step if available
      const nextIncompleteStep = Array.from(carouselItems).find(
        (item, i) => i > index && !item.classList.contains("component-onclick")
      );
      if (nextIncompleteStep) {
        handleComponentClick({ currentTarget: nextIncompleteStep });
      }
    } else {
      markStepIncomplete(index);
    }
  });
});

const progressBar = document.querySelector(".bar");

const updateProgress = () => {
  currentProgress = Math.min(5, counter);
  progressBar.style.width = `${currentProgress * 20}%`;
  count.textContent = counter;
};


const loadingcontainer = document.querySelectorAll(".loading-container");

const hoverIcon = `<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>`;

loadingcontainer.forEach((elem) => {
  elem.innerHTML = loading1;

  // elem.addEventListener("mousein", () => {
  //   elem.innerHTML = hoverIcon;
  // });

  // elem.addEventListener("mouseleave", () => {
  //   elem.innerHTML = loading1;
  // });

  elem.addEventListener("click", () => {
    if (elem.classList.contains("loadingIcon")) {
      elem.innerHTML = loading1;
    } else {
      elem.innerHTML = loadingIcon;
    }
    elem.classList.toggle("loadingIcon");
  });
});

// 

// function showLoadingIcon() {
//   const loadingIcons = document.querySelectorAll(".loading-container .l-icon");

//   loadingIcons.forEach((icon, index) => {
//     setTimeout(() => {
//       icon.classList.toggle("show");
//     }, index * 100);
//   });
//   }





    