import Link from "next/link";
import React from "react";
const Footer = ({ removeClass }) => {
    return (
        <>
            <footer className=" pb-20 bg-primary ">
                <div className="container">

                    <div className="row text-center footer-copy-right pt-30 mt-20 wow fadeInUp animated">

                        <div className="col-md-4 ">
                        <p className="float-md-left font-small text-muted text-white">
                            © 2020, 
                        </p>
                        </div>
                        <div className="col-md-4">
                        <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                                        <li className="list-inline-item">
                                            <Link href="/#">
                                                <a
                                                    className="fb"
                                                    target="_blank"
                                                    title="Facebook"
                                                >
                                                    <i className="elegant-icon social_facebook"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
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
                                        <li className="list-inline-item">
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
                        <div className="col-md-4 ">
                        <p className="float-md-right font-small mx-2 text-muted text-white">
                            All rights reserved
                        </p>
                        </div>

                    </div>
                
                    {/* <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
                        <p className="float-md-left font-small text-muted">
                            © 2020, 
                        </p>

                        <p className="text-center">
                        <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                                        <li className="list-inline-item">
                                            <Link href="/#">
                                                <a
                                                    className="fb"
                                                    target="_blank"
                                                    title="Facebook"
                                                >
                                                    <i className="elegant-icon social_facebook"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
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
                                        <li className="list-inline-item">
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
                        </p>

                     


                        <p className="float-md-right font-small text-muted">
                            All rights reserved
                        </p>
                    </div> */}
                </div>
            </footer>

            <div className="dark-mark" onClick={removeClass}></div>
        </>
    );
};

export default Footer;
