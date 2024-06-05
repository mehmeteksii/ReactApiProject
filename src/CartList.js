import React from "react";
import {Table, Button} from "reactstrap"

function CartList({cart, removeFromCart}) {

    return(
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Id</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {cart.map(cartItem=>(
                        
                        <tr key={cartItem.id}>
                            <td>{cartItem.id}</td>
                            <td>{cartItem.categoryId}</td>
                            <td>{cartItem.productName}</td>
                            <td>{cartItem.unitPrice}</td>
                            <td>{cartItem.unitInStock}</td>
                            <td>{cartItem.quantity}</td>
                            <td>
                                <Button color="danger" onClick={()=>removeFromCart(cartItem)}>Sil</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default CartList