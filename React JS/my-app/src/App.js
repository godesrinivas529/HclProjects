// import logo from './logo.svg';
// import './App.css';
import CardComponent from './CardComponent';
//  import bulb from './bulb.jfif';
//  import sunrise from './sunrise.jfif';
// import tiger from './tiger.jfif';

function App() {
  const card = [
    {
      person : 'Srinivas Gode',
    },

    {
      person : 'Manikanta Revu',
    },

    {
      person : 'Varma Vatsavai',
    }
  ]
  return ( 
    <div>  
        <CardComponent
          person = {card[0].person}
        /><br/>

        <CardComponent
         person = {card[1].person}
        /><br/>

        <CardComponent
         person = {card[2].person}
        />
    </div>
  );
}
export default App;