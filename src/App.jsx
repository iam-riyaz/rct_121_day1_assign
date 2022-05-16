import logo from './logo.svg';
import './App.css';
import { ContactList } from './components/ContactList';

function App() {

  const data=[
    {name:"Danial Convey",
     email:"abdfdc@xyz.com",
      img_url:"https://w7.pngwing.com/pngs/759/922/png-transparent-telephone-logo-iphone-telephone-call-smartphone-phone-electronics-text-trademark-thumbnail.png",
      no:"+911234567890"},
      {name:"Mark Rojer",
     email:"fkdjfkdc@xyz.com",
      img_url:"https://w7.pngwing.com/pngs/759/922/png-transparent-telephone-logo-iphone-telephone-call-smartphone-phone-electronics-text-trademark-thumbnail.png",
      no:"+911234562370"},
      {name:"Virat Kohli",
     email:"kldjfkdj@xyz.com",
      img_url:"https://w7.pngwing.com/pngs/759/922/png-transparent-telephone-logo-iphone-telephone-call-smartphone-phone-electronics-text-trademark-thumbnail.png",
      no:"+91125679d890"},
      {name:"Rohit Sharma",
     email:"rohit_jfkdj@xyz.com",
      img_url:"https://w7.pngwing.com/pngs/759/922/png-transparent-telephone-logo-iphone-telephone-call-smartphone-phone-electronics-text-trademark-thumbnail.png",
      no:"+911256767890"}
]


  return (
    <div className="App">
      
      <div className="container">
      <h2>Contact list</h2>
      {data.map((e)=>{
        return <ContactList key={e.no} name={e.name} email={e.email} img_url={e.img_url} no={e.no}/>
      })}
      </div>
    </div>
  );
}

export default App;
