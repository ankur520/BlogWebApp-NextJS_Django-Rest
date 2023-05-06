import Link from "next/link";
import Layout from "../../components/layout/layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

function Author(props) {
  const router = useRouter();
  const { author } = router.query;

  console.log(props)

  let authorData = props.authordata[0]
  // console.log(authorData.name)

  // console.log("authordet --> ", props.authordet)
  // console.log("authorblogs --> ", props.authorblogs)

  
  const [authdetail, setauthdetail] = useState(props.authorblogs);
  console.log( "authdetail", authdetail)

  let heading, category, createdby, date, article, views

  {authdetail.map((item) => {
    return (

        <>

         {heading  = item.heading}
        {category  = item.category}
        {createdby  = item.createdby}
        {date  = item.date}
        {article  = item.article}
        {views  = item.views}
   
        
        </>
        
    

    );
  })}

  return (
    <>

      <Layout>
        <main className="bg-grey pt-50 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <!--author box--> */}
                <div className="author-bio mb-50 bg-white p-30 border-radius-10">
                  <div className="author-image mb-30">
                    <a href="/author">
                      <img
                        src="../assets/imgs/authors/author.jpg"
                        alt=""
                        className="avatar"
                      />
                    </a>
                  </div>
                  <div className="author-info">
                    <h3 className="font-weight-900">
                      <span className="vcard author">
                        <span className="fn">
                          <a
                            href= "#"
                            title="Posts by Steven"
                            rel="author"
                          >
                            {authorData.name}
                          </a>
                        </span>
                      </span>
                    </h3>
                    <h5 className="text-muted">About author</h5>

                    <div className="author-description text-muted">

                    {authorData.description}

                    </div>
                    
                    {/* <strong className="text-muted">Follow: </strong> */}
                    <button className="btn btn-sm btn-primary">Follow</button>

                    <span className="vertical-divider mr-20 ml-20  d-md-inline"></span>

                    <span className="text-lg">Total Followers - 0 </span>

                    <span className="vertical-divider mr-20 ml-20  d-md-inline"></span>
                    
                    <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                      <li className="list-inline-item">
                        <a
                          className="fb"
                          href={authorData.fb}
                          target="_blank"
                          title="Facebook"
                        >
                          <i className="elegant-icon social_facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="tw"
                          href={authorData.twitter}
                          target="_blank"
                          title="Tweet now"
                        >
                          <i className="elegant-icon social_twitter"></i>
                        </a>
                      </li>

                      {/* <li className="list-inline-item">
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        >
                          <i className="elegant-icon social_pinterest"></i>
                        </a>
                      </li> */}

                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="widget-header-2 position-relative mb-30  wow fadeInUp animated">
                    <h5 className="mt-5 mb-30">Posted by {authorData.name}</h5>
                  </div>

            <div className="row">
{/* 
            {heading  = item.heading}
        {category  = item.category}
        {createdby  = item.createdby}
        {date  = item.date}
        {article  = item.article}
        {views  = item.views} 

  */}
  
                      
                      
              {authdetail.map((item) => {
                return (

                    

                  <div className="col-lg-6  p-30 border-radius-10">
                      
                  <article className="hover-up-2 transition-normal wow fadeInUp animated">
                    <div className="row mb-40 list-style-2">
                      <div className="col-md-4">
                        <div className="post-thumb position-relative border-radius-5">
                          <div
                            className="img-hover-slide border-radius-5 position-relative"
                            style={{
                              backgroundImage:
                                "url(../assets/imgs/news/news-1.jpg)",
                            }}
                          >
                            <Link href="/single">
                              <a className="img-link"></a>
                            </Link>
                          </div>
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
                      </div>

                      <div className="col-md-8 align-self-center">
                        <div className="post-content">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <Link href="/category">
                              <a>
                                <span className="post-cat text-success">
                                {category  = item.category}
                                </span>
                              </a>
                            </Link>
                          </div>

                          <h5 className="post-title font-weight-900 mb-10">
                            <Link href= {`/blogs/${item.slug}/`}  >
                              <a>
                              {heading  = item.heading}
                              </a>
                            </Link>
                          </h5>

                          <p>
                          {/* {article  = item.article}  */}
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id aspernatur quae veritatis fugiat aliquam asperiores sapiente repellat saepe atque eligendi ab optio, porro quod. Cumque quod eaque molestias excepturi quam.
                          </p>

                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on">      {date  = item.date}  </span>
                            <span className="time-reading has-dot">
                              10 mins read
                            </span>
                            <span className="post-by has-dot">   {views  = item.views} views  </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              
                    
                    
                    
                

                );
              })}


             
{/*   
  
            <div className="col-lg-6  p-30 border-radius-10">
                
                <article className="hover-up-2 transition-normal wow fadeInUp animated">
                  <div className="row mb-40 list-style-2">
                    <div className="col-md-4">
                      <div className="post-thumb position-relative border-radius-5">
                        <div
                          className="img-hover-slide border-radius-5 position-relative"
                          style={{
                            backgroundImage:
                              "url(../assets/imgs/news/news-1.jpg)",
                          }}
                        >
                          <Link href="/single">
                            <a className="img-link"></a>
                          </Link>
                        </div>
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
                    </div>

                    <div className="col-md-8 align-self-center">
                      <div className="post-content">
                        <div className="entry-meta meta-0 font-small mb-10">
                          <Link href="/category">
                            <a>
                              <span className="post-cat text-success">
                                Cooking
                              </span>
                            </a>
                          </Link>
                        </div>
                        <h5 className="post-title font-weight-900 mb-10">
                          <Link href="/single">
                            <a>
                              10 Easy Ways to Be Environmentally Conscious
                              At Home
                            </a>
                          </Link>
                        </h5>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptatibus pariatur facere dolore or sit
                          amet consectetur adipisicing ....
                        </p>

                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <span className="post-on">27 Sep</span>
                          <span className="time-reading has-dot">
                            10 mins read
                          </span>
                          <span className="post-by has-dot">22k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
  
               */}
               

              
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}





export async function getStaticPaths() {
  var session_url = "http://localhost:8000/userApi/createAuthor";

  var authenticationUname = "admin";
  var authenticationPass = "12345";
  let authordata;

  await axios
    .get(session_url, {
      auth: {
        username: authenticationUname,
        password: authenticationPass,
      },
    })

    .then(function (response) {
      // console.log("GET request inside function response  ")
      authordata = response.data.getauthordata;
      // console.log(allCategory);
    })

    .catch(function (error) {
      console.log(error, "Error In GET allBlogs ");
      //  alert("Error ");
    });

  const paths = authordata.map((fetchdata) => {
    return {
      params: { author: fetchdata.name.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
}




export async function getStaticProps(context) {
  const { author } = context.params;
  let dasf

  // console.log("GET request getting --------->>>> ");
  console.log("[author].js ", { author });

  var session_url_one = `http://localhost:8000/userApi/getAuthor/${author}/`;
  var session_url_two = `http://localhost:8000/blogApi/getBlogwithauthor/${author}/`;

  // console.log(session_url_two);

  var authenticationUname = "admin";
  var authenticationPass = "12345";
  let authordata, authorblogs, one , two


  await axios
    .get( session_url_one, {
      auth: {
        username: authenticationUname,
        password: authenticationPass,
      },
    })


    .then(function (response) {
    
      authordata = response.data.authordata;
      // authorblogs = response.data.blogswithauthor;
      // console.log(authordata)


      // dasf = { "authordet" : authordet, "authorblogs": authorblogs}
      // console.log(dasf)

    })

    .catch(function (error) {
      console.log(error, "Error In GET [author].js ");
      //  alert("Error ");
    });



    // ----------------------------------------------------------------------------------------

    
  await axios
  .get(session_url_two,  {
    auth: {
      username: authenticationUname,
      password: authenticationPass,
    },
  })


  .then(function (response) {
  
  
    authorblogs = response.data.blogswithauthor;
    // console.log(authorblogs)



  })

  .catch(function (error) {
    console.log(error, "Error In GET [author].js ");
    //  alert("Error ");
  });




  return {
    
    props: {  authordata, authorblogs },
    
  };


}





export default Author;
