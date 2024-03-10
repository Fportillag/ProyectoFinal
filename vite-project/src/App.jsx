
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './components/Context/CartContext'
import ViewProducts from './components/ViewProducts/ViewProducts'
import Checkout from './components/Checkout/Checkout.jsx'
//
function App(){
  const saludo = "Bienvenidos"
  return (

    <CartProvider>
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={saludo}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={saludo}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/viewProduct' element={<ViewProducts />}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<h1>NOT FOUNT</h1>}/>
        </Routes>
    </BrowserRouter>
    </CartProvider>

    
  )
}

export default App;