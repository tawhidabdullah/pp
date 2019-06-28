import React from 'react';
import "../../../styles/forum/_forumCard.scss";
import { Link } from "react-router-dom";
import { rentalType } from "../../../helpers/index";

const RentalCar = ({ rental }) => {
  const { title, city, category, dailyRate, image, shared, _id } = rental;
  return (
    <section class="cards">
      <article class="reverse-horizontal forumCard" style={{
        background: "#fff"
      }}>
        {/* <img class="forumCard__img" src="https://picsum.photos/256/196/?image=161" class="forumCard__image" /> */}
        <div class="forumCard__content">
          <div class="forumCard__type">article</div>
          <div class="forumCard__title">
            Test Post: Electric Boogaloo
          </div>
          <div class="forumCard__date">14 March 2011 &middot; 5 min read</div>
          <div class="forumCard__excerpt">
            This is a test article, in a perculiar context, to see whether grid and flexbox works to make a blog...
          </div>
          <div class="forumCard__tags">
            <div class="tag"><i class="fa fa-tag"></i>test</div>
            <div class="tag"><i class="fa fa-tag"></i>test</div>
          </div>
        </div>
      </article>
    </section>

  )
}

export default RentalCar;


/*
<div className='col-md-3 col-xs-6'>
          <Link className='rental-detail-link' to={`/rentals/${_id}`}>
              <div className='card bwm-card'>
                <img className='card-img-top' src={`/${image}`} alt=''></img>
                <div className='card-block'>
                  <h6 className={`card-subtitle ${category}`}>
                     {rentalType(shared)} {category} &#183; {city}
                  </h6>
                  <h4 className='card-title'>{title}</h4>
                  <p className='card-text'>${dailyRate} per Night &#183; Free Cancelation</p>

                </div>
              </div>
          </Link>
      </div>


*/