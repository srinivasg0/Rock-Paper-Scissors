        //have to understand the concept of localstorage and using JSON within it more clearly 

        let score=JSON.parse(localStorage.getItem('score')) || {  //parse is used to convert the STRING again to OBJECT
            wins: 0,                          //using the || as default operator. when the first part executes the second part defaultly execute
            losses:0,
            ties:0
        };
        
        /*
            if (!score){  // 
                score={
                    wins:0,         //instead of using this we are using the above default operator code.
                    losses:0,       //this is the 'score' object declaring part BUT NOW DONE ABOVE
                    ties:0
                };
            }
        */

        updateScoreElement();

        if(score===null)
        {
            
        }
        function pickComputerMove() //this funtion which picks what the computer chooses
        {
            const randomNumber= Math.random();

            let computerMove='';

            if(randomNumber>=0 && randomNumber< 1/3)
            {
                computerMove='rock';
            }
            else if(randomNumber>=1/3 && randomNumber<2/3)
            {
                computerMove='paper';
            }
            else
            {
                computerMove='scissors';
            }
            return computerMove;
        }

        function playgame(playerMove) //This is the main function aka heart of the game funtion
        {
            const computerMove= pickComputerMove(); //calling the above funtion which picks what the computer chooses
            let result='';
            if(playerMove==='rock')
            {
                if(computerMove==='scissors')
                {
                    result='You win.';
                }
                else if(computerMove==='paper')
                {
                    result='You lose.';
                }
                else{
                    result="Tie."
                }
            } 
            else if(playerMove==='paper') 
            {
                if(computerMove==='scissors')
                {
                    result='You lose.';
                }
                else if(computerMove==='paper')
                {
                    result='Tie.';
                }
                else{
                    result="You win."
                } 
            }

            else if(playerMove==='scissors')
            {
                if(computerMove==='scissors')
                {
                    result='Tie.';
                }
                else if(computerMove==='paper')
                {
                    result='You win.';
                }
                else{
                    result="You lose."
                } 
            }
            
            if(result==='You win.')
            {
                score.wins+=1;
            }else if(result==='You lose.'){
                score.losses+=1;
            }else if(result==='Tie.'){
                score.ties+=1;
            }
            localStorage.setItem('score', JSON.stringify(score)); //we stringify the score object using json and store it in 'score' variable in localstorage

            document.querySelector('.js-result').innerHTML=`${result}`;

            document.querySelector('.js-move').innerHTML=  /* read the next comment for knowing why we are using innerHTML and not innerText*/
            `You
            <img src="${playerMove}-emoji.png" class="move-icon">
            <img src="${computerMove}-emoji.png" class="move-icon">
            Computer.`;
            /*we are using innerHTML because we are not just changing text but we are changing the entire code with <img src> and ${} for the variable dynamically*/
            
            /* alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
            Wins: ${score.wins}, Losses: ${score.losses}, Ties:${score.ties}`);*/

            updateScoreElement();
        
        }

        function updateScoreElement()
        {
            document.querySelector('.js-display-score').innerHTML= `Wins: ${score.wins}, Losses: ${score.losses}, Ties:${score.ties}`;

        }