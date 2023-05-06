import Link from "next/link";
import Layout from "../../components/layout/layout";
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
        

        var session_url = 'http://localhost:8000/adminApi/adminLogin';
        var authenticationUname = 'admin';
        var authenticationPass = '12345';

        axios.post(session_url, {name, password}, {
          auth: {
            username: authenticationUname,
            password: authenticationPass
          }
    
        }).then(function(response) {

          // console.log(response.data);
          // alert(response.data.status)
          let data = response.data
          // console.log(data)

          let loggedName = response.data.name
          let loggedEmail = response.data.email
          let loggedPassword = response.data.password
          let loggedUser = "True"

          if(response.data.status == "Welcome to Admin dashboard" ) {

            var token = jwt.sign({name: "ajayjwtsign", loggedName: loggedName, loggedEmail, loggedPassword, loggedUser }, 'youhavetochangethissecretinproduction', {expiresIn: "2d"} );
          
            localStorage.setItem("admintoken", token)
            // console.log("token signin.js \n" , token)
            alert("Admin Sign In Successfull")
            // now here we set set our cookies so we can use it anywhere 
            
            router.push("/adminsection/admindashboard")
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
                      <h3 className="mb-30 font-weight-900">Admin Login Panel</h3>
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


                    <div className="text-muted text-center">
                      Don't Have an Admin Account ?{" "}
                      <Link href="signup">
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


// export async function getStaticProps(context) {
//     var session_url = "http://localhost:8000/AdminSignUp/";
//     var authenticationUname = "admin";
//     var authenticationPass = "12345";
//     let allAdminDetails;
  
//     await axios
//       .get(session_url, {
//         auth: {
//           username: authenticationUname,
//           password: authenticationPass,
//         },
//       })

//       .then(function (response) {
//         // console.log("Authenticated");
//         allAdminDetails = response.data.results;
//         // console.log(response.data.results);
//       })

//       .catch(function (error) {
//         // console.log("Error", error);
//       });
  
//     return {
//       props: {
//         allAdminDetails,
//       }, // will be passed to the page component as props
//     };
//   }

export default Login;
