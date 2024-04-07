// Writing Typescript code ==> Javascript with types 
interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
};
console.log(user.name);

// following is the generated javascript code --:
// var user = {
//     name: "Hayes",
//     id: 0,
// };
// console.log(user.name);
