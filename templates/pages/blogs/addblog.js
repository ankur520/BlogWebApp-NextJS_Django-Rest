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

  
  
  const [dropdownCategory, setdropdownCategory] = useState(props.allCategory);


  const router = useRouter();

  const [heading, setheading] = useState("");
  const [slug, setslug] = useState("");
  const [tags, settags] = useState("");
  const [category, setcategory] = useState("");
  const [file, setfile] = useState("");
  const [writeblog, setwriteblog] = useState("");


  
  
  const onSubmit = (e) => {
    console.log("add blog  buttion clicked ");


    let heading = e.heading;
    let slug = e.slug;
    let tags = e.tags;
    let category = e.category;
    let file = e.file;
    let writeblog = e.writeblog;

    console.log(heading, slug, tags, category, file, writeblog)

    var session_url = "http://localhost:8000/blogApi/addBlog";
    var authenticationUname = "admin";
    var authenticationPass = "12345";

    axios
      .post(
        session_url,
        { heading, slug, tags, category,file , writeblog  },
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
                    <h3 className="mb-30 font-weight-900">Add Blog</h3>
                  </div>

                  <form method="POST" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="heading"
                        id="heading"
                        onChange={addBlogOnChange}
                        placeholder="Enter Heading"
                        {...register("heading", { required: true })}
                      />

                      {errors.heading && (
                        <span className="bg-danger py-1 px-4 text-white">
                          Please Enter Your Heading
                        </span>
                      )}
                    </div>


                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="slug"
                        id="slug"
                        onChange={addBlogOnChange}
                        placeholder="Enter slug"
                        {...register("slug", { required: true })}
                      />

                      {errors.slug && (
                        <span className="bg-danger py-1 px-4 text-white">
                          Please Enter  slugs
                        </span>
                      )}
                    </div>


                
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="tags"
                        id="tags"
                        onChange={addBlogOnChange}
                        placeholder="Enter tags"
                        
                        {...register("tags", { required: true })}
                      />

                      {errors.tags && (
                        <span className="bg-danger py-1 px-4 text-white">
                          Please Enter Tags
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <select
                      
                        name="category"
                        id="category"
                        className="form-select form-control "
                        aria-label="Default select example"
                        {...register("category", { required: true })}
                      >
                        <option>Please Select Category </option>
                        
                        {dropdownCategory.map((item) =>  {
                          return ( 
                            <option value= {item.category} > {item.category} </option>
                           )
                        }) }

                      
                      
                      </select>

                      {errors.category && (
                        <span className="bg-danger py-1 px-4 text-white">
                          Please Select category
                        </span>
                      )}

                    </div>

                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        aria-label="file example"
                        id="file"
                        onChange={addBlogOnChange}
                        name="file"
                        
                        {...register("file", { required: true })}
                      />
                      <div className="invalid-feedback">
                        Example invalid form file feedback
                      </div>

                      {errors.file && (
                        <span className="bg-danger py-1 px-4 text-white">
                          Please select file
                        </span>
                      )}

                    </div>

                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="writeblog"
                        id="writeblog"
                        cols="30"
                        rows="9"
                        onChange={addBlogOnChange}
                        placeholder="Write Blog"
                        {...register("writeblog", { required: true })}
                      ></textarea>

                        {errors.writeblog && (
                        <span className="bg-danger py-1 px-4 text-white">
                          Please Enter Your Blog
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



export async function getStaticProps(context) {
  // console.log("GET request getting --------->>>> ")

  var session_url = "http://localhost:8000/adminApi/blogCategory";
  var authenticationUname = "admin";
  var authenticationPass = "12345";
  let allCategory;

  await axios
    .get(session_url, {
      auth: {
        username: authenticationUname,
        password: authenticationPass,
      },
    })

    .then(function (response) {
      // console.log("GET request inside function response  ")
      allCategory = response.data.cats;
      // console.log(allCategory);
    })
    .catch(function (error) {
      console.log(error, "Error In GET Category ");
      //  alert("Error ");
    });

  return {
    props: { allCategory }, // will be passed to the page component as props
  };
}



export default Index;
