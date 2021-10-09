import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

function MECH() {
    function openNav(){
        const selectElement = (element) => document.querySelector(element);
            selectElement('.menu-icons').addEventListener('click', () => {
                selectElement('nav').classList.toggle('active');
        });
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
                    <h3 className="title">Subject Name</h3>
                    <p className="value">
                        <Link to='cse/subjectname'>Read More</Link>
                    </p>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">Subject Name</h3>
                    <p className="value">
                        <Link to='cse/subjectname'>Read More</Link>
                    </p>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">Subject Name</h3>
                    <p className="value">
                        <Link to='cse/subjectname'>Read More</Link>
                    </p>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">Subject Name</h3>
                    <p className="value">
                        <Link to='cse/subjectname'>Read More</Link>
                    </p>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">Subject Name</h3>
                    <p className="value">
                        <Link to='cse/subjectname'>Read More</Link>
                    </p>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">Subject Name</h3>
                    <p className="value">
                        <Link to='cse/subjectname'>Read More</Link>
                    </p>
                    </div>
                </div>
                </div>
            </div>

            <div className='container-1'>
                <div className='vertical-center'>
                    <button className='button-container'><Link to="/uploadfile">Upload a File</Link></button>
                </div>
    </div>
        </div>
    )
}

export default MECH
