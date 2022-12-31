import React from "react";
import classes from './ActiveQuiz.module.css'
import AnswersList from "../AnswersList/AnswersList";

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <span className={classes.Question}>
            <div className={classes.enumeration}>
                {props.answerNumber} / {props.quizLength}
            </div>

            <span>
                {props.question}
            </span>
        </span>
        
        <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        >
        </AnswersList>
    </div>
)

export default ActiveQuiz