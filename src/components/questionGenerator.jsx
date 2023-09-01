import React, { useEffect, useState } from 'react';

import Answers from './answers';

function Generator() {

    useEffect(()=>{
        generate()
    },[])

    let[question,setQuestion] = useState({
        dividend:18,
        divisor:6,
        ans:3
    })

    let[temp,setTemp] = useState({

    })

    const genNumbers = () => {
        let dividend = Math.floor(Math.random()*100)
        let divisor = Math.floor(Math.random()*10)
        let ans = dividend / divisor
        temp = {dividend,divisor,ans}
        setTemp(temp)
    }

    const generate = () => {

        genNumbers()

        let len = temp.ans.toString().length
        console.log(len)

        if(len < 5){
            console.log('setting question')
            console.log(temp)
            setQuestion(temp)
        }

        if(len >= 5){
            console.log('starting again')
            generate();
        }

    }

    return (<div>
    
        <br></br>

        <div className='quest'>

            <span>{question.dividend}</span>
            <span>&#247;</span>
            <span>{question.divisor}</span>
            <span>&#61;</span>
            <span>{question.ans}</span>

        </div>

        <Answers 
            ansy={question}
            newQuestion={generate}
            />
    
    </div>);
}

export default Generator;