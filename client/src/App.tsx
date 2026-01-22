import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen">
          <AppRoutes />
        </div>
      </Router>
    </Provider>
  )
}

export default App