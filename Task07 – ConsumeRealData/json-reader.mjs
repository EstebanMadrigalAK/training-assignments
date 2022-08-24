/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

function sortArray(objects){
    objects.sort(function(obj1, obj2){
        let x = obj1.name.toLowerCase();
        let y = obj2.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
}

export async function getOnePieceData() {
    const url = 'https://static.akurey.com/trainings/OnePieceInformation.json';
    try {
        const onePieceData = await fetch(url);
        const dataAsJson = await onePieceData.json();
        sortArray(dataAsJson.characters);
        sortArray(dataAsJson.islands);
        sortArray(dataAsJson.mysticObjects);
        return dataAsJson;
            
    } catch (error) {
        alert(error);
    }
}