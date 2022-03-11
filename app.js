const studentsData = require('./studentsData')
const yargs = require('yargs')
//console.log(yargs.argv)

//Add function require=> id(number), student name(string), optional comment(string), marks array(numbers)
yargs.command({
    command:'Add',
    describe:'Add a student',
    builder:{
        id:{
            describe:'student id(unique)',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'student name',
            demandOption:true,
            type:'string'
        },
        comment:{
            describe:'optional comment',
            type:'string'
        },
        marks:{
            describe:'student marks',
            demandOption:true,
            type:'array'
        }
    },
    handler:(x)=>{
        //some process to implement input inside the function
        studentsData.addStudent(x.id,x.name,x.comment,x.marks)
    }
})

//Read function to retrive data of a student by ID
yargs.command({
    command:'Read',
    describe:'Retrive student info',
    builder:{
        id:{
            describe:'student id',
            demandOption:true,
            type:'number'
        }},
    handler:(x)=>{
        //some process
        studentsData.readStudent(x.id)
    }
})

//List function to retrive all students data
yargs.command({
    command:'List',
    describe:'Retrive all Data',
    handler:()=>{
        //some process
        studentsData.listStudents()
        
    }
})

//Delete function to delete a student data by Id
yargs.command({
    command:'Delete',
    describe:'Delete a student data',
    builder:{
        id:{
            describe:'student id',
            demandOption:true,
            type:'number'
        }},
    handler:(x)=>{
        //some process
        studentsData.deleteStudent(x.id)
    }
})

//console.log(yargs.argv)
yargs.parse() //excute the required only