import Head from 'next/head'
import ProductCard from '../components/ProductCard'

function Products() {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 9.99 },
    { id: 3, name: 'Product 3', price: 12.99 }
  ]

  return (
    <div>
      <Head>
        <title>Products</title>
      </Head>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products