const modalButton = document.querySelector("#modal-button");
let modalContainer = document.querySelector(".modal-container");
let closeModal = document.querySelector("#close-modal");

modalButton.addEventListener("click", function () {
  modalContainer.style.display = "block";
});
closeModal.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
console.log(closeModal);
