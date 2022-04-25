import React, {PureComponent} from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";
import dummy from "../db/detail.json";

const data = dummy.history;

export default class Chart extends PureComponent{
    render() {
        return (
            <ResponsiveContainer width = "100%" height = "100%">
                <LineChart
                    data = {data}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey = "from"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type = "monotone" dataKey = "rate" activeDot={{ r: 8 }}/>
                </LineChart>
            </ResponsiveContainer>
        );
    }
}