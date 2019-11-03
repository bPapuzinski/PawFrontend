import React from 'react';
import Note from './Note/Note.js'
import "./Table.css";

export default class Table extends React.Component{

    render(){
        return React.createElement("div", {class: "table"}, 
                    React.createElement("div", {class: "tableTitle"}, this.props.title),
                    React.createElement("div", {class: "tableContent"}, <Note />, <Note />));
    }
}