import React, { Component } from 'react'; 
import RentalCard from "./QuestionCard";



// IMPORT CSS
import "../../../styles/rental/_rentalListing.scss";


class QuestionList extends Component {

    rentalMapList = () => {
      return this.props.rentals.map((rental,index) => {
            return <RentalCard  key={index} rental={rental} />; 
        }); 
    }; 

    render() {
        return (
            <div className='rw'>
                {this.rentalMapList()}
            </div>
        )
    }
}; 

export default QuestionList; 