import { students } from "./grandParent.js";

console.log("I am in Parent A", students);

students.push("Anna");

const hello = "Hello World !";

export { hello };

export default students;
