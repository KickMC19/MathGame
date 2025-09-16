const prompt = require('prompt-sync')();
while(true){
    let option = Number(prompt(`Please select an option - \n\tPress 1 to play Max Score \n\tPress 2 to play three-out \n\tPress 3 to exit \n\tOption: `))
    console.log(`typeos option:`, typeof option, "| Value:", option);
    console.log(`You selected: `,option)
    if(option === 1){
        mathQuestions();
    }
    else if(option === 2){

    }
    else if(option === 3){
        break;
    }
    else{
        console.log(`Invalid option, program end.`)
        break;
    }
}

function mathQuestions(){
    console.log(`mathQuestions started`)
    const eQ = [`+`,`-`,`*`,`/`,`%`]
    const Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (let i=0; i<20; i++){
        const num1 = Num[i % Num.length];
        const num2 = Num[(i + 3) % Num.length] + 1;
        const eQs = eQ[i % eQ.length];
        let Q;
        if(eQs === `/`){
            const div = num1 * num2;
            Q=`${div} / ${num2}`;
        }else if(eQs === `%`){
            const div = num1 + num2;
            Q=`${div} % ${num2}`
        }else{
            Q=`${num1} ${eQs} ${num2}`
        }
        console.log(`Question: ${i+1}:${Q}`)
    }
    console.log(`mathQuestions end`)
}