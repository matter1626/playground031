import React, { useState } from 'react';

function Answers(props) {

    let[userAnswer,setUserAnswer] = useState([]);

    let[count,setCount] = useState({
        right:0,
        wrong:0
    })

    const handleOnChange = (e) => {
        let value = e.target.value;
        userAnswer = {value}
        setUserAnswer(userAnswer);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userAnswer);
        checker();
        document.getElementById("numberInput").value = "";
    }

    const checker = () => {
        if(props.ansy.ans === Number(userAnswer.value)){
            console.log('hurray')
            count.right = count.right +1
            setCount(count)
            props.newQuestion();
        }else{
            console.log('try again')
            count.wrong = count.wrong +1
            setCount(count)
        }
    }

    return (
        <div>

            <div className='bound'>

                <div className='score'>
                    {count.right}
                </div>
                
                <div className='score'>
                    {count.wrong}
                </div>
            
            </div>

            <form onSubmit={handleSubmit}>

                <input
                    className='input' 
                    onChange={handleOnChange} 
                    placeholder='answer' 
                    name='input'
                    autoComplete='off'
                    id='numberInput'
                    ></input>

                <br></br>
                
                <input
                    className='button' 
                    type='submit'></input>
            </form>
        </div>
    );
}

export default Answers;