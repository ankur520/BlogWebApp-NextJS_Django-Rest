import React from "react";
import Link from "next/link";
import PerfectScrollbar from 'react-perfect-scrollbar'
const Sidebar = ({ removeClass }) => {
    return (
        <>
            <aside
                id="sidebar-wrapper"
                className="custom-scrollbar offcanvas-sidebar"
            >
                <PerfectScrollbar>


                    <button className="off-canvas-close" onClick={removeClass}>
                        <i className="elegant-icon icon_close"></i>
                    </button>


                    <div className="sidebar-inner">
                        {/* <!--Categories--> */}
                        <div className="sidebar-widget widget_categories mb-50 mt-30">
                            <div className="widget-header-2 position-relative">
                                <h5 className="mt-5 mb-15">Hot topics</h5>
                            </div>
                            <div className="widget_nav_menu">
                                <ul>
                                    <li className="cat-item cat-item-2">
                                        <Link href="/category">
                                            <a>Travel tips</a>
                                        </Link>
                                        <span className="post-count">30</span>
                                    </li>
                                    <li className="cat-item cat-item-3">
                                        <Link href="/category-grid">
                                            <a>Book review</a>
                                        </Link>
                                        <span className="post-count">25</span>
                                    </li>
                                    <li className="cat-item cat-item-4">
                                        <Link href="/category-list">
                                            <a>Hotel review</a>
                                        </Link>
                                        <span className="post-count">16</span>
                                    </li>
                                    <li className="cat-item cat-item-5">
                                        <Link href="/category-masonry">
                                            <a>Destinations</a>
                                        </Link>
                                        <span className="post-count">22</span>
                                    </li>
                                    <li className="cat-item cat-item-6">
                                        <Link href="/category-big">
                                            <a>Lifestyle</a>
                                        </Link>
                                        <span className="post-count">25</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                
                    </div>

                    
                </PerfectScrollbar>
            </aside>
        </>
    );
};

export default Sidebar;
