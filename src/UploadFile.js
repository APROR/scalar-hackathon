import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function UploadFile() {
    const [values, setValues] = useState({
        email: "",
        password: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
      }

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
            <form className="form-1" onSubmit={handleSubmit} noValidate>
          <div className="form-inputs-1">
            <input
              id="course"
              type="text"
              name="course"
              autoComplete="off"
              className="form-input-1"
              style={{ textAlign: "left", padding: "20px" }}
              required
              placeholder="Course Name"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-inputs-1">
            <input
              id="subject"
              type="text"
              name="subject"
              autoComplete="off"
              className="form-input-1"
              style={{ textAlign: "left", padding: "20px" }}
              required
              placeholder="Subject Name"
              onChange={handleChange}
            ></input>
          </div>
          <input type="file" name='fileupload' id='fileupload' />
          <div className="form-input-btn-1">
            <button type="submit">Upload File</button>
          </div>
        </form>
        </div>
    )
}

export default UploadFile
