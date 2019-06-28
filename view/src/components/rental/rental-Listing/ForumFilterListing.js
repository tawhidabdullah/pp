import React, { Component } from 'react'; 
import "../../../styles/forum/_forumFilter.scss";

class ForumFilterListing extends Component {
    render() {
        return (
            <div class="containerOfCheckBox clearfix">
                <div class="half-col">
                    <header>
                        <h6>Category</h6>
                    </header>
                    <form style={{
                        width: "100%"
                    }}>
                    <div class="searchTopicInput_container">
                            <input
                                type="text"
                                name="searchTopicInput"
                                placeholder="Search for javascript,Python"
                            />
                            <span className="searchTopicInput_container__icon">
                                <i className="fa fa-search" />
                            </span>
                        </div>
                        <ul>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span class="lbl padding-8">Aparment</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span class="lbl padding-8">House</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span class="lbl padding-8">Cottege</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span class="lbl padding-8">Hotel</span>
                                </label>
                            </li>
                        </ul>
                        
                    </form>
                </div>
            </div>
        )
    }
};


export default ForumFilterListing; 