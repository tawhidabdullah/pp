import React, { Component } from 'react';
import  "../../styles/sass/main.scss";
import AddNewQuestion from "../components/AddNewQuestion/AddNewQuestion";
import UserProfile from "../components/UserProfile/UserProfile";
import QuestionsContent from "../components/QuestionsContent/QuestionsContent";


export default class Dashboard extends Component {
    state = {
        isAddNewQuestion: false,
        isUserProfile: true,
        isQuestions: false,
    };


    renderAddNewQuestion = () => {
        this.setState({
            isAddNewQuestion: true,
            isUserProfile: false,
            isQuestions: false
        })
    };

    renderUserProfile = () => {
        this.setState({
            isAddNewQuestion: false,
            isUserProfile: true,
            isQuestions: false
        })
    };

    renderQuestions = () => {
        this.setState({
            isAddNewQuestion: false,
            isUserProfile: false,
            isQuestions: true
        })
    };

    renderBookings = () => {
        this.setState({
            isAddNewQuestion: false,
            isUserProfile: false,
            isQuestions: false,
        });


    }

    renderPendingBookings = () => {
        this.setState({
            isAddNewQuestion: false,
            isUserProfile: false,
            isQuestions: false,
        });
    }


    render() {
        const { isAddNewQuestion, isUserProfile, isQuestions } = this.state;
        return (
            <div class="container__of-dashboard">
                {/* <header class="header">
                    {/* <img src="img/logo.png" alt="dashboard logo image" class="logo" /> */}
                    {/* <form action="#" class="search">
                        <input type="text" class="search__input" placeholder="search yourself" />
                        <button class="search__button">

                        </button>
                    </form>
                    <nav class="user-nav"> */}
                        {/* <div class="user-nav__icon-box">
                     
                        <span class="user-nav__notifiction user-nav__notifiction--1">34</span>
                    </div>
                    <div class="user-nav__icon-box">
                        
                        <span class="user-nav__notifiction user-nav__notifiction--2">4</span>
                    </div>
                    <div class="user-nav__user">
                        <img src="img/logo.png" alt="this is a user photo" class="user-nav__user-photo" />
                        <span class="user-nav__user-name">Tawhid</span>
                    </div> */}
                    {/* </nav> */}
                {/* </header> */} */}
                <div class="content">
                    <nav class="sidebar">
                        <ul class="side-nav">
                            <li
                                class={isAddNewQuestion ?
                                    "side-nav__item side-nav__item--active" :
                                    " side-nav__item"}
                                onClick={this.renderAddNewQuestion}
                            >

                                <a href="#" class="side-nav__link">
                                    <i className='fa fa-edit' ></i>
                                    <span class="side-nav__text">Add New Question</span>
                                </a>
                            </li>
                            <li class={isQuestions ?
                                "side-nav__item side-nav__item--active" :
                                " side-nav__item"}
                                onClick={this.renderQuestions}
                            >
                                <a href="#" class="side-nav__link">
                                    <i className='fa fa-retweet'></i>
                                    <span class="side-nav__text">Questions</span>
                                </a>
                            </li>
                            <li
                                class={isUserProfile ?
                                    "side-nav__item side-nav__item--active" :
                                    " side-nav__item"}
                                onClick={this.renderUserProfile}>
                                <a href="#" class="side-nav__link">
                                    <i className='fa fa-user'></i>
                                    <span class="side-nav__text">User Profile</span>
                                </a>
                            </li>
                        </ul>

                        <div class="legal">
                            &copy; 2019 copyright , All right reserve by Tawhid Abdullah
                    </div>
                    </nav>
                    <main class="dashboard__main-content">
                        {isAddNewQuestion ? <AddNewQuestion /> : ""}
                        {isUserProfile ? <UserProfile /> : ""}
                        {isQuestions ? <QuestionsContent /> : ""}
                    </main>
                </div>
            </div>
        )
    }
}
