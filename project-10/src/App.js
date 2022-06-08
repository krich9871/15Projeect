import React, { useEffect, useState } from "react";
import List from "./Component/List";
import Alert from "./Component/Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};
function App() {

  const [name, Setname] = useState('');
  const [list, Setlist] = useState(getLocalStorage());
  const [isEditing, Setisediting] = useState(false);
  const [EditId, SetEditid] = useState(null);
  const [alert, Setalert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true,'danger','please enter value') ;
    } else if (name && isEditing) {
       Setlist(list.map((item)=>{
         if(item.id === EditId){
           return {...item, title:name} ;
         }
         return item;
       }))
       Setname('');
       SetEditid(null);
       Setisediting(false)
       showAlert(true,'success','Value is edit') ;
    } else {
      showAlert(true,'success','Add new value')
      const newitems = { id: new Date().getTime().toString(), title: name };
      Setlist([...list, newitems]);
      Setname('');
    }
  }
  const showAlert = (show=false, type="" ,msg="") =>{
    Setalert({show,type,msg})
  }
  const clearList = ()=>{
    showAlert(true,'danger','Empty List');
    Setlist([]);
  }
  const removeitem = (id)=> {
    showAlert(true,'danger','item remove')
    Setlist(list.filter((item) => 
      item.id !== id 
    ))
  }
  const edititem = (id)=> {
    const speccificitem = list.find((item) => 
      item.id === id
    )
    Setisediting(true);
    SetEditid(id);
    Setname(speccificitem.title) ;
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  },[list])
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit} >

        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Show List</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="put Someting.." value={name} onChange={(e) => Setname(e.target.value)} />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeitem={removeitem} edititem={edititem}/>
          <button className="clear-btn" onClick={clearList}>clear items</button>
        </div>
       )}
    </section>
  );
}

export default App;
