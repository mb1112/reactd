import React, { Component } from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

class Contact extends Component{
    render(){
        function sendEmail(e) {
            e.preventDefault();
            emailjs.sendForm('service_mtcc6tk','template_kqzzfwb', e.target, null)
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
        }
        return(
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h2 style={{color:'#ed5f2b'}}><strong>Naša lokacija</strong></h2>
                    </div>
                
                <div className="row">
                    <div className="col-md-7">
                    <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Studentsk%20trg%205+(Kolarac)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{
                        border: '0',
                        width: '100%',
                        height: '315px',
                        frameborder: '0'
                    }} allowFullScreen 
                    />
                    
                    </div>
                    <div className="col-md-5">
                        <h2 style={{color:'#ed5f2b'}}><strong>Ostavite svoje podatke</strong></h2>
                        <form onSubmit={sendEmail}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Ime" name="name"/>
                            </div><br></br>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" name="email"/>
                            </div><br></br>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Tema" name="subject"/>
                            </div><br></br>
                            <textarea className="form-control" cols="30" rows="3" placeholder="Ostavite poruku" name="message"/>
                            <br></br>
                            <input type="submit" className="btn btn-outline-primary text-uppercase" value="Pošaljite">
                               
                            </input>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
        );
        }
}

export default Contact;
