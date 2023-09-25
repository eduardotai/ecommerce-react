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
                        <img className={classes.imagesOfProduct} src={product.image} alt={product.title} />
                        <p className={classes.titleProduct}>{product.title}</p>
                        <p>Price: Free</p>
                        <button> Buy </button>
                    </div>
                ))}
            </div>
        </div>
    )
}