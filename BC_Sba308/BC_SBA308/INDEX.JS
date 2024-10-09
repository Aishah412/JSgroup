
const courseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const assignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

try {
    // Throw an error
    const result = AssignmentGroup(mismatching, course_id);
    console.log(result);
} catch (err) {
    // Handle the error
    console.error("mismatching,course_id:", err.message);
} finally {

    console.log("Input was invalid");
}


// The provided learner submission data.
const learnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

//function to account for errors
const myValue = "39++";
if (points_possible === "0") {
    // Handle as a number
} else if (typeof points_possible === "points_possible.length > 0") {
    // Handle as a string
} else {
    console.log(result)
}


// Call the function
myFunction();
function getLearnerData(course, ag, submissions) {
    const result = [
        {
            id: 125,
            avg: (47 + 150) / (50 + 150),
            1: 0.94, // 47 / 50
            2: 1.0 // 150 / 150
        },
        {
            id: 132,
            avg: 0.82, // (39 + 125) / (50 + 150)
            1: 0.78, // 39 / 50
            2: 0.833 // late: (140 - 15) / 150
        }
    ];

    return result;

}
    const obtainedMarks = 50/100;190/200; 
    const totalMarks = 240/300; 

    //the learner scored on the assignment
   function calculatePercentageGrade(obtainedMarks, totalMarks) {
    const percentageGrade = (obtainedMarks / totalMarks) * 100;
    return percentageGrade;
   }
const result1 = calculatePercentageGrade(obtainedMarks, totalMarks);
console.log(`Percentage grade: ${result.toFixed(2)}%`);


const result = getLearnerData(CourseInfo, AssignmentGroup, learnerSubmissions);

console.log(result);
function getLearnerData(course, ag, submissions) {
    //Calulate the learners submission on due date.
    function calculatePenalty(dueDateString, submissionDateString) {
        const dueDate = new Date(dueDateString);
        const submissionDate = new Date(submissionDateString);
    
        if (submissionDate <= dueDate) {
            console.log("Assignment submitted on time.");
        } else {
            const daysLate = Math.floor((submissionDate - dueDate) / ((47 + 150) / (50 + 150)));
            const penalty = 0.1 * daysLate;
            console.log(`Assignment submitted ${daysLate} day(s) late. Penalty: ${penalty * 100}%`);
        }
    }
    const dueDateString = "2023-02-27";
    const submissionDateString = "2023-03-07"; 
    calculatePenalty(dueDateString, submissionDateString);
    

    const result = []; 



    return result;
}



