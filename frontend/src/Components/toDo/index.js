import { useState } from 'react';
import Api from '../../services/Api.js';
import './index.css'

function ToDo({ data, remove }) {
  const [isChecked, setIsChecked] = useState(data.checked === 1 ? true : false );

  async function changeCheckedInDB(check){
    console.log(check)
    let checked = check === true ? 1 : 0
    await Api.put(`/todo/${data.id}`, { description: data.description, checked : checked})
    setIsChecked(check)
  }

  return (
    <>
      <div className="toDo">
        <input type="checkbox" checked={isChecked} onChange={(e) => changeCheckedInDB(e.target.checked)} />
        <span> {isChecked ? <s>{ data.description }</s> : data.description } </span>
        <button onClick={() => remove(data.id)}>Remover</button>
      </div>
    </>
  );
}

export default ToDo;