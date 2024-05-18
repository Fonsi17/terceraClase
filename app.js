const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const contactList = document.getElementById("contact-list");
const error = document.getElementById("error");

function addContact() {
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  if (name === "" || phone === "") {
    error.textContent = "Por favor, complete los dos campos.";
    return;
  }
  error.textContent = ""; 
  const contactItem = document.createElement("li");
  contactItem.classList.add("contact-item");
  const nameSpan = document.createElement("span");
  nameSpan.classList.add("contact-name");
  nameSpan.textContent = `Nombre: ${name}`; //recordar que el orden de los componetes afecta
  const phoneSpan = document.createElement("span");
  phoneSpan.classList.add("contact-phone");
  phoneSpan.textContent = `Teléfono: ${phone}`;
  contactItem.appendChild(nameSpan);
  contactItem.appendChild(phoneSpan);
  contactList.appendChild(contactItem);
  nameInput.value = "";
  phoneInput.value = "";
}
