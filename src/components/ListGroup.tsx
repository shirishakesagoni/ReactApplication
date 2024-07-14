import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";
import { useState } from "react";

 
interface Props 
{
    items: string[];
    heading: string;
    onSelectItem : (item: string)=> void;
}

function ListGroup({items,heading,onSelectItem}:Props) {

    
    const clickEvent = (event:MouseEvent) => {console.log(event)};
    //let selectedIndex = -1;
    const [selectedIndex,setSelectedIndex] = useState(-1);

    return (
    <>
    <h1>{heading}</h1>
    {items.length === 0 && <p>items not found</p>}
    <ul className="list-group">
    { items.map((item,index) => (<li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item' } key= {item} onClick={()=>{setSelectedIndex(index); onSelectItem(item);}}>{item} </li>))}
  </ul>
</>
    );

}

export default ListGroup