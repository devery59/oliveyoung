import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styles from './Detail.module.css';
import Modal from "./modal";
import axios from "axios";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

function Detail() {
    const { productId } = useParams();
    const [modalOpen, setModalOpen] = useState(false);
    const detail_api = process.env.REACT_APP_DETAIL_API + `${productId}`

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const [data, setdata] = useState({});

    useEffect(() => {
        const fetchEvents = async () => {
            try{
                const res = await axios.get(
                    detail_api
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
            <div key = {productId}>
                <div  className={styles.name}>{data.product_name}</div>
                <div  className={styles.price}>{data.original_price} -> {data.current_price}</div>
                <div className={styles.period}>세일기간 : {data.sale_from} ~ {data.sale_to}</div>
                <React.Fragment>
                    <button onClick={openModal}>다음 세일 기간 예측보기</button>
                    <Modal open={modalOpen} close={closeModal} header="다음 세일 기간">
                        {/*{dummy.predict_from} ~ {dummy.predict_to}*/}
                    </Modal>
                </React.Fragment>
                <div className = {styles.container}>
                    <div className = {styles.chart}>
                            <ResponsiveContainer width = "100%" height = "100%">
                                <LineChart
                                    data = {data.sales}
                                >
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey = "startDate"/>
                                <YAxis dataKey = "discountRate"/>
                                <Tooltip />
                                <Legend />
                                <Line type = "monotone" dataKey = "rate" activeDot={{ r: 8 }}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div>과거 세일 기간</div>
                {data.sales && data.sales.map(data =>(
                    <div className={styles.box}>
                        <div key = {data.id}>
                            <div> {data.startDate} ~ {data.endDate} </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Detail;

