/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */
import footerIcon from '../svg/footer-icon.svg';

function Footer() {
    return (
        <footer className="custom-footer">
            <img className="footer-image" src={footerIcon} alt="Footer One-Piece logo" />
            <small className="footer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at vel congue scelerisque tortor tortor.
            </small>
        </footer>
    );
}

export default Footer;