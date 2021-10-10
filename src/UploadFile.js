import Axios from 'axios';
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
      const [file, setFile] = useState('');

      const handleFiles = (e) => {
        setValue(`${e.target.files[0].name}`);
        setFile(`${e.target.files[0]}`);
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
        var bodyFormData = new FormData();
        bodyFormData.append('course_name', e.target.course);
        bodyFormData.append('subjectId', e.target.subject);
        bodyFormData.append('tags', e.target.tags);
        bodyFormData.append('file', file[0], value);
        console.log(file[0], value);
        Axios({
          method: "post",
          url: `${process.env.REACT_APP_BACKEND_URL}/upload`,
          data: bodyFormData,
          headers: { "Content-Type": 'multipart/form-data' },
        })
        .then(res => {
          if(res.status === 200){
            console.log("Uploaded Successfully")
          }
          else{
            console.log("Failed to upload")
          }
        })
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
              name="tags"
              onChange={handleChange1}
              options={options}
              isSearchable
              isMulti
              className='tag-input'
            />
          </div>
          <label className='custom-upload'>
            Attach File
            <input type="file" name="files" accept="application/pdf, application/ms-word, application/vnd.openxmlformats-officedocument.wordprocessingml.document" name='fileupload' id='fileupload' onChange={handleFiles}/>
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