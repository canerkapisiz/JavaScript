const points = [70, 75, 25, 35, 10, 80, 27];

const studentsPassed= points.filter(point =>  point > 50)
console.log(studentsPassed);

const students = [
    {name: 'caner', passed: true},
    {name: 'tuba', passed: false},
    {name: 'elif', passed: false},
    {name: 'osman', passed: true},    
  ];

const passingStudents=students.filter(student =>{
    return student.passed
})

console.log(passingStudents);