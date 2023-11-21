const arrowbutton = document.querySelector(".arrows");

const arrowUp = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5303 12.2803C14.2374 12.5732 13.7626 12.5732 13.4697 12.2803L10 8.81066L6.53033 12.2803C6.23744 12.5732 5.76256 12.5732 5.46967 12.2803C5.17678 11.9874 5.17678 11.5126 5.46967 11.2197L9.46967 7.21967C9.76256 6.92678 10.2374 6.92678 10.5303 7.21967L14.5303 11.2197C14.8232 11.5126 14.8232 11.9874 14.5303 12.2803Z" fill="#4A4A4A"/>
  </svg>`;

const arrowDown = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71967 8.46967C6.01256 8.17678 6.48744 8.17678 6.78033 8.46967L10.25 11.9393L13.7197 8.46967C14.0126 8.17678 14.4874 8.17678 14.7803 8.46967C15.0732 8.76256 15.0732 9.23744 14.7803 9.53033L10.7803 13.5303C10.4874 13.8232 10.0126 13.8232 9.71967 13.5303L5.71967 9.53033C5.42678 9.23744 5.42678 8.76256 5.71967 8.46967Z" fill="#4A4A4A"/>
  </svg>`;

// Use a data attribute to store the current state
arrowbutton.setAttribute("data-state", "up");
arrowbutton.innerHTML = arrowDown;

const toggleArrow = () => {
  const currentState = arrowbutton.getAttribute("data-state");

  if (currentState === "up") {
    arrowbutton.innerHTML = arrowUp;
    arrowbutton.setAttribute("data-state", "down");
  } else {
    arrowbutton.innerHTML = arrowDown;
    arrowbutton.setAttribute("data-state", "up");
  }
};

arrowbutton.addEventListener("click", toggleArrow);
