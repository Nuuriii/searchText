function Button() {
   alert("Maaf Tapi tombol Button Masih Belum Bisa Dipakai");
}

let search = prompt("Mau Cari Apa?");

const list = document.querySelector(".output");
const list2 = document.querySelector("#notSearch");
list.innerHTML = "";
const greetings = [
   "Belajar Js",
   "Halo Dunia",
   "Javascript dari awal",
   "Javascript DOm",
   "Javascript Modern",
];

for (const greeting of greetings) {
   // Your conditional test needs to go inside the parentheses
   // in the line below, replacing what's currently there
   if (greeting.includes(search)) {
      const listItem = document.createElement("li");
      listItem.textContent = greeting;
      list.appendChild(listItem);
   }
}
