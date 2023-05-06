import Layout from "../../components/layout/layout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

function Index(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  console.log("become author --> ", props)
  
  

  const router = useRouter();

  const [authorname, setauthorname] = useState("");
  const [authordesc, setauthordesc] = useState("");
  const [authorfb, setauthorfb] = useState("");
  const [authortwitter, setauthortwitter] = useState("");
 

  
  
  const onSubmit = (e) => {
    console.log("add author  buttion clicked ");


    let name = e.authorname;
    let description = e.authordesc;
    let fb = e.authorfb;
    let twitter = e.authortwitter;
    let userid = "1"


    console.log(name, description, fb, twitter, userid)

    var session_url = "http://localhost:8000/userApi/createAuthor";
    var authenticationUname = "admin";
    var authenticationPass = "12345";


    axios
      .post(
        session_url,
        { name, description, fb, twitter , userid },
        {
          auth: {
            username: authenticationUname,
            password: authenticationPass,
          },
        }
      )

      .then(function (response) {
        console.log(response.data.status);
        alert(response.data.status)
        let data = response.data;
        console.log(data)

     

        // if (response.data.status == "Welcome to Admin dashboard") {
           
        //   alert("Blog Added Successfully ");
        //   // now here we set set our cookies so we can use it anywhere

        //   router.push("/adminsection/admindashboard");
        // }

        // if (response.data.status == "User Not Exist Please Sign Up") {
        //   alert("User Not Exist Please Sign Up");
        //   router.push("/signup");
        // }

      
          // router.push("/");
      })
      .catch(function (error) {
        console.log(error, "Error");
        alert("Error ");
      });



  };


  const addBlogOnChange = (event) => {

    if (event.target.name == "heading") {
      setheading(event.target.value);
    } else if (event.target.name == "slug") {
      setslug(event.target.value);
    } else if (event.target.name == "tags") {
      settags(event.target.value);
    }  else if (event.target.name == "category") {
      setcategory(event.target.value);
    }  else if (event.target.name == "file") {
      setfile(event.target.value);
    }  else if (event.target.name == "writeblog") {
      setwriteblog(event.target.value);
    }
    
  };

  
  return (
    <>
      <Layout>
        <main className="bg-grey pt-80 pb-50">
          <div className="row">
            <span className="col-lg-2 col-md-1 "></span>

            <div className="col-lg-8 col-md-10 ">
              <div className="login_wrap widget-taber-content p-30 bg-white border-radius-10">
                <div className="padding_eight_all bg-white">
                  <div className="heading_s1 text-center">
                    <h3 className="mb-30 font-weight-900"> Create  Author Profile </h3>
                  </div>

                  <form method="POST" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="authorname"
                        id="authorname"
                        onChange={addBlogOnChange}
                        placeholder="Author Name"
                        {...register("authorname", { required: true })}
                      />

                      {errors.authorname && (
                        <span className="bg-danger py-1 px-4 text-white">
                          Author Name
                        </span>
                      )}
                    </div>


                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="authordesc"
                        id="authordesc"
                        cols="15"
                        rows="5"
                        onChange={addBlogOnChange}
                        placeholder="Author Description"
                        {...register("authordesc", { required: true })}
                      ></textarea>

                        {errors.authordesc && (
                        <span className="bg-danger py-1 px-4 text-white">
                          Author Description
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="url"
                        className="form-control"
                        name="authorfb"
                        id="authorfb"
                        onChange={addBlogOnChange}
                        placeholder="Facebook Url"
                        {...register("authorfb", { required: true })}
                      />

                      {errors.authorfb && (
                        <span className="bg-danger py-1 px-4 text-white">
                       Author Facebook URL 
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="url"
                        className="form-control"
                        name="authortwitter"
                        id="authortwitter"
                        onChange={addBlogOnChange}
                        placeholder="Twitter Url"
                        {...register("authortwitter", { required: true })}
                      />

                      {errors.authortwitter && (
                        <span className="bg-danger py-1 px-4 text-white">
                          Author Twitter URL 
                        </span>
                      )}
                    </div>


                  

                    <div className="form-group text-center">
                      <button
                        type="submit"
                        className="button button-contactForm "
                      >
                        Submit Blog
                      </button>
                    </div>



                  </form>
                </div>
              </div>
            </div>

            <span className="col-lg-2 col-md-1 "></span>
          </div>
        </main>
      </Layout>
    </>
  );
}



// export async function getStaticProps(context) {
//   // console.log("GET request getting --------->>>> ")

//   var session_url = "http://localhost:8000/adminApi/blogCategory";
//   var authenticationUname = "admin";
//   var authenticationPass = "12345";
//   let allCategory;

//   await axios
//     .get(session_url, {
//       auth: {
//         username: authenticationUname,
//         password: authenticationPass,
//       },
//     })

//     .then(function (response) {
//       // console.log("GET request inside function response  ")
//       allCategory = response.data.cats;
//       // console.log(allCategory);
//     })
//     .catch(function (error) {
//       console.log(error, "Error In GET Category ");
//       //  alert("Error ");
//     });

//   return {
//     props: { allCategory }, // will be passed to the page component as props
//   };
// }



export default Index;
