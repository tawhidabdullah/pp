import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchRentals } from "../../../actions/rentalAction";
import RentalList from "./RentalList";
import ForumFilterListing from "./ForumFilterListing";



// IMPORT CSS
import "../../../styles/rental/_rentalListing.scss";
import "../../../styles/forum/_TopicForum_container.scss"; 

class RentalSearchListing extends Component {

    state = {
        searchedCity: ""
    };

    componentWillMount() {
        this.searchRentalsByCity(); 
    };

    componentDidUpdate(prepProps){
        const currentUrlParams = this.props.match.params.city; 
        const prevUrlParams = prepProps.match.params.city;

        if(currentUrlParams !== prevUrlParams) this.searchRentalsByCity(); 
    }

    searchRentalsByCity() {
        const searchedCity = this.props.match.params.city;
        this.setState({
            searchedCity
        })
        this.props.dispatch(fetchRentals(searchedCity));
    }

    renderTitle = () => {
        const {errors,data} = this.props.rentals; 
        const searchedCity = this.state.searchedCity; 
        let title = ''; 

        if(errors.length > 0){
            title = errors[1].detail; 
             
        }
        if (data.length > 0) {
            title = `Your Home in a City of "${searchedCity}"`; 
        }
       
        return  <h1 className='page-title'>{title}</h1>
    }


    render() {
        // console.log(this.props);
        return (

            <div className='conainer' style={{
                paddingTop: "80px"
            }}>
                 <section id='rentalListing'>
                 {this.renderTitle()}
                    <div className='TopicForum_container'>
                            <ForumFilterListing />
                        <div className='TopicForum_container-topics'>
                        <RentalList rentals={this.props.rentals.data} />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
};



const mapStateToProps = (state) => {
    return {
        rentals: state.rentals
    }
};


export default connect(mapStateToProps)(RentalSearchListing); 