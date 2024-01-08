import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import ProductList from './components/ProductList';
import { products } from './products';
import ProductItem from './components/ProductItem';

function App() {

    return (
        <div className="app">
        <Header/>
        <Body>
            <ProductList>
                {products.map( x => <ProductItem product = {x} />)}
            </ProductList>
        </Body>
        </div>
    )
}

export default App
