import React from 'react';
import Table from '../Table/Table.js'
import "./MainContainer.css";

export default class MainContainer extends React.Component{

    table = [<Table title = {"test"} i = {1} />, <Table title = {"test"} i = {2} />, <Table title = {"test"} i = {6} /> ,<Table title = {"test"} i = {2} /> ,<Table title = {"test"} i = {4} />];

    render(){
        return React.createElement("div", {id: "Container", class: "mainContainer"}, this.table);
    }

}