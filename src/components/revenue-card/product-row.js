import React from 'react';

function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.Product}</td>
      <td>{product.Net}</td>
      <td>{product.Overhead}</td>
      <td>{product.Taxes}</td>
      <td>{product.Total}</td>
    </tr>
  );
}

export default ProductRow;
