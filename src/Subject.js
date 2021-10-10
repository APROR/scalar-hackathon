import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import StarRatings from 'react-star-ratings';
import Axios from 'axios';

function Subject(){
    const [rating, setrating] = useState(0);
    const [files, setFiles] = useState(0);
    
    function openNav(){
        const selectElement = (element) => document.querySelector(element);
            selectElement('.menu-icons').addEventListener('click', () => {
                selectElement('nav').classList.toggle('active');
        });
    }

    function changeRating( newRating){
        setrating(newRating);
      }

    function downloadContent(id){
        window.location.href=`${process.env.REACT_APP_BACKEND_URL}/files/${id}`
    }
    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/subject/files`,{
            params:{
                subject_id:window.location.pathname.split("/")[2]
            }
        })
        .then(res => {
            if(res.status === 200){
                setFiles(res.data.filter(file=>file.subjectId===window.location.pathname.split("/")[2]));
            }
        })
       // window.location.href=`${process.env.REACT_APP_BACKEND_URL}/files/e7c75953-1d67-4ed2-96d7-a783e2c31313`
    }, [])


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
                        <li className='no-color'>
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
               {Array.isArray(files)&&files.map(function(file){
                   return(
                    <div className="card" onClick={()=>downloadContent(file.id)}>
                        <div className="box">
                        <div className="content">
                        <h3 className="title">{file.name}</h3>
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
                   );
               })}
                {/*<div className="card">
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
                </div>*/}
            </div>
            
            <footer>
                <div>&copy; Team APROR</div>
            </footer>
        </div>
    )
}

export default Subject
