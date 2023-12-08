import React from "react";
import AboutHeader from "../Components/About/AboutHeader";
import AboutButton from "../Elements/About/AboutButton";
import AboutHeadline from "../Elements/About/AboutHeadline";
import AboutQuestionTitle from "../Elements/About/AboutQuestionTitle";
import AboutQuestionAnswer from "../Elements/About/AboutQuestionAnswer";
import { RiFacebookCircleFill, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";

function About({ uiState, setUiState }) {
    let questionOne = "What even is This?";
    let answerOne =
        "In simple words, it is a music player without ads or distractions that allows you to listen to FLAC Music Version";
    let questionTwo = "Who made this?";
    let answerTwo =
        "This project was created by Miftakul Azizi. A Computer Applications student, developer, and designer who likes creating awesome things that live on the internet! If you like what you just saw and would like to see more, then scroll below to check his socials!";

    return (
        <div className={`about ${uiState.aboutShown ? "" : "about--hidden"}`}>
            <AboutHeader uiState={uiState} setUiState={setUiState} />
            <div className="about__wrapper">
                {/* Need our headline */}
                <div className="about-group">
                    <p>Hey There,</p>
                    <AboutHeadline content="Welcome to Flacless!" />
                </div>
                {/* Need Questions */}
                <div className="about-group">
                    <AboutQuestionTitle content={questionOne} />
                    <AboutQuestionAnswer content={answerOne} />
                </div>
                <div className="about-group">
                    <AboutQuestionTitle content={questionTwo} />
                    <AboutQuestionAnswer content={answerTwo} />
                </div>

                <hr />

                {/* Second Headline */}
                <div className="about-group">
                    <p>AHzizi</p>
                    <AboutHeadline content="Socials" />
                </div>

                {/* Socials */}
                <div className="about-socials">
                    <div className="about-socials-group">
                        <RiFacebookCircleFill className="about-socials-icon" />
                        <p className="about-socials-text">/miftakul.azizi0</p>
                    </div>
                    <div className="about-socials-group">
                        <RiLinkedinBoxFill className="about-socials-icon" />
                        <p className="about-socials-text">
                            /in/miftakul-azizi-a3887a226
                        </p>
                    </div>
                    <div className="about-socials-group">
                        <RiMailLine className="about-socials-icon" />
                        <p className="about-socials-text">
                            miftakulazizi0@gmail.com
                        </p>
                    </div>
                </div>

                <hr />
                {/* Third Headline */}
                <div className="about-group">
                    <p>Like what you saw?</p>
                    <AboutHeadline content="See his work!" />
                </div>
                {/* Portfolio Button */}
                <AboutButton />
            </div>
        </div>
    );
}

export default About;
