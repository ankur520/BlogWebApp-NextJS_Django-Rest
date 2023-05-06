import Link from "next/link";
import React from "react";
import Menu from "./menu";
import { useRouter } from "next/router";
import {useEffect} from "react"
import {useState} from "react"
var jwt = require('jsonwebtoken');


const Header = ({ addClass, openSearch }) => {

    // console.log("header.js ", props.name)
    
    const [usertoken, setusertoken] = useState({value : null})

    
    const router = useRouter();


    useEffect(() => {
        const usertoken = localStorage.getItem("usertoken")

        
        if(usertoken) {
            setusertoken({value : usertoken})
        }

    }, [])



    // console.log("Header.js ", usertoken)

    const logoutButton = () => {

        console.log("logout clied ");

            localStorage.removeItem("usertoken")
            router.push("/")
        

    }




    return (
        <>
        
            <header className="main-header  header-style-1 font-heading">


                <div className="header-top">
                    <div className="container">
                        <div className="row pt-20 pb-20">

                            <div className="col-md-3 col-xs-6">
                                <Link href="/">
                                    <a> LOGO
                                        {/* <img
                                            className="logo"
                                            src="assets/imgs/theme/logo.png"
                                            alt=""
                                        /> */}
                                    </a>
                                </Link>
                            </div>

                            <div className="col-md-9 col-xs-6 text-right header-top-right ">

                                <ul className="list-inline nav-topbar  d-md-inline">
                                    <li className="list-inline-item menu-item-has-children">
                                        <Link href="/#">
                                            <a> Categories </a>
                                        </Link>
                                        <ul className="sub-menu font-small">
                                            <li className="menu-item-has-children">
                                                <Link href="/#">
                                                    <a>Pages</a>
                                                </Link>
                                                <ul className="sub-menu font-small">
                                                    <li>
                                                        <Link href="/page-about">
                                                            <a>About</a>
                                                        </Link>
                                                    </li>
                                                    
                                                </ul>
                                            </li>

                                            <li className="menu-item-has-children">
                                                <Link href="/#">
                                                    <a>Category</a>
                                                </Link>
                                                <ul className="sub-menu font-small">
                                                    <li>
                                                        <Link href="/category-list">
                                                            <a>List layout</a>
                                                        </Link>
                                                    </li>
                                                    
                                                </ul>
                                            </li>

                                            <li className="menu-item-has-children">
                                                <Link href="/#">
                                                    <a>single post</a>
                                                </Link>
                                                <ul className="sub-menu font-small">
                                                    <li>
                                                        <Link href="/single">
                                                            <a>Default</a>
                                                        </Link>
                                                    </li>
                                                    
                                                   
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                                
                                
                               
                                <span className="vertical-divider mr-20 ml-20  d-md-inline"></span> 


                                <button className="search-icon  d-md-inline" onClick={openSearch}>
                                    <span className="mr-15 text-muted font-small">
                                        <i className="elegant-icon icon_search mr-5"></i>
                                        Search
                                    </span>
                                </button>


                
                                <span className="vertical-divider mr-20 ml-20  d-md-inline"></span>

                                {/* ------------------ LOGIN OR NOT -------------------------- */}
                                
                                   
                                {usertoken.value && 
                                
                                    <ul className="list-inline nav-topbar  d-md-inline"   styles={{width: "200px"}}  >
                                        <li className="list-inline-item menu-item-has-children">
                                        
                                            <Link href="/#">
                                        
                                                <span className="material-symbols-outlined">account_circle</span>
                                            </Link>

                                            <ul className="sub-menu font-small">

                                                <li className="text-center mb-2"   style={{cursor: "pointer", margin: "0 5px 0 0" , padding: "0 0 5px 0", borderBottom: "1px solid black", inlineSize: "max-content" }} >

                                                <span className="material-symbols-outlined ">person  </span>
                                                    <Link href="/userdashboard" className="pointer">

                                                
                                                    <span className="pointer">Ajay Pratap Singh</span>

                                                    </Link>
                                                    
                                                </li>


                                                <li className="text-center mb-2"   style={{cursor: "pointer", margin: "0 5px 0 0" , padding: "0 0 5px 0", borderBottom: "1px solid black" }}   >
                                                <span className="material-symbols-outlined ">manage_accounts </span>

                                                <Link href="/userdashboard" className="pointer">

                                                <span className="pointer">   Profile</span>

                                                </Link>

                                                </li>

                                                <li className="text-center mb-2"  style={{cursor: "pointer", margin: "0 5px 0 0" , padding: "0 0 5px 0", borderBottom: "1px solid black" }}   > 
                                                
                                                <span className="material-symbols-outlined ">logout  </span>

                                                    <Link href="#" className="pointer">

                                                
                                                    <span className="pointer"  onClick={logoutButton} >  Logout </span>

                                                    </Link>
                                                    
                                                
                                                </li>

                                            </ul>

                                        </li>

                                    </ul>

                                }


                            {!usertoken.value && 

                                  <li className="font-small">
                                  <Link href="/signin">
                                      <a>
                                      Login / SignUp
                                      </a>
                                                                   
                                  </Link>
                              </li>

                            }
                               

                               
                            </div>
                        </div>
                    </div>
                </div>


                <Menu addClass={addClass} />
  
            </header>
        </>
    );
};

export default Header;
