import React from "react";

const TableRow = ({ name, img }) => {
    return (
        <div>
            <div>{name}</div>
            <div>
                <img src={img} alt={img} />
            </div>
        </div>
    );
};

export default TableRow;
