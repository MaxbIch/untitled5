import './App.css'
import './AppMedia.css'

// @ts-ignore
import Header from './components/Header'
// @ts-ignore
import Main from './components/Main'
// @ts-ignore
import Tariffs from './components/Tariffs'
// @ts-ignore
import Footer from './components/Footer'
// @ts-ignore
import Form from './components/Form'
// @ts-ignore
import Delivery from './components/Delivery'
// @ts-ignore
import Popular from './components/Popular'

function App() {


  return (
  <div className="app-content">
      <Header />

      <Main />

      <Popular />

      <Delivery />

      <Tariffs />

      <Form />

      <Footer />
  </div>

  )
}

export default App
