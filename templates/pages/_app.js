import React from "react";
React.useLayoutEffect = React.useEffect;
import { useEffect } from "react";
import { useRouter } from 'next/router';
import {useState} from 'react';
var jwt = require('jsonwebtoken');

import 'react-perfect-scrollbar/dist/css/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/assets/css/style.css";
import "../public/assets/css/widgets.css";
import "../public/assets/css/responsive.css";
import 'metismenujs/dist/metismenujs.css';
import Header from "../components/layout/header";

function MyApp({ Component, pageProps  }) {
    const router = useRouter()


    // const [user, setUser] = useState({value : null})
    const [admintoken, setadmintoken] = useState({value : null})
    const [usertoken, setusertoken] = useState({value : null})
    
  
    
     useEffect(() => {
        // console.log("I am Use Effect from __app.js ")

       
        if (typeof window !== "undefined") {
            window.WOW = require("wowjs");
        }

        new WOW.WOW().init();

        const hasGridClass = document.querySelector('.grid-sizer');
        
        if (hasGridClass != null) {
            const xyz = require("masonry-layout");
            var msnry = new xyz(".grid", {
                itemSelector: ".grid-item",
                columnWidth: ".grid-sizer"
            });
        }    

         // user logged in token we are passing with props  to all appp pages 
         const admintoken = localStorage.getItem("admintoken")
         const usertoken = localStorage.getItem("usertoken")
        
         if(admintoken) {
            //  console.log("setadmintoken __app.js ---> ",admintoken)
             setadmintoken({value : admintoken})
             
         }

         if(usertoken) {
            // console.log("usertoken __app.js ---> ", usertoken)
            setusertoken({value : usertoken})
            
        }
         
         // END user logged in token we are passing with props  to all appp pages 
        //  console.log("\n admintoken value __app.js", admintoken.value)


        
        return () => {
            router.events.off('routeChangeError', handleRouteChangeError)
          }

         
    }, []);

    
    let name, email, password, loggedOrNot
    jwt.verify(usertoken.value, 'usersecretkey', function(err, decoded) {
        // console.log(decoded) // bar
        
        try {
            
        {name = decoded.loggedName}

        {email = decoded.loggedEmail}
        {password = decoded.loggedPassword}
        {loggedOrNot = decoded.loggedUser}

        } catch(e) {
            // console.log(e)
            // console.log("User Not Logged In")
        }

        // console.log("error is -> ", err)
      });

    
    return <>    


    <Component name={name} email={email} loggedOrNot={loggedOrNot} usertoken={usertoken}  admintoken={admintoken} { ...pageProps }  />


    </>

}

export default MyApp;
