/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */
import CrewImage from '../components/CrewImage';
import Sipnosis from './Sipnosis';

import onePieceLogo from '../svg/One-Piece-Logo 1.png';

function TopSection(){
    return(
        <section className = "top">
            <CrewImage></CrewImage>
            <img className="logo-header" src={onePieceLogo} alt="Sipnosis One-Piece logo"/>
            <Sipnosis></Sipnosis>
        </section>
    );
}

export default TopSection;