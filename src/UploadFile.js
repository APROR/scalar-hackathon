import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select';

const options = [
  { value: 'I Semester', label: 'I Semester' },
  { value: 'II Semester', label: 'II Semester' },
  { value: 'III Semester', label: 'III Semester' },
  { value: 'IV Semester', label: 'IV Semester' },
  { value: 'V Semester', label: 'V Semester' },
  { value: 'VI Semester', label: 'VI Semester' },
  { value: 'VII Semester', label: 'VII Semester' },
  { value: 'VIII Semester', label: 'VIII Semester' },
];

function UploadFile() {
    const [values, setValues] = useState({
        email: "",
        password: "",
      });

      const[selectedOption, setSelectedOption] = useState('');
      const [value, setValue] = useState('');

      const handleFiles = (e) => {
        setValue(`${e.target.files[0].name}`);
      }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

      const handleChange1 = (selectedOption) =>{
        setSelectedOption(selectedOption);
      }

      const handleSubmit = (e) => {
        e.preventDefault();
      }

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
            <div className='form-content-right-1'>
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
          <div className='form-inputs-1'>
            <Select
              value={selectedOption}
              onChange={handleChange1}
              options={options}
              isSearchable
              isMulti
              className='tag-input'
            />
          </div>
          <label className='custom-upload'>
            Attach File
            <input type="file" accept="application/pdf, application/ms-word, application/vnd.openxmlformats-officedocument.wordprocessingml.document" name='fileupload' id='fileupload' onChange={handleFiles}/>
            <i class="fas fa-paperclip"></i>
            <div style={{marginTop: '0.5rem'}}>{value}</div>
          </label>
          <div className="form-input-btn-1">
            <button type="submit">Upload File</button>
          </div>
        </form>
        </div>
            <img src="/img/upload.png" className="form-img-1" alt='Book'/>
        </div>
    )
}

export default UploadFile