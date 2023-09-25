import {React, useState, useEffect  } from "react"; 
import { Header } from '../Header/Header'
import classes from './Shop.module.css'

export function Shop() {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
               const response =  await fetch('https://fakestoreapi.com/products')
                const json = await response.json();

                setProducts(json)
            } catch (error) {
                console.error("Erro ao buscar produtos", error);
            }
        };
        fetchProducts();

    }, []);
    return (
        <div className={classes.shopContent}>
            <Header />
            <h3 className={classes.shopSubTitle}>Shop</h3>
            <a className={classes.link} href="/"> Home </a>
            <a className={classes.link} href="/Shop">Shop</a>
            <div className={classes.shopDisplayProducts}>
          
            {products.map(product => (
    <div className={classes.product} key={product.id}>
        <div className={classes.cellContainer}>
            <div className={classes.imagesOfProduct}>
                <img src={product.image} alt={product.title} />
            </div>
            <div>
                <p className={classes.titleProduct}>{product.title}</p>
            </div>
            <div className={classes.priceProduct}>
                <p className={classes.price}>Price: Free</p>
            </div>
            <div className={classes.button}>
                <button>Buy</button>
            </div>
        </div>
    </div>
))}


                        
            </div>
        </div>
    )
}