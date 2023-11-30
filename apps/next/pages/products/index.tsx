import { ProductsScreen } from 'app/features/products/screen'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <ProductsScreen />
    </>
  )
}
