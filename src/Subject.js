import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import StarRatings from 'react-star-ratings';

function Subject(){
    const [rating, setrating] = useState(0);
    
    function openNav(){
        const selectElement = (element) => document.querySelector(element);
            selectElement('.menu-icons').addEventListener('click', () => {
                selectElement('nav').classList.toggle('active');
        });
    }

    function changeRating( newRating){
        setrating(newRating);
      }

    return (
        <div>
            <header>
              <div className="container" >
                <nav>
                    <h1>Notes</h1>
                    <div onClick={openNav} className="menu-icons">
                        <i className="fas fa-bars"></i>
                        <i className="fas fa-times"></i>
                    </div>
                    <ul className="nav-list">
                        <li>
                            <Link to="/">CSE</Link>
                        </li>
                        <li>
                            <Link to="/it">IT
                            </Link>
                        </li>
                        <li>
                            <Link to="/ece">ECE
                            </Link>
                        </li>
                        <li>
                            <Link to="/eee">EEE</Link>
                        </li>
                        <li>
                            <Link to="/mech">MECH
                            </Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </header>
            <div className='container-2'>
                    <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">Unit - 1</h3>
                    <p className="value">
                    <StarRatings
                        rating={rating}
                        starRatedColor="red"
                        changeRating={changeRating}
                        numberOfStars={5}
                        name='rating'
                        starDimension="30px"
                        starSpacing="5px"
                    />
                    </p>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">Unit - 2</h3>
                    <p className="value">
                        Read More
                    </p>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">Unit - 3</h3>
                    <p className="value">
                        Read More
                    </p>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">Unit - 4</h3>
                    <p className="value">
                        Read More
                    </p>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">Unit - 5</h3>
                    <p className="value">
                        Read More
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Subject
