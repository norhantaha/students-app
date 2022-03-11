const fs = require('fs')


//ADD
const addStudent=(id,name,comment,marks) =>{
    const students = loadStudents()
    const duplicatedStudents= students.filter((obj)=>{
       return obj.id ===id
    })
    console.log(duplicatedStudents)
    if(duplicatedStudents.length == 0){
        students.push({
            id,
            name,
            comment,
            marks
           // total
        })
        saveStudent(students)
       // sum(students[id].total)
        console.log("Student saved successfully")
    }
    else{
        console.log("Duplicated ID Try Again")
    }
}

//Total summition of marks
/*const sum=(marks)=>{
    sum=0;
    for(let i=0;i < marks.length; i++){
        sum= sum + marks[i];
    }
    return sum;
}
*/

//LOAD
const loadStudents =()=>{
    try{
        const dataBuffer= fs.readFileSync('students.json').toString()
        return JSON.parse(dataBuffer)  //To return object
    }
    catch{
        return []
    }
   
}
//SAVE
const saveStudent =(students) =>{
    const saveData = JSON.stringify(students)
    fs.writeFileSync('students.json',saveData)
}

//DELETE
const deleteStudent = (id) =>{
    const students=loadStudents()
    const studentsToKeep = students.filter((obj)=>{
        return obj.id !== id
    })
    //console.log(studentsToKeep)
    console.log(studentsToKeep)
    saveStudent(studentsToKeep)
    console.log("Deleted")
}

//READ
const readStudent= (id) =>{
    const students=loadStudents()
    const student= students.find((obj)=>{
        return obj.id == id
    })
    console.log(student)
    if(student){
        console.log(student.name, student.comment, student.marks)
    }
    else{
        console.log("NOT FOUND")
    }
}

//LIST
const listStudents = ()=>{
    const students= loadStudents()
    students.forEach((el)=>{
        console.log(el.id, el.name, el.comment,el.marks)
    })
}

//to share the functions with app.js
module.exports={
    addStudent,
    deleteStudent,
    readStudent,
    listStudents
}