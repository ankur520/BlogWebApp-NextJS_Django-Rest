import Link from "next/link";
import Layout from "../components/layout/layout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import { useRouter } from "next/router";
var jwt = require('jsonwebtoken');


function Login() {



    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const router = useRouter();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    // const [fetchAdminForms, setfetchAdminForms] = useState(props.allAdminDetails)




    const onSubmit =  (e) => {
        // console.log("login buttion clicked ")

        let name = e.email
        let password = e.password
        

        var session_url = 'http://localhost:8000/userApi/userLogin';
        var authenticationUname = 'admin';
        var authenticationPass = '12345';

        axios.post(session_url, {name, password}, {
          auth: {
            username: authenticationUname,
            password: authenticationPass
          }
    
        }).then(function(response) {

          console.log(response.data);
          // alert(response.data.status)
          let data = response.data
          // console.log(data)

          let loggedName = response.data.name
          let loggedEmail = response.data.email
          let loggedPassword = response.data.password
          let loggedUser = "True"

          if(response.data.status == "Welcome to User dashboard" ) {

            var token = jwt.sign({loggedName: loggedName, loggedEmail, loggedPassword, loggedUser }, 'usersecretkey', {expiresIn: "2d"} );
            // console.log("token \n" , token)
            localStorage.setItem("usertoken", token)

            alert("User Sign In Successfull")
            // now here we set set our cookies so we can use it anywhere 
            
            router.push("/userdashboard")
          }
          
          if(response.data.status == "User Not Exist Please Sign Up" ) {
            alert("User Not Exist Please Sign Up");
            router.push("/signup")
          }
   
          setemail("")
          setpassword("")
        //   router.push("/signin");
         
    
        }).catch(function(error) {
          console.log(error, 'Error');
          alert("Error ")
        });
        
      
    }



  return (
    <>
      <Layout>

        
        <main className="bg-grey pt-80 pb-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-md-10">
                <div className="login_wrap widget-taber-content p-30 bg-white border-radius-10">
                  <div className="padding_eight_all bg-white">
                    <div className="heading_s1 text-center">
                      <h3 className="mb-30 font-weight-900">User Login Panel</h3>
                    </div>

                    <form method="POST" onSubmit={handleSubmit(onSubmit)} >
                      <div className="form-group">
                        <input
                          type="text"
                       
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          {...register("email", { required: true })} 
                        />
                         {errors.email && <span className="bg-danger py-1 px-4 text-white">Please Enter Your Email</span>}

                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                            id="password"
                          type="password"
                          name="password"
                          placeholder="Your Password"
                          {...register("password", { required: true })} 
                        />
                         {errors.password && <span className="bg-danger py-1 px-4 text-white">Please Enter Your Password</span>}
                        
                      </div>
                      <div className="login_footer form-group">
                        <div className="chek-form">
                          <div className="custome-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkbox"
                              id="exampleCheckbox1"
                              value=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleCheckbox1"
                            >
                              <span>Remember me</span>
                            </label>
                          </div>
                        </div>
                        <a className="text-muted" href="#">
                          Forgot password?
                        </a>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="button button-contactForm btn-block"
                        >
                          Log in
                        </button>
                      </div>
                    </form>

                    <div className="divider-text-center mt-15 mb-15">
                      <span> or</span>
                    </div>
                    <ul className="btn-login list_none text-center mb-15">
                      <li>
                        <a href="#" className="btn btn-facebook">
                          <i className="elegant-icon social_facebook  mr-5"></i>
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-google">
                          <i className="elegant-icon social_googleplus mr-5"></i>
                          Google
                        </a>
                      </li>
                    </ul>
                    <div className="text-muted text-center">
                      Don't Have an Account ?{" "}
                      <Link href="/signup">
                        <a>Sign up now</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}




export default Login;
