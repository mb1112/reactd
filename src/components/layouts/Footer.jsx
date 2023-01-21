import React from 'react';
import styled from 'styled-components';

function Footer(){
    return (
        <FooterContainter className="main-footer">
        <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                    <h4>Udruženje Kolarčeve zadužbine</h4>
                    <ul className="list-unstyled">
                        <li>Studentski trg 5, Beograd 11000</li>
                         <li>Telefon: 011/1234-678</li>    
                         </ul>  
                    </div>    
                </div>
                <div className="footer-bottom">
                 <p className="text-xs-center">
                 &copy;{new Date().getFullYear()} Zadužbina Ilije Kolarca
                 </p>
                </div>
            </div>
         </div>
        </FooterContainter>
    );
}

export default Footer;


const FooterContainter = styled.footer`
    .footer-middle {
        background: var(--mainLightGrey);
        padding-top: 2rem;
        color: var(--mainDark);
    }
    .footer-bottom {
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
`;