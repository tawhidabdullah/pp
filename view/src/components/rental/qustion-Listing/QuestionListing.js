import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchRentals } from "../../../actions/rentalAction";
import RentalList from "./QuestionList";
import ForumFilterListing from "./ForumFilterListing";




// IMPORT CSS
import "../../../styles/rental/_rentalListing.scss";
import "../../../styles/forum/_TopicForum_container.scss"

class QuestionListing extends Component {

    componentWillMount() {
        this.props.dispatch(fetchRentals());
    }
    render() {
        return (

            <div className='conainer'>
                <section id='rentalListing'>
                    {/* <h1 className='page-title'>Problems and programming </h1> */}
                    <div className='TopicForum_container'>
                            <ForumFilterListing />
                        <div className='TopicForum_container-topics'>
                            <RentalList rentals={this.props.rentals} />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        rentals: state.rentals.data
    }
};


export default connect(mapStateToProps)(QuestionListing); 