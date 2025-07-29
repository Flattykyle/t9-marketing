import React,{useState} from "react";
import "../DashboardLayout.css";

export default function DashboardLayout({children}) {
    const[isCollapsed, setIsCollapsed]= useState(false);

    const toggleSidebar=()=>setIsCollapsed(!isCollapsed);

    return(
        <div className="dashboard-wrapper">
            {/* Sidebar*/}
            <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
                <h2 className="logo">{isCollapsed ? "T9" : "T9 Marketing"}</h2>
                <nav>
                 <a href="#dashboard" className="active">
                    {/*Dashboard Icon*/}
                    <svg viewBox="0 0 24 24"className="icon">
                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                    </svg>
                    {!isCollapsed && "Dashboard"}
                 </a>
                 <a href="#seo">
                    <svg viewBox="0 0 24 24"className="icon">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 
              6.471 0 0016 9.5 6.5 6.5 0 
              109.5 16c1.61 0 3.09-.59 
              4.23-1.57l.27.28v.79l5 
              4.99L20.49 19l-4.99-5zM9.5 
              14C7.01 14 5 11.99 5 
              9.5S7.01 5 9.5 5 14 
              7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                    {!isCollapsed && "SEO"}
                 </a>
                 <a href="#content">
                    <svg viewBox="0 0 24 24"className="icon">
                        <path d="M3 4h18v2H3V4zm0 6h12v2H3v-2zm0 
              6h18v2H3v-2z"/>
                    </svg>
                    {!isCollapsed && "Content"}
                 </a>
                 <a href="#billing">
                    <svg viewBox="0 0 24 24"className="icon">
                        <path d="M2 4v16h20V4H2zm18 
              14H4v-6h16v6zm0-8H4V6h16v4z"/>
                    </svg>
                    {!isCollapsed && "Billing"}
                 </a>
                 <a href="#settings">
                    <svg viewBox="0 0 24 24"className="icon">
                        <path d="M19.43 12.98c.04-.32.07-.65.07-.98s-.03-.66-.07-.98l2.11-1.65a.5.5 
              0 00.12-.63l-2-3.46a.5.5 
              0 00-.6-.22l-2.49 1a7.007 
              7.007 0 00-1.7-.98l-.38-2.65A.488.488 
              0 0014 2h-4c-.24 
              0-.44.17-.48.41l-.38 
              2.65c-.63.24-1.2.56-1.7.98l-2.49-1a.5.5 
 
              0 00-.6.22l-2 
              3.46c-.14.23-.1.53.12.63L4.57 
              11c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 
              1.65a.5.5 
              0 00-.12.63l2 3.46c.14.23.4.3.6.22l2.49-1c.5.42 
              1.07.74 1.7.98l.38 
              2.65c.04.24.24.41.48.41h4c.24 
              0 .44-.17.48-.41l.38-2.65c.63-.24 
              1.2-.56 1.7-.98l2.49 
              1c.2.08.46.01.6-.22l2-3.46a.5.5 
              0 00-.12-.63l-2.11-1.65zM12 
 
              15.5c-1.93 
              0-3.5-1.57-3.5-3.5s1.57-3.5 
              3.5-3.5 3.5 1.57 3.5 
              3.5-1.57 3.5-3.5 3.5z"/>
                    </svg>
                    {!isCollapsed && "Settings"}
                </a>
                </nav>
            </aside>

            {/*Background overlay(for mobile only)*/}
            {isCollapsed && <div className="overlay"
            onClick={toggleSidebar}></div>}

            {/* Main content*/}
            <div className="main">
                {/* Top Bar*/}
                <header className="topbar">
                    <button className="menu-btn" 
                    onClick={()=> setIsCollapsed(!isCollapsed)}>
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