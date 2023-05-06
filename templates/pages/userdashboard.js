import Layout from "../components/layout/layout";
var jwt = require('jsonwebtoken');
import { useRouter } from "next/router";
import {useEffect} from "react"
import Link from "next/link";


function Index(props ) {

    // console.log("admin dashboard \n \n ")
    // console.log("user value = " , props.usertoken.value)
    // console.log("userDashboard.js ", props)

    // khkj= "jhkhkk"
    
    const router = useRouter();

    useEffect(() => {
        
    if(!props.usertoken.value) {
        router.push("/signin")
      }

    }, [] )

    
    let name, email, password, loggedOrNot
    jwt.verify(props.usertoken.value, 'usersecretkey', function(err, decoded) {
        // console.log(decoded) // bar
        
        try {
            
        {name = decoded.loggedName}

        {email = decoded.loggedEmail}
        {password = decoded.loggedPassword}
        {loggedOrNot = decoded.loggedUser}

        } catch(e) {
            // console.log(e)
            console.log("User Not Logged In")
        }

        // console.log("error is -> ", err)
      });


    return (
        <>

            <Layout>
            <hr />
                <div className="container">
                    <h3 className="text-center">{props.usertoken.value && "Welcome to User  Dashboard "}</h3>
                    <h3 className="text-center">{!props.usertoken.value && "user not logged in please SIgn Up" }</h3>
                

                    
                <h6>{name}</h6>
                <h6>{email}</h6>
                <h6>{password}</h6>
                <h6>{loggedOrNot}</h6>
             
                <Link href="/author/becomeauthor" className="text-white">
                <button className="btn btn-sm btn-primary"> Want To Become Author </button>
                </Link>
                  
                </div>

             
             

             

            </Layout>

        </>
    );
}

export default Index;
