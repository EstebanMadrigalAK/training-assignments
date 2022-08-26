/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */
import Searchbar from '../components/Searchbar';
import CharacterSection from './CharactersSection';
import IslandSection from './IslandSection';
import MistObjectsSection from './MistObjectsSection';
import { useEffect, useState } from "react";


function sortArray(objects) {
    objects.sort(function (obj1, obj2) {
        let x = obj1.name.toLowerCase();
        let y = obj2.name.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
}

function BottomSection() {

    const [data, setData] = useState();

    useEffect(() => {
        getOnePieceData();
    }, [])

    async function getOnePieceData() {
        const url = 'https://static.akurey.com/trainings/OnePieceInformation.json';
        try {
            const onePieceData = await fetch(url);
            const dataAsJson = await onePieceData.json();
            sortArray(dataAsJson.characters);
            sortArray(dataAsJson.islands);
            sortArray(dataAsJson.mysticObjects);
            setData(dataAsJson);
        } catch (error) {
            alert(error);
        }
    }

    if (!data) {
        return <p>Loading...</p>
    }
    return (
        <section className="bottom">
            <Searchbar></Searchbar>
            <CharacterSection data={data.characters}></CharacterSection>
            <IslandSection data={data.islands}></IslandSection>
            <MistObjectsSection data={data.mysticObjects}></MistObjectsSection>
        </section>
    );
}

export default BottomSection;