import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

function ECE() {
    const [open, setOpen] = useState(null);
    function openNav(){
        setOpen('active');
    }

    return (
        <div>
            <header>
              <div className="container" >
                <nav className={open}>
                    <h1>Notes</h1>
                    <div className="menu-icons">
                        <i onClick={openNav} className="fas fa-bars"></i>
                        <i onClick={()=>setOpen(null)} className="fas fa-times"></i>
                    </div>
                    <ul className="nav-list">
                        <li>
                            <Link to="/uploadfile" className="invite">Upload File
                            <i className="fas fa-arrow-right"></i>
                            </Link>
                        </li>
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
                        <Link to='/subjectname'>Read More</Link>
                    </p>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">Subject Name</h3>
                    <p className="value">
                        <Link to='/subjectname'>Read More</Link>
                    </p>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">Subject Name</h3>
                    <p className="value">
                        <Link to='/subjectname'>Read More</Link>
                    </p>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">Subject Name</h3>
                    <p className="value">
                        <Link to='/subjectname'>Read More</Link>
                    </p>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">Subject Name</h3>
                    <p className="value">
                        <Link to='/subjectname'>Read More</Link>
                    </p>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">Subject Name</h3>
                    <p className="value">
                        <Link to='/subjectname'>Read More</Link>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            
            <footer>
                <div>&copy; Team APROR</div>
            </footer>
        </div>
    )
}

export default ECE
