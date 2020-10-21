import React from "react";
import TableRow from "../TableRow";

const MainTable = ({ products }) => {
    return (
        <div>
            {products.loading ? (
                <h2>Loading...</h2>
            ) : products.error ? (
                <h2>{products.error}</h2>
            ) : (
                        <>
                            {products.products &&
                                products.products.map((product) => (
                                    <TableRow
                                        key={product._id}
                                        name={product.name}
                                        img={product.img}
                                    />
                                ))}
                        </>
                    )}
        </div>
    );
};

export default MainTable;
