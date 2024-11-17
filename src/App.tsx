import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Rotas from './routes'
import { store } from './store/reducer/index'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
