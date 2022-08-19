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
        let onePieceData = await fetch(url).then(response => response.json());
        sortArray(onePieceData.characters);
        sortArray(onePieceData.islands);
        sortArray(onePieceData.mysticObjects);
        return await onePieceData;
    } catch (error) {
        console.log(error);
    }
}