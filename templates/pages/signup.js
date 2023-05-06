import Link from "next/link";
import Layout from "../components/layout/layout";
import Script from 'next/script'
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import { useRouter } from "next/router";


function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const router = useRouter();

    const onSubmit =  (e) => {
        console.log("handle submit ")

        var session_url = 'http://localhost:8000/userApi/userSignup';
        var authenticationUname = 'admin';
        var authenticationPass = '12345';
        console.log(e.name, e.email, e.password)

        let name = e.name;
        let email = e.email;
        let password = e.password;
    
        axios.post(session_url, {name, email, password}, {
          auth: {
            username: authenticationUname,
            password: authenticationPass
          }
    
        }).then(function(response) {

          console.log(response.data);
          alert(response.data.status)
   
          setname(" ")
          setemail(" ")
          setpassword(" ")
          router.push("/signin");
         
    
        }).catch(function(error) {
          console.log(error, 'Error');
          alert("Error ")
        });
    

           
    
    }

    

    const signUpOnChange = (event) => {

        if(event.target.name == "name") {
            setname(event.target.value)

        } else if(event.target.name == "email") {
            setemail(event.target.value)

        } else if (event.target.name == "password") {
            setpassword(event.target.value)

        }

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
                                            <h3 className="mb-30 font-weight-900"> User Sign Up </h3>
                                        </div>



                                        <form method="POST"  onSubmit={handleSubmit(onSubmit)} >
                                      

                                            <div className="form-group">
                                                <input type="text"   className="form-control" onChange={signUpOnChange}  id="name" name="name" placeholder="Full Name" {...register("name", { required: true })}    />
                                                {errors.name && <span className="bg-danger py-1 px-4 text-white">Please Enter Full Name</span>}
                                            </div>


                                            <div className="form-group">
                                                <input type="email"  className="form-control" onChange={signUpOnChange}  id="email" name="email" placeholder="Email" {...register("email", { required: true })}  />
                                                {errors.email && <span className="bg-danger py-1 px-4 text-white" >Please Enter Your Email</span>}
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" minLength="3" onChange={signUpOnChange} type="password" id="password" name="password" placeholder="Your Password"  {...register("password", { required: true })}  />
                                                {errors.password && <span className="bg-danger py-1 px-4 text-white">Please Enter Your Password</span>}
                                           </div>
                                      
                                            <div className="login_footer form-group">
                                                <div className="chek-form">
                                                    <div className="custome-checkbox">
                                                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox1"><span>I agree to terms &amp; Policy.</span></label>
                                                    </div>
                                                </div>
                                                <a className="text-muted" href="#">Lean more</a>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="button button-contactForm btn-block">Sign Up</button>
                                            </div>
                                        </form>


 

                                        <div className="divider-text-center mt-15 mb-15">
                                            <span> or</span>
                                        </div>
                                        <ul className="btn-login list_none text-center mb-15">
                                            <li><a href="#" className="btn btn-facebook"><i className="elegant-icon social_facebook  mr-5"></i>Facebook</a></li>
                                            <li><a href="#" className="btn btn-google"><i className="elegant-icon social_googleplus mr-5"></i>Google</a></li>
                                        </ul>
                                        <div className="text-muted text-center">Already have an account? <Link href="/signin">
                                            <a>Log In  Now</a>
                                        </Link></div>
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









export default Register;

