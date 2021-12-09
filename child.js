import pickColor from "./pickColor.js";
import students, { hello } from "./parentA.js";

const h1 = document.createElement("h1");

h1.textContent = hello;
document.querySelector(".container").appendChild(h1);

const myList = document.querySelector("#myList");

students.forEach((name) => {
	const li = document.createElement("li");
	li.textContent = name;
	li.style.color = pickColor();
	myList.appendChild(li);
});
