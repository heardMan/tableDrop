import React, { useState } from "react";
import fileIcon from "../../public/icons/cloud_upload-white-24dp.svg"

const TableDrop = () => {

    const [data, setData] = useState([]);

    const dragOverHandler = e => e.preventDefault();

    const dropHandler = (e) => {

        //console.log('File dropped');
        //prevent default drop event behavior
        e.preventDefault();
        //access the first item of the list
        const item = e.dataTransfer.items['0'];
        
        if (item) {
            if (item.kind === 'file') {
                const file = item.getAsFile()
                if (item.type === 'text/csv') {
                    file.text()
                        .then((fileData) => {
                            return setData(parseCSV(fileData));
                        });
                }
            }
        }

    }

    const parseCSV = (payload) => {

        let rows = payload.split('\n');
        let cols = rows[0].split(',');

        let parsed = [];

        rows.forEach((row, i) => {
            if (i === 0) return;
            let obj = {};

            cols.forEach((col, j) => {

                obj[col] = row.split(',')[j];
            })

            parsed.push(obj);
        })

        console.log(parsed);

        return parsed;
    }

    return (
        <div>

            <div 
              id='fileDropZone' 
              onDragOver={dragOverHandler} 
              onDrop={dropHandler}>
                  <img src={fileIcon}/>
                  <p>Drop file on this square</p>
            </div>

            <div id="data">
                <table>
                    <tbody>
                {data.map((item,i)=>{
                    console.log(item)
                    return(<tr key={i}>
                        {Object.keys(item).map((prop,j)=>{
                            return(<td key={j}>{item[prop]}</td>)
                        })}
                    </tr>)
                    
                })}
                </tbody>
                </table>
            </div>

        </div>
    );
}

export default TableDrop;