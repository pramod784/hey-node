let studentdata = [
    {
        "name":"John Doe",
        "rollno":23,
        "calss":"MCA Distinction",
        "address":{
            "city":"New York",
            "state":"NY",
            "country":"USA"
        },
        marks:[85, 90, 78, 92]
    },
    {
        "name":"Jane Smith",
        "rollno":45,
        "calss":"MCA First Class",
        "address":{
            "city":"Los Angeles",
            "state":"CA",
            "country":"USA"
        },
        marks:[88, 76, 91, 85]
    }
];
let updated_studdata = studentdata.map( (student) => {
    
    student.marks = student.marks.map((mark) => {
        return mark+5;
    });

    return student
});
console.log(updated_studdata);

// studentdata.forEach(element => {
//     //console.log("single element",element.marks);
//     element.marks.map( (mark, index) => {
//         console.log(`Mark ${index + 1}: ${mark+5}`);
//     });
//     console.log("------------------------------");
// });
