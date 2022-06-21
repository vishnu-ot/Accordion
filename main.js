function initAccordian(element, option) {
  console.log("function started");
  document.addEventListener("click", (event) => {
    if (!event.target.matches(`${element} .a-btn`)) return;
    else {
      if (!event.target.parentElement.classList.contains("active")) {
        if (option == true) {
          let accordianContainers = document.querySelectorAll(
            `${element} .a-container`
          );
          accordianContainers.forEach((container) => {
            container.classList.remove("active");
          });
        }
        event.target.parentElement.classList.add("active");
      } else {
        event.target.parentElement.classList.remove("active");
      }
    }
  });
}

initAccordian(".accordion.accordion--primary", true);
initAccordian(".accordion.accordion--secondary", false);
