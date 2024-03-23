import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../../Store/Slices/profileSlice";

export default function Register() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [pass, setPass] = useState({
    pass: ""
  });

  const [imageState, setImage] = useState({
    imageState: null
  });

  const processChange = (e) => {
    switch (e.target.name) {
      case "name":
        setData({
          ...data,
          name: e.target.value
        });
        validateTheForm();
        break;

        case "email":
        setData({
          ...data,
          email: e.target.value
        });
        validateTheForm();
        break;

        case "password":
        setData({
          ...data,
          password: e.target.value
        });
        validateTheForm();
        break;

        case "cnfrmPasswd":
          setPass({
            pass: e.target.value
          });
        validateTheForm();
        break;

        case "image":
          setImage({
            imageState: e.target.files[0]
          });
        validateTheForm();
        break;
    
      default:
        break;
    }
  }

  const emailRegexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const noSpaceRegex = /^\S*$/;
  const allowedImageExtensions = ['image/jpg', 'image/png', 'image/jpeg'];

  const [errors, setErrors] = useState({
    name_error: "",
    email_error: "",
    password_error: "",
    password_confirm_error: "",
    image_error: ""
  });

  function validateTheForm() {
    setErrors({
      name_error: !data.name ? "name is required" : !noSpaceRegex.test(data.name) ? 'remove spaces' : '',
      email_error: !data.email ? "email is required" : !emailRegexPattern.test(data.email) ? 'not email format ' : "",
      password_error: !data.password ? "password is required" : data.password.length < 8 || data.password.length > 12 ? 'min is 8 and max is 12' : '',
      password_confirm_error: !pass.pass ? "confirming password is required" : !(pass.pass === data.password) ? 'passwords don\'t match' : '',
      image_error : !imageState.imageState ? "Image is required" : !allowedImageExtensions.includes(imageState.imageState.type) ? 'unwanted format' : ''
    })
  }
  
  const [isSubmittedOrNot, setSubmiited] = useState(false);
  useEffect(() => {
    if (
      !errors.name_error &&
      !errors.email_error &&
      !errors.password_error &&
      !errors.password_confirm_error &&
      !errors.image_error &&
      isSubmittedOrNot
    ) {
      alert('your form is errors-free')
      console.log("update store");
      dispatch(addUserInfo(data));
      console.log(data);
    }
  }, [errors]);


  function handleSubmit(e) {
    e.preventDefault();
    setSubmiited(true);
    validateTheForm();
    // request backend api
  }
  return (
    
    <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route">
   
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
              <div className="row">
                <div className="col-md-6" style={{'margin': 'auto'}}>
                  <div className="title-box-2">
                    <h5 className="title-left">
                      Register a new account ?
                    </h5>
                  </div>
                  <div>
                    <form action="forms/contact.php" method="post" role="form" onSubmit={handleSubmit} className="php-email-form">
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Name" onChange={processChange} />
                            {errors.name_error && <p> {errors.name_error} </p> }
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="Email" onChange={processChange}  />
                            {errors.email_error && <p> {errors.email_error} </p> }
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="text" className="form-control" name="password" placeholder="Password" onChange={processChange}  />
                            {errors.password_error && <p> {errors.password_error} </p> }
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="text" className="form-control" name="cnfrmPasswd" placeholder="Confirm Password" onChange={processChange}  />
                            {errors.password_confirm_error && <p> {errors.password_confirm_error} </p> }
                          </div>
                        </div>

                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <label >upload image</label>
                            <input type="file" className="form-control" name="image" onChange={processChange} />
                            {errors.image_error && <p> {errors.image_error} </p> }
                          </div>
                        </div>

                        <div className="col-md-12 text-center">
                          <button type="submit" onClick={handleSubmit} className="button button-a button-big button-rouded">Save</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}
