import React, { Component } from 'react';

class ConsultationForm extends Component {
    render() {
        return (
            <>
             <form action="#" className="theme-form-one">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" placeholder="Name *" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" placeholder="Phone *" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" placeholder="Email *" />
                      </div>
                      <div className="col-md-6">
                        <select className="form-control" id="exampleSelect1">
                          <option>Whom you’re looking for?</option>
                          <option>Richards Mills</option>
                          <option>Mike Hussey</option>
                          <option>Jenilia D’sosa</option>
                          <option>David Warner</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <textarea placeholder="Message" defaultValue={""} />
                      </div>
                    </div>{" "}
                    {/* /.row */}
                    <button className="theme-button-one">GET A QUOTES</button>
                  </form>   
            </>
        );
    }
}

export default ConsultationForm;