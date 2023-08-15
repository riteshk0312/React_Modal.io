import React from 'react'
import {useState} from 'react'
import Modal1 from './Modal1'
import Backdrop from './Backdrop'

const Todo = (props) => {

const [modalhandle,setmodalHandle]=useState(false)

const deleteHandler=()=>{
    setmodalHandle(true);
}
const closeModal=()=>{
    setmodalHandle(false);
}

  return (
    <>

        <div className='listTemplate'>

                <h2>{props.text}</h2>

                <button className='btn btn-primary' onClick={deleteHandler}>Delete</button>

                {modalhandle && <Backdrop onCancel={closeModal}/>}

                {modalhandle && <Modal1 onCancel={closeModal} onConfirm={closeModal}/>}


        </div>

    </>
  )
}

export default Todo