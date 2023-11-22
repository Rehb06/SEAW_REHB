import { BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'

function app() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/profile' element={<h1>Profile page</h1>} />
          <Route path='/products' element={<h1>Productos</h1>} />
          <Route path='/add-product' element={<h1>Add Product</h1>} />
          <Route path='/product/:id' element={<h1>Update Product</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default app