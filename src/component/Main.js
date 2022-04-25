import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import styles from "./Main.module.css";


export default function Product_list() {
    const itemLink = (data) => {
        return (
            <Link to={`/Detail/${data.id}`}>
                <div className={styles.box}>
                    <p key = {data.id}>
                        <div  className={styles.name}>{data.product_name}</div>
                        <div  className={styles.price}>{data.original_price} -> {data.current_price}</div>
                        <div className={styles.period}>세일기간 : {data.sale_from} ~ {data.sale_to}</div>
                    </p>
                </div>
            </Link>
        );
    };

    const [data, setdata] = useState();

    useEffect(() => {
        const fetchEvents = async () => {
            try{
                const res = await axios.get(
                    process.env.REACT_APP_MAIN_API
                );
                setdata(res.data);
            } catch(e){
                console.log(e);
            }
        };
        fetchEvents();
    },[]);
    return (
        <div>
            {data && data.data.map(data => {
                return itemLink(data)
            })}
        </div>
    )

}
