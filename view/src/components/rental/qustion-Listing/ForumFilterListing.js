import React, { Component } from 'react';
import "../../../styles/forum/_forumFilter.scss";
import { NavLink } from "react-router-dom";

class ForumFilterListing extends Component {

    render() {
        const mostDiscussedTopics = ['bangladesh', 'Fsadf'];

        const renderMostDiscussedTopic = mostDiscussedTopics.map(topic => {
            return (

                <NavLink
                    activeStyle={{
                        background: "#eee",
                        display: "block"
                    }}
                    className='rental-detail-link'
                    to={`/rentals/${topic}/homes`}>
                    <li>
                        <span class="lbl padding-8">{topic}</span>
                    </li>
                </NavLink>

            )
        })
        return (
            <div class="containerOfCheckBox clearfix">
                <div class="half-col">
                    <header>
                        <h6>Most Discussed Categories</h6>
                    </header>
                    <form style={{
                        width: "100%"
                    }}>
                        <div class="searchTopicInput_container">
                            <input
                                type="text"
                                name="searchTopicInput"
                                placeholder="Search for Topics"
                            />
                            <span className="searchTopicInput_container__icon">
                                <i className="fa fa-search" />
                            </span>
                        </div>
                        <ul>
                            {renderMostDiscussedTopic}
                        </ul>

                    </form>
                </div>
            </div>
        )
    }
};


export default ForumFilterListing; 