import React, { Component } from 'react';
import '../styles/Footer.css';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="/aboutus">about us</a></li>
                                <li><a href="https://github.com/thatscringebro/TPWebWizards">our services</a></li>
                                <li><a href="https://github.com/thatscringebro/TPWebWizards">privacy policy</a></li>
                                <li><a href="/contactus">Contact us</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="https://github.com/thatscringebro/TPWebWizards">FAQ</a></li>
                                <li><a href="https://github.com/thatscringebro/TPWebWizards">shipping</a></li>
                                <li><a href="https://github.com/thatscringebro/TPWebWizards">returns</a></li>
                                <li><a href="https://github.com/thatscringebro/TPWebWizards">order status</a></li>
                                <li><a href="https://github.com/thatscringebro/TPWebWizards">payment options</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>online shop</h4>
                            <ul>
                                <li><a href="https://github.com/thatscringebro/TPWebWizards">Vinyls</a></li>
                                <li><a href="https://github.com/thatscringebro/TPWebWizards">Compact discs</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="https://facebook.com"><img src="../../../Images/Social/facebook.png" alt="Facebook" /></a>
                                <a href="https://twitter.com"><img src="../../../Images/Social/twitterX.png" alt="Twitter" /></a>
                                <a href="https://instagram.com"><img src="../../../Images/Social/instagram.png" alt="Instagram" /></a>
                                <a href="https://pinterest.com"><img src="../../../Images/Social/pinterest.png" alt="Pinterest" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

