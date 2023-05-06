import Layout from "../../components/layout/layout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
var jwt = require("jsonwebtoken");
import Link from "next/link";

function Index(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // console.log("sfdasdfsad", props.allCategory)

  const router = useRouter();

  const [category, setcategory] = useState(props.allCategory);

  const  onSubmit  = async (e) => {
    console.log("category Button clickec clicked ");

    let category = e.category;
    let createdby = "Ajay Pratap Singh";

    var session_url = "http://localhost:8000/adminApi/blogCategory";
    var authenticationUname = "admin";
    var authenticationPass = "12345";

    await axios.post(
        session_url,
        { category, createdby },
        {
          auth: {
            username: authenticationUname,
            password: authenticationPass,
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        alert(response.data.status);
        // setcategory("");
        router.push("/adminsection/addcategory")
      
      })
      .catch(function (error) {
        console.log(error, "Error");
        alert("Error ");
      });
  };

  return (
    <>
      <Layout>
        <main className="bg-grey pt-80 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="login_wrap widget-taber-content p-30 bg-white border-radius-10">
                  <div className="padding_eight_all bg-white">
                    <div className="heading_s1 text-center">
                      <h3 className="mb-30 font-weight-900">Create Category</h3>
                    </div>

                    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="category"
                          id="category"
                          placeholder="Enter category"
                          {...register("category", { required: true })}
                        />
                        {errors.category && (
                          <span className="bg-danger py-1 px-4 text-white">
                            Please Enter Your Category
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <button
                          type="submit"
                          className="button button-contactForm btn-block"
                        >
                          Add Category
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="login_wrap widget-taber-content p-30 bg-white border-radius-10">
                  <div className="padding_eight_all bg-white">
                    <div className="heading_s1 text-center">
                      <h3 className="mb-30 font-weight-900">All Categories</h3>

                      <table className="table">
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">S . No </th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Created By</th>
                            <th scope="col">Date</th>
                          </tr>
                        </thead>

                        <tbody>
                          {category.map((item) => {
                            return (
                              <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td> {item.category} </td>
                                <td>{item.createdby}</td>
                                <td>{item.date}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                        
                      </table>
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
