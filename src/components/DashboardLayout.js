import React,{useState} from "react";
import "../DashboardLayout.css";

export default function DashboardLayout({children}) {
    const[isCollapsed, setIsCollapsed]= useState(false);

    return(
        <div className={'dashboard ${isCollapsed?" collapsed":""}'}>
            {/* Sidebar*/}
            <aside className="sidebar">
                <h2 className="logo">T9 Marketing</h2>
                <nav>
                 <a href="#dashboard" className="active">Dashboard</a>
                 <a href="#seo">SEO</a>
                 <a href="#content">Content</a>
                 <a href="#billing">Billing</a>
                 <a href="#settings">Settings</a>
                </nav>
            </aside>

            {/* Main content*/}
            <div className="main">
                {/* Top Bar*/}
                <header className="topbar">
                    <button className="menu-btn" onClick={()=> setIsCollapsed(!isCollapsed)}>
                        ☰
                    </button>
                    <span>Welcome, User!</span>
                    <button className="logout-btn">Logout</button>
                </header>

                {/*Page content*/}
                <main className="content">
                   {children}
                </main>
            </div>
        </div>
    );
}