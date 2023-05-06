import Link from "next/link";
import Layout from "../../components/layout/layout";
import PostCarousel1 from '../../components/slider/PostCarousel1';
import axios from 'axios'
import { useRouter } from "next/router";
import {useState} from "react"

function Caregory(props) {



    const [catdetail, setcatdetail] = useState(props.allcats);

    const router = useRouter();
    const { category } = router.query;
  
    // console.log(props.allcats);
  
    // let articleHeading, articleSlug, articleTags, articleCategory, articleViews, articleLikes, articleParagraph, articleCreatedBy, articleDate ;
    
  
    // {catdetail.map((item) => {
    //   return (
  
    //       <>
  
    //        {articleHeading  = item.heading}
    //       {articleSlug  = item.slug}
    //       {articleTags  = item.tags}
    //       {articleCategory  = item.category}
    //       {articleViews  = item.views}
    //       {articleLikes  = item.likes}
    //       {articleParagraph  = item.article}
    //       {articleCreatedBy  = item.createdby}
    //       {articleDate  = item.date}
          
    //       </>
          
      
  
    //   );
    // })}

    



    return (
        <>
            <Layout>

                <main>
                    {/* <!--archive header--> */}
                    <div className="archive-header pt-50">
                        <div className="container">
                            <h2 className="font-weight-900">{category}</h2>
                            <div className="breadcrumb">
                                <Link href="/">
                                    <a rel="nofollow">
                                        Home
                                    </a>
                                </Link>
                                <span></span> {category}
                            </div>
                            <div className="bt-1 border-color-1 mt-30 mb-50"></div>
                        </div>
                    </div>


                    <div className="container">
                        <div className="loop-grid mb-30">

                            <div className="row">


                                {catdetail.map( (catitem) => {
                                    return (

                                        <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated">
                                        <div className="post-card-1 border-radius-10 hover-up">
                                            <div
                                                className="post-thumb thumb-overlay img-hover-slide position-relative"
                                                style={{
                                                    backgroundImage:
                                                        "url(../assets/imgs/news/news-3.jpg)",
                                                }}
                                            >
                                                <Link  href= {`/blogs/${catitem.slug}/`}   >
                                                    <a className="img-link"></a>
                                                </Link>
                                                <ul className="social-share">
                                                    <li>
                                                        <Link href="/#">
                                                            <a>
                                                                <i className="elegant-icon social_share"></i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <a
                                                                className="fb"
                                                                title="Share on Facebook"
                                                                target="_blank"
                                                            >
                                                                <i className="elegant-icon social_facebook"></i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <a
                                                                className="tw"
                                                                target="_blank"
                                                                title="Tweet now"
                                                            >
                                                                <i className="elegant-icon social_twitter"></i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <a
                                                                className="pt"
                                                                target="_blank"
                                                                title="Pin it"
                                                            >
                                                                <i className="elegant-icon social_pinterest"></i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="post-content p-30">
                                                <div className="entry-meta meta-0 font-small mb-10">
                                                    <Link  href={`/category/${catitem.category}/`}   >
                                                        <a>
                                                            <span className="post-cat text-warning">
                                                                {catitem.category}
                                                            </span>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="d-flex post-card-content">
                                                    <h5 className="post-title mb-20 font-weight-900">
                                                        <Link  href= {`/blogs/${catitem.slug}/`}   >
                                                            <a>
                                                            {catitem.heading}
                                                            </a>
                                                        </Link>
                                                    </h5>

                                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                        <span className="post-on">
                                                        {catitem.date}
                                                        </span>
                                                        <span className="time-reading has-dot">
                                                            8 mins read
                                                        </span>
                                                        <span className="post-by has-dot">
                                                        {catitem.likes}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>


                                     )



                                } )}




                                




                            </div>
                        </div>
                    </div>


























                </main>
            </Layout>
        </>
    );
}





export async function getStaticPaths() {
    var session_url = "http://localhost:8000/adminApi/blogCategory";
  
    var authenticationUname = "admin";
    var authenticationPass = "12345";
    let allcats;
  
    await axios
      .get(session_url, {
        auth: {
          username: authenticationUname,
          password: authenticationPass,
        },
      })
  
      .then(function (response) {
        // console.log("GET request inside function response  ")
        allcats = response.data.cats;
        // console.log(allcats);
      })
  
      .catch(function (error) {
        console.log(error, "Error In GET allBlogs ");
        //  alert("Error ");
      });
  
    const paths = allcats.map((fetchdata) => {
      return {
        params: { category: fetchdata.category.toString() },
      };
    });
  
    return {
      paths,
      fallback: true,
    };
  }
  

  //   console.log(getStaticPaths())
  
  export async function getStaticProps(context) {
    const { category } = context.params;
  
    // console.log("GET request getting --------->>>> ");
    // console.log({ category });
  
    var session_url = `http://localhost:8000/blogApi/getBlogwithcat/${category}/`;
    // console.log(session_url);
  
    var authenticationUname = "admin";
    var authenticationPass = "12345";
    let allcats;
  
    await axios
      .get(session_url, {
        auth: {
          username: authenticationUname,
          password: authenticationPass,
        },
      })
  
      .then(function (response) {
        // console.log("GET request inside function response &&&&&&&&&& ");
        allcats = response.data.blogswithcat;
        // console.log(allcats);
        // console.log("status ", response.data.status);
      })
      .catch(function (error) {
        console.log(error, "Error In GET allBlogs ");
        //  alert("Error ");
      });
  
    return {
      props: { allcats }, // will be passed to the page component as props
    };
  }

  

export default Caregory;
