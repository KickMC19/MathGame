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
    console.log(`You selected: ${option}`)
    if(option === 1){
        maxScore();
    }
    else if(option === 2){
        threeOut();
    }
    else if(option === 3){
        console.log(`Exiting Program`);
        break;
    }
    else{
        console.log(`Invalid option, program end.`);
        break;
    }
}

function maxScore(){
    console.log(`\nMax Score started`);
    const eQ = [`+`,`-`,`*`,`/`,`%`];
    let score = 0;
    let seed = Date.now();
    function randomNum(min, max){
        seed = (seed * 1664525 + 1013904223) % 4294967296;
        return min + (seed % (max - min + 1));
    }
    for (let i=0; i<20; i++){
        const num1 = randomNum(1, 100);
        const num2 = randomNum(1, 100);
        const eQs = eQ[randomNum(0, eQ.length - 1)];
        let Q;
        let correctAns;
        if(eQs === `/`){
            const divs = randomNum(1, 10);
            const quo = randomNum(1, 10);
            const div = divs * quo;
            Q = `${div} / ${divs}`;
            correctAns = quo;
        }   else if(eQs === `%`){
            const base = randomNum(1, 50);
            const mod = randomNum(1, 50);
            const div = base + mod;
            Q = `${div} % ${mod}`;
            correctAns = div % mod;
        }   else{
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

function threeOut(){
    console.log(`\nThree-Out Started`);
    const eQ = [`+`,`-`,`*`,`/`,`%`];
    let score = 0;
    let lives = 0;
    let seed = Date.now();
    function randomNum(min, max){
        seed = (seed * 1664525 + 1013904223) % 4294967296;
        return min + (seed % (max - min + 1));
    }
    let questionNum = 1;
    while(lives < 3){
        const num1 = randomNum(1, 100);
        const num2 = randomNum(1, 100);
        const eQs = eQ[randomNum(0, eQ.length - 1)];
        let Q, correctAns;
        if(eQs === `/`){
            const divs = randomNum(1, 10);
            const quo = randomNum(1, 10);
            const div = divs * quo;
            Q = `${div} / ${divs}`;
            correctAns = quo;
        }   else if (eQs === `%`){
            const base = randomNum(1, 50);
            const mod = randomNum(1, 10);
            const div = base + mod;
            Q = `${div} % ${mod}`;
            correctAns = div % mod;
        }   else{
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