import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './Home.css'

function EEE() {
    const [open, setOpen] = useState(null);
    const [subjects, setSubjects] = useState(null);
    function openNav(){
        setOpen('active');
    }

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/courses`)
        .then(res => {
            if(res.status === 200){
                setSubjects(res.data);
            }
        })
    }, [])

    return (
        <div>
            <header>
              <div className="container" >
                <nav className={open}>
                    <h1>OneNotes4All</h1>
                    <div className="menu-icons">
                        <i onClick={openNav} className="fas fa-bars"></i>
                        <i onClick={()=>setOpen(null)} className="fas fa-times"></i>
                    </div>
                    <ul className="nav-list">
                        <li className='no-color'>
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
            {Array.isArray(subjects) && subjects.map(function(subject){
                  return(
                  subject.course_name.toUpperCase() === "EEE" &&
                    <div className="card">
                <div className="box">
                    <div className="content">
                    <h3 className="title">{subject.subject_name}</h3>
                    <p className="value">
                        <Link  to={'/'+subject.subject_name+'/'+subject.subject_id}>Read More</Link>
                    </p>
                    </div>
                </div>
                </div>
                  )
                })}
            </div>
            
            <footer>
                <div>&copy; Team APROR</div>
            </footer>
        </div>
    )
}

export default EEE
