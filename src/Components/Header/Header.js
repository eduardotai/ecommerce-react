import React from "react";
import classes from'./Header.module.css'

export function Header() {
    return (
        <div className="hedader"> 
            <header>
                <h1>Tai Shop</h1>
                <nav>
                    <a className={classes.redirectTo} href="/">Home</a>
                    <a className={classes.redirectTo} href="Shop">Shop</a>
                </nav>
            </header>
        </div>
    )
}