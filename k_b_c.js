var question_list = [
    "How many continents are there?",              // pehla question
    "What is the capital of India?",            // doosra question
    "NG mei kaun se course padhaya jaata hai?"   // teesra question
]

var options_list = [
    //pehle question ke liye options
    "Four", "Nine", "Seven", "Eight",
    //second question ke liye options
    "Chandigarh", "Bhopal", "Chennai", "Delhi",
    //third question ke liye options
    "Software Engineering", "Counseling", "Tourism", "Agriculture"
]

// har ek question ke liye, uski solution key (yeh index nahi hai)
var solution_list = [3, 4, 1]
var ans=["seven","Delhi","software Engineering"]
var i=0
var count=0
while (i<question_list.length){
    m=question_list[i]
    console.log(m)

    var j=0
    var k=i
    while (j<options_list[i].length){
        d=options_list[k][j]
        console.log(j+1,d)
        j++}
    
    let readlineSync = require("readline-sync");
    var userinput1=readlineSync.question("do you usnig lifeline")
    if (userinput1=="yes"){
        console.log("50-50");
    
        if (count==0){
            console.log(options_list[i][i]);
            console.log(ans[i]);
        
            var userinput2=readlineSync.question("only now time using lifeline")
            if (userinput2==1){
                console.log("your answer is correct ");
                count++
            }
            else{
                console.log("your answer is wrong")
                break
            }
        }
        else{
            console.log("you can't use more lifeline");
        
            var userinput3=readlineSync.question("choose the answer")
            if (userinput3==solution_list[i]){
                console.log("your ans is correct");
            }
            else{
                Console.log("your answer is wrong");
                break
            }
        }
    }
    else{
        var userinput4=readlineSync.question("choose the answer")
        if (userinput4==solution_list[i]){
            console.log("your answer is coreect")
        }
        else{
            console.log("your answer is wrong")
    
        }i++

    }
}
