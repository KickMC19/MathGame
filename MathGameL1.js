const prompt = require('prompt-sync')();

let GameMode = Number(prompt(`Please select an option - \n\tPress 1 to play Max Score \n\tPress 2 to play three-out \n\tPress 3 to exit`))
if(option === 1){
    function mathQuestions(){
        const eQ = [`+`,`-`,`*`,`/`,`%`]
        const Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        for (let i=0; i<10; i++){
            const num1 = Num[i];
            const num2 = Num[(i+3) % Num.length]+1;
            const eQs = eQ[i%eQ.length];
            let Q;
            if(eQ === `/`){
                const div = num1 * num2;
                Q=`${div}/${num2}`;
            }else if(eQ === `%`){
                const div = num1 + num2;
                Q=`${div}%${num2}`
            }else{
                Q=`${num1}${eQ}${num2}`
            }
            console.log(`Question: ${i+1}:${Q}`)
        }
    }
    mathQuestions();
}
if(option === 2){

}
if(option === 3){

}