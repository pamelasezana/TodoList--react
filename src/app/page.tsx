'use client'

import { TodoItem } from "@/types/TodoItem"
import { useState } from "react"


const Page = () =>{


  const[itemInput,setItemInput] = useState('');

  //Primeira coisa vamos criar uma lista de array
  const [list,setlist] = useState<TodoItem[]>([
    { label:'Fazer dever de casa', checked:false,id:1 },
    { label:'Comprar leite', checked:false,id:2 },
    { label:'Estudar react', checked:false,id:3 }
  ])

  const handleAddButton = () => {
    if (itemInput.trim() === "") return;
    setlist([
      ...list, {label:itemInput,checked:false, id:list.length + 1}]);
      setItemInput('')

  }
  const deleteItem = (id:number) => {
    setlist(list.filter(item => item.id !== id ));
    
  }
  
  const togleItem = (id:number) => {
    let newList = [...list]; //clonei a lista antiga
    for (let i in newList){
      if (newList[i].id === id)//identifiquei o id que quero alterar // 
      {
        newList[i].checked = !newList[i].checked //fica alterando entre true and false
      }
    }
    setlist(newList)
  }

  return(
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>
      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-700">
        <input type="text" placeholder="O que deseja fazer?" className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3" value={itemInput} onChange={e => setItemInput(e.target.value)} />
        <button onClick={handleAddButton}>Adicionar</button>
      </div>

      <p className="my-4">{list.length} itens na lista</p>


      <ul className="w-full- max-w-lg list-disc pl-5">
        
        {list.map(item =>(
            <li key={item.id}>
              <input onClick={() => togleItem(item.id)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-3" />
              {item.label} -<button onClick={() => deleteItem(item.id)} className="hover:underline">[deletar]</button></li>
        ))}
      </ul>
    </div>
  )
}

export default Page;