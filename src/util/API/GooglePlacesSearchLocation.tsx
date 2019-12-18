import PATH from "../../constants/pathData"
import LocationType from "../../types/Misc/LocationType";


const retrieveCurrentLocation = async (language: string, lat: number, long: number) => {
    try {
        const response = await fetch(PATH.APIs.googleSearch(language, lat, long), {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        });
        const results = await response.json();
        if(results) {
            for(let i = 0; i < results.results.length; i++) {
               if(results.results[i].plus_code) {
                   const placeId: string = results.results[i].place_id;
                   if(placeId) {
                       return placeId;
                   }
               }
            };
        }
        return null;
    } catch {
        return null;
    }
}

export default retrieveCurrentLocation;
