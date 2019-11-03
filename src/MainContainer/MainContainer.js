import React from 'react';
import Table from '../Table/Table.js'
import "./MainContainer.css";

export default class MainContainer extends React.Component{

    table = [<Table title = "test" />, <Table title = "test" />];

    render(){
        return React.createElement("div", {id: "Container", class: "MainContainer"}, this.table);
    }

}