import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer my-4 bg-warning-subtle py-5">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h4 className="">Quick Links</h4>
                        <ul className="p-0">
                            <li className="">Home</li>
                            <li className="">Product</li>
                            <li className="">Pricing</li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <h4 className="">Service</h4>
                        <ul className="p-0">
                            <li className="">Web Design & Development</li>
                            <li className="">Graphics Design</li>
                            <li className="">Digital Marketing</li>
                            <li className="">UI/UX Design</li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <h4 className="">Support</h4>
                        <ul className="p-0">
                            <li className="">Company</li>
                            <li className="">Press Media</li>
                            <li className="">Our Blogs</li>
                            <li className="">Contact Us</li>
                        </ul>
                    </div>
                </div>

                <div className="footer_bottom d-flex justify-content-between border-top my-3">
                    <p className="copyright mt-3 text-secondary">&copy; 2023 Evara. All right reserved</p>
                    <span className="designer mt-3 text-secondary">Designed by Arafat Rahman</span>
                </div>
            </div>
           
        </footer>
    );
};

export default Footer;