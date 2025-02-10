import React from 'react'

export default function ToDoForm(props) {
  return (
    <div>
        <div className='container my-5'>
        <div className="card text-bg-light mb-3 w-50 mx-auto">
                <div className="card-header">{props.title}</div>
                <div className="card-body">
                <form className=''>
                    <div className="form-group d-flex">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Todo Task"/>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                    </form>
                </div>
                </div>
                </div>
    </div>
  )
}