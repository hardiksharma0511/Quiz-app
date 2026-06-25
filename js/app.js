const questions = [
{
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a"
},
{
    que: "Which language is used for styling web pages?",
    a: "HTML",
    b: "CSS",
    c: "Python",
    d: "Java",
    correct: "b"
},
{
    que: "Which language is used to make web pages interactive?",
    a: "C++",
    b: "Java",
    c: "JavaScript",
    d: "SQL",
    correct: "c"
},
{
    que: "Which HTML tag is used to create a hyperlink?",
    a: "<img>",
    b: "<a>",
    c: "<link>",
    d: "<h1>",
    correct: "b"
},
{
    que: "Which CSS property changes the text color?",
    a: "font-size",
    b: "background-color",
    c: "color",
    d: "text-align",
    correct: "c"
},
{
    que: "Which symbol is used for single-line comments in JavaScript?",
    a: "<!-- -->",
    b: "/* */",
    c: "#",
    d: "//",
    correct: "d"
},
{
    que: "Which company developed JavaScript?",
    a: "Microsoft",
    b: "Google",
    c: "Netscape",
    d: "Apple",
    correct: "c"
},
{
    que: "Which keyword is used to declare a constant in JavaScript?",
    a: "let",
    b: "var",
    c: "const",
    d: "static",
    correct: "c"
},
{
    que: "Which HTML tag is used to insert an image?",
    a: "<image>",
    b: "<img>",
    c: "<picture>",
    d: "<src>",
    correct: "b"
},
{
    que: "Which method is used to print output in the browser console?",
    a: "print()",
    b: "document.write()",
    c: "console.log()",
    d: "alert()",
    correct: "c"
}
];

let index =0;
let total = questions.length;
let right = 0, wrong =0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const  loadQuestion = () =>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    //console.log(data);
    quesBox.innerText  = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
        if(ans === data.correct){
            right++;
        }
        else{
            wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
                answer =  input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <div style="text-align:center; padding:30px;">
            <h2>🎉 Quiz Completed!</h2>
            <br>
            <h3>Thank You for Taking the Quiz</h3>
            <br>
            <h2>Your Score</h2>
            <h1 style="color:#2980b9;">${right} / ${total}</h1>
            <p>You answered <b>${right}</b> questions correctly.</p>
            <br><hr><br>
            <p style="font-size:14px; color:gray;">
                Developed by <b>Hardik Sharma</b>
            </p>
        </div>
    `;
}
//initial call
loadQuestion()