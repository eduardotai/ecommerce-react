import React from "react";
import classes from './Home.module.css'

export function Home() {
    return (
        <div className={classes.homeContent}>
            <h1 className={classes.mainTitle}>Lorem ipsum</h1>
            <p className={classes.mainDesc}> Lorem</p>
            <button className={classes.shopNow} type="button">Shop now</button>
        </div>
    )
}