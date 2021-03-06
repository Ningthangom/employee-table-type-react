import React from 'react'
import { isState as isProp } from "../App";


/* interface isProp {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string
  }[]
}
 */

const List: React.FC<isProp> = ({people}) => {


    const renderList = (): JSX.Element[] => {
        return  people.map((person) => {
            return(  
            <li className="List" key={person.name}>
                <div className="List-header">
                    <img className="List-img" src={person.url} alt="" />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note" > {person.note}</p>
            </li>)
          
        })
    }

  return (
    <ul>
       {renderList()}
    </ul>
  )
}

export default List