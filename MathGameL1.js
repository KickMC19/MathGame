const prompt = require('prompt-sync')();
while(true){     
    console.log("Please select an option:");
    console.log("Option 1 - Max Score Mode");;
    console.log("Option 2 - Three-Out Mode");
    console.log("Option 3 - Exit");
    const input = prompt("Enter option: ").trim();
    console.log("");
    const option = Number(input);

    if(Number.isNaN(option)){
        console.log("Invalid input. Please enter a number.");
        continue;
    }

    if(option === 3){
        console.log(`Exiting Program`);
        break;
    }
    let mode = "";
    if(option === 1) mode = "Max Score Mode";
    else if(option === 2) mode = "Three-Out Mode";
    else{
        console.log(`Invalid option, program end.`);
        break;
    }
    console.log(`You selected option ${option} - ${mode}\n`)

    console.log("Select Difficulty:")
    console.log("Option 1 - Easy");
    console.log("Option 2 - Medium");
    console.log("Option 3 - Hard");
    const difInput = prompt("Choose difficulty:").trim();
    const dif = Number(difInput)
    if(Number.isNaN(dif) || dif < 1 || dif > 3){
        console.log("Not an option. ending program");
        break;
    }
    const difName = {
        1: "Easy",
        2: "Medium",
        3: "Hard"
    };
    console.log(`You selected difficulty ${dif} - ${difName[dif]}\n`)

    if(option ===1){
        maxScore(dif)
    }else if(option === 2){
        threeOut(dif)
    }
}
function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxScore(dif){
    console.log(`\nMax Score started [Difficulty: ${dif === 1 ? "Easy" : dif === 2 ? "Medium" : "Hard"}]\n`);
    const eQ = [`+`,`-`,`*`,`/`,`%`];
    let score = 0;
    
    for (let i=0; i<20; i++){
        let num1, num2, eQs;
        if(dif === 1){
            num1 = randomNum(1, 9);
            num2 = randomNum(1, 9);
            eQs = [`+`, `-`][randomNum(0, 1)];
        }else if(dif === 2){
            eQs = eQ[randomNum(0, eQ.length - 1)];
            if(eQs === `+` || eQs === `-`){
                num1 = randomNum(1, 99);
                num2 = randomNum(1, 99);
            }else {
                num1 = randomNum(1, 9);
                num2 = randomNum(1, 9);
            }
        }else {
            eQs = eQ[randomNum(0, eQ.length - 1)];
            if(eQs === `+` || eQs === `-`){
                num1 = randomNum(1, 999);
                num2 = randomNum(1, 999);
            }else{
                num1 = randomNum(1, 99);
                num2 = randomNum(1, 9);
            }
        }
        let Q, correctAns;

        if(eQs === `/`){
            const divs = randomNum(1, 10);
            const quo = randomNum(1, 10);
            const div = divs * quo;
            Q = `${div} / ${divs}`;
            correctAns = quo;
        }else if(eQs === `%`){
            const base = randomNum(1, 50);
            const mod = randomNum(1, 50);
            const div = base + mod;
            Q = `${div} % ${mod}`;
            correctAns = div % mod;
        }else{
            Q=`${num1} ${eQs} ${num2}`;
            correctAns = eval(Q);
        }
        console.log(`Question ${i+1}: ${Q} = ?\n`);
        const ans = prompt("Answer (or type `skip`): ").trim().toLowerCase();
        if(ans === "skip"){
            console.log("Skipped question");
            console.log(`Your score is: ${score}`);
            console.log(`---------------------------\n`);
            continue;
        }
        if(Number(ans) === correctAns){
            console.log(`Correct!`);
            score += 10;
        }   else{
                console.log(`That's the wrong numba! It was ${correctAns}`);
                score -= 5;
        }
        console.log(`Your score is: ${score}`);
        console.log(`---------------------------\n`);
    }
    console.log(`Max Score end`);
    console.log(`Your final score is: ${score}`);
}

function threeOut(dif){
    console.log(`\nThree-Out Started [Difficulty: ${dif === 1 ? "Easy" : dif === 2 ? "Medium" : "Hard"}]\n`);
    const eQ = [`+`,`-`,`*`,`/`,`%`];
    let score = 0;
    let lives = 0;
    let questionNum = 1;

    while(lives < 3){
        let num1, num2, eQs;
        if(dif === 1){
            num1 = randomNum(1, 9);
            num2 = randomNum(1, 9);
            eQs = [`+`, `-`][randomNum(0, 1)];
        }else if(dif === 2){
            eQs = eQ[randomNum(0, eQ.length - 1)];
            if(eQs === `+` || eQs === `-`){
                num1 = randomNum(1, 99);
                num2 = randomNum(1, 99);
            }else {
                num1 = randomNum(1, 9);
                num2 = randomNum(1, 9);
            }
        }else {
            eQs = eQ[randomNum(0, eQ.length - 1)];
            if(eQs === `+` || eQs === `-`){
                num1 = randomNum(1, 999);
                num2 = randomNum(1, 999);
            }else{
                num1 = randomNum(1, 99);
                num2 = randomNum(1, 9);
            }
        }
        let Q, correctAns;

        if(eQs === `/`){
            const divs = randomNum(1, 10);
            const quo = randomNum(1, 10);
            const div = divs * quo;
            Q = `${div} / ${divs}`;
            correctAns = quo;
        }else if (eQs === `%`){
            const base = randomNum(1, 50);
            const mod = randomNum(1, 10);
            const div = base + mod;
            Q = `${div} % ${mod}`;
            correctAns = div % mod;
        }else{
            Q = `${num1} ${eQs} ${num2}`;
            correctAns = eval(Q);
        }
        console.log(`Question ${questionNum++}: ${Q} = ?\n`);
        const ans = prompt("Answer: ").trim().toLowerCase();

        if(Number(ans) === correctAns){
            console.log("Correct!");
            score += 10;
        }   else{
            console.log(`That's the wrong Numba! It was ${correctAns}`);
            lives += 1;
            console.log(`Used lives: ${lives} / 3`);
        }
    }
    console.log(`Three-Out end`);
    console.log(`Your final score was: ${score}`);
}