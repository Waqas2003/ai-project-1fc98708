function ProductCard({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard