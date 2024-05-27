import './App.css';
import {Navbar} from "./components/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "./redux/action/productAction";
import {Loading} from "./components/Loading";
import {Card} from "./components/Card";

function App() {
    // receiving the global state
    const {products,isLoading} = useSelector(state => state.productR);
    // making request
    const dispatch = useDispatch();

    // making a call to function (api request)
    useEffect(() => {
        // dispatching the action
        dispatch(fetchProducts())

    }, []);

    console.log(products);
    console.log(isLoading)
  return (
      <>
          <Navbar/>
          <main className='mt-20'>
              <section className='container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                  {isLoading ? (
                      <Loading />
                  ) : (
                      products.map(product => <Card key={product.id} product={product} />)
                  )}
              </section>
          </main>
      </>
  );
}

export default App;
