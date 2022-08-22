import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({handleSubmitForm}) => {
  const [First, setFirst] = useState('');
  const [Last, setLast] = useState('');
  const [Handler, setHandler] = useState('');
  const navigate = useNavigate();

  const onChange = (event)=>{
    const idElement = event.target.id
    eval(`set${idElement}('${event.target.value}')`)
  }

  const sendForm = ()=>{
    const data = {
      First,
      Last,
      Handler
    }
    console.log("Hola desde SendForm",data)

    handleSubmitForm(data)

    setFirst('')
    setLast('')
    setHandler('')
    navigate('/')

  }

  return (
    <div className='row'>
      <div className='col-3'>
      </div>
      <div className='col-6'>
        <div className="mb-3">
          <label htmlFor="First" className="form-label">
            First
          </label>
          <input
            type="email"
            className="form-control"
            id="First"
            value={First}
            onChange={onChange}
            placeholder="First"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Last" className="form-label">
            Last
          </label>
          <input
            type="email"
            className="form-control"
            id="Last"
            value={Last}
            onChange={onChange}
            placeholder="Last"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Handler" className="form-label">
            Handler
          </label>
          <input
            type="email"
            className="form-control"
            id="Handler"
            value={Handler}
            onChange={onChange}
            placeholder="Handler"
          />
        </div>
        <button onClick={sendForm}
         type="button" className="btn btn-primary">
          Enviar
        </button>
      </div>
      <div className='col-3'>
      </div>

    </div>

  )
}

export default Form