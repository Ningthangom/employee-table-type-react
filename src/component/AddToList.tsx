import React, { useState } from "react";
import { isState as Props } from "../App";

interface IProp {
  people: Props["people"],
  setPeople: React.Dispatch<React.SetStateAction<{
    name: string;
    age: number;
    url: string;
    note?: string | undefined;
}[]>>
}


const AddToList: React.FC<IProp> = ({setPeople, people}) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: ""

  })
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if(
      !input.name || 
      !input.age || 
      !input.img 
    ){
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note
      }
    ])
    setInput( { name: "",
    age: "",
    note: "",
    img: ""})
  }
  return (
    <div className="AddToList">
      <input
        type="text"
        value={input.name}
        placeholder="name"
        className="AddToList-input"
        onChange={handleOnChange}
        name="name"
      />
      <input
        type="number"
        value={input.age}
        placeholder="age"
        className="AddToList-input"
        name="age"
        onChange={handleOnChange}
      />
      <input
        type="text"
        value={input.img}
        placeholder="image url"
        className="AddToList-input"
        name="img"
        onChange={handleOnChange}
      />
      <textarea
        value={input.note}
        placeholder="note about the person"
        className="AddToList-input"
        onChange={handleOnChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>add</button>
    </div>
  );
};

export default AddToList;
