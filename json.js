// applicaition programming interface for training module
// learn about json file structure

let jasonfile = {
    "trainingModules": [
        {
            "moduleId": "TM101",
            "title": "Introduction to Programming",
            "description": "Learn the basics of programming using Python.",
            "duration": "4 weeks",
            "lessons": [
                {
                    "lessonId": "L101",
                    "title": "Getting Started with Python",
                    "content": "Introduction to Python programming language, installation, and setup."
                },
                {
                    "lessonId": "L102",
                    "title": "Variables and Data Types",
                    "content": "Understanding variables, data types, and basic operations in Python."
                }
            ]
        },
        {
            "moduleId": "TM102",
            "title": "Web Development Basics",
            "description": "Learn the fundamentals of web development using HTML, CSS, and JavaScript.",
            "duration": "6 weeks",
            "lessons": [
                {
                    "lessonId": "L201",
                    "title": "Introduction to HTML",
                    "content": "Learn the structure of web pages using HTML."
                }]
            }
        ]
    };
    
    
    console.log(jasonfile);
    
    let stringlyTyped = JSON.stringify(jasonfile);
    console.log("stringlyTyped",stringlyTyped);
    
    let parsedData = JSON.parse(stringlyTyped);
    console.log("parsedData",parsedData);

    