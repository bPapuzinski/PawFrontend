import React from 'react';
import Note from './Note/Note.js'
import "./Table.css";

export default class Table extends React.Component{

    noteTable = [];
    render(){
        for(var i = 0; i < this.props.i; i++){
            this.noteTable.push(<Note content = "asdasdasdasdasdasdasdazsdasdasdadsas" />);
        }

        return React.createElement("div", {class: "table"}, 
                    React.createElement("div", {class: "tableTitle"}, this.props.title),
                    React.createElement("div", {class: "tableContent"}, this.noteTable));
    }
}