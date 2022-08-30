import React from "react";

const Table = (props) => {
    
  return (
    <div>
      <table>
        <tbody>
        { props.tabledata.length>0 && props.tabledata.map((data) => {
          return (
            <tr>
              {data.map((data1) => {
                return <td>{data1}</td>;
              })}
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
