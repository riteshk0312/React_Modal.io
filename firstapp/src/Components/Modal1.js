import React from 'react'

const Modal1 = (props) => {

    const cancelHandler=()=>{
        props.onCancel()
    }

    const confirmHandler=()=>{
        props.onConfirm()
    }

  return (
    <>
            <div className='mymodal'>
                <h3>Are you sure?</h3>

                <button type= 'button' className='btn btn-primary' onClick={cancelHandler}>Cancel</button>

                <button type= 'button' className='btn btn-primary' onClick={confirmHandler}>Confirm</button>

            </div>
    </>
  )
}

export default Modal1