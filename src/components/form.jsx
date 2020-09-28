import React from 'react'

const Form = props => {
    return (
        <div className="container">
            <div>{ props.error ? error() : null }</div>
            <form onFinish={props.loadweather}>
            <div className="row">
                <div className="col-md-3">
                    <input type="text" className="form-class" name="city" id="city" autoComplete="off" required/>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-danger" type="submit">Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    )
}


function error() {
    return (
    <div className="alert alert-danger mx-5" role="alert">
        Please Enter City
    </div>
    )
}


export default Form;