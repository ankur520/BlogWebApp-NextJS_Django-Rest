import Layout from "../../components/layout/layout";
import Link from "next/link";

function Index() {
    return (
        <>
            <Layout>
                <div className="text-white bg-dark py-2 px-2">

               
                <h1 className="text-center  ">Welcome to Admin Section  </h1>
                <br />
                <br />
                <br />
                <hr />
                <br />
                <br />
            

                
                <div className="row ">
                    <span className="col-lg-2"></span>
                    
                    <h4 className="col-lg-2">
                        <a>
                        <Link href="adminsection/signin"> Login </Link> 
                        </a>   
                    </h4>

                    <h4 className="col-lg-2">
                        <a>
                        <Link href="adminsection/signup"> Sign Up </Link> 
                        </a>
                    </h4>

                    <h4 className="col-lg-2">
                        <a>
                        <Link href="adminsection/admindashboard"> Admin Dashboard   </Link>  
                        </a>
                    </h4>

                    <h4 className="col-lg-2">
                        <a>
                        <Link href="adminsection/addcategory">  Category  </Link>  
                        </a>
                    </h4>

                    <span className="col-lg-2"></span>
                
                </div>
                </div>
              
                

            </Layout>
        </>
    );
}
export default Index;
