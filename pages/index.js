import Head from 'next/head'
import { useContext, useState } from 'react'
import { OrderContext } from '../components/OrderContext'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { order, setOrder } = useContext(OrderContext)
  console.log("🚀 ~ file: index.js ~ line 8 ~ Home ~ order", order)
  const [myOrder, setMyOrder] = useState("")

  const SubmitOrder = (event) => {
    event.preventDefault()

    setOrder([...order, myOrder])
    setMyOrder("")
  }

  const ClearStorage = () =>{
    if(typeof window !== "undefined"){
      setOrder([])
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>LocalStorage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>
          LocalStorage with useContext
        </h1>
        <div>
          {
            order.length > 0 ?
              <div>
                <h4>
                  you can refresh page
                </h4>
                <button onClick={ClearStorage}>
                  Clear Order Storage
                </button>
              </div>
              :
              null
          }
          {
            order.map((i, index) =>
              <p key={index}>
                {index} : {i}
              </p>
            )
          }
        </div>
        <form onSubmit={SubmitOrder}>
          <input value={myOrder} type='text' onChange={(e) => setMyOrder(e.target.value)} />
          <button type='submit'>
            set order
          </button>
        </form>

      </main>
    </div>
  )
}
