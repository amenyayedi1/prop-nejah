import './App.css';
import ProductList from './Components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const list = [
    {
      id: Math.random(), name: "Vega Téléviseur 32 LED HD - A32F1HB1 - Granatie 3 Ans", pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/5146/1.jpg?7896", price: 299
    },
    {
      id: Math.random(), name: "Tefal Batterie de cuisine Tefal - 5 pièces - Tous feux sauf induction - Antiadhésive", pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/2477/1.jpg?8245", price: 169
    },
    {
      id: Math.random(), name: "silver crest Friteuse Sans Huile XXL Faible En Matières Grasses- 6L -2400W -Garantie 1 an", pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/4217/1.jpg?5876", price: 150
    },
  ]

  const handleInfo=(item)=>alert('the product '+item.name + " cost " +item.price)
  return (
    <div className="App">
      <ProductList data={list} handle={handleInfo} />
    </div>
  );
}

export default App;
