import React from 'react';
import { Table } from "reactstrap";

// ProductList bileşeni ürünleri listelemek için kullanılır
function ProductList({ products, info, currentCategory, addToCart }) {
    return (
        <div>
            <h2>{info.title} - {currentCategory} </h2>
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity Per Unit</th>
                        <th>Unit In Stock</th>
                        <th>Sepet</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td>{product.productName}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td>{product.unitsInStock}</td>
                            <td>
                                <button onClick={() => addToCart(product)} type="button" className="btn btn-warning">Add To Cart</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ProductList;
