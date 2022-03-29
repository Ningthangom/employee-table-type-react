import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import List from './component/List'
import AddToList from './component/AddToList';



 export interface isState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<isState["people"]>([
    {
      name: "Law kee mang",
      age: 26,
      url: 'https://images.thestar.com/NuBcuk9UrmzG7S8ZLT41rWLZjDs=/968x968/smart/filters:cb(1548689313694)/https://www.thestar.com/content/dam/thestar/entertainment/television/analysis/2019/01/25/is-this-the-breakout-year-for-asian-men-in-leading-roles/simu_liu.jpg',
      note: 'older and wiser '
  },
      {
      name: "Law kee thang",
      age: 20,
      url: 'https://www.themodestman.com/wp-content/uploads/2020/01/Best-asian-hairstyles-2.jpg',
      note: 'the brother of law kee mang'
  }

])


  return (
    <div className="App">
     <h1 style={{textTransform: 'capitalize'}}>Employees Table</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;
