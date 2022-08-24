/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */
import Searchbar from '../components/Searchbar';
import CharacterSection from './CharactersSection';
import IslandSection from './IslandSection';
import MistObjects from './MistObjects';

function BottomSection(){
    return(
        <section className="bottom">
            <Searchbar></Searchbar>
            <CharacterSection></CharacterSection>
            <IslandSection></IslandSection>
            <MistObjects></MistObjects>
        </section>
    );
}

export default BottomSection;