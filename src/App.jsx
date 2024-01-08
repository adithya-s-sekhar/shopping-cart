import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import ProductList from './components/ProductList/ProductList';
import { products } from './products';
import ProductItem from './components/ProductList/ProductItem/ProductItem';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

    return (
        <Provider store = {store}>
            <div className="app">
                <Header/>
                <Body>
                    <ProductList>
                        {products.map( product => <ProductItem product = {product} key={product.id} />)}
                    </ProductList>
                </Body>
            </div>
        </Provider>
    )
}

export default App
