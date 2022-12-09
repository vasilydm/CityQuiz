import React from "react";
import classes from './ActiveQuiz.module.css'
import AnswersList from "../AnswersList/AnswersList";

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <div className={classes.enumeration}>
                {props.answerNumber} / {props.quizLength}
            </div>

            <span>
                {props.question}
            </span>
        </p>
        
        <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
        
    </div>
)

export default ActiveQuiz