let student = {
  grade: 7,
  subjects: [
    { name: "math", mark: 90 },
    { name: "science", mark: 60 },
  ],
};

let freezStud = Object.freeze(student);

freezStud.grade = 4;
freezStud.class = "A";

freezStud.subjects[0].mark = 50;// able to modify 

console.log(student);
console.log(Object.isFrozen(student));


sealStud = Object.seal(student);

sealStud.grade = 4;
sealStud.class = "A";

console.log(Object.isSealed(student));
console.log(student);
