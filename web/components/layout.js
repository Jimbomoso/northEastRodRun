import Header from '../components/header'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      {/* <Meta /> */}
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}