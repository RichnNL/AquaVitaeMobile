import PATH from "../../constants/pathData"
import LocationType from "../../types/Misc/LocationType";

const retrieveDetails = async (language: string, placeId: string) => {
    try {
        const response = await fetch(PATH.APIs.googleDetails(language, placeId), {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        });
        const results = await response.json();
        const addresses = results.result.address_components;
        const location: LocationType = {country: '',
                                        city: ''};
        if(addresses) {
            for(let i = 0; i < addresses.length; i++) {
                const types = addresses[i].types;
                if(types){
                    if(types.includes('locality')){
                        const shortName = addresses[i].short_name;
                        if(shortName) {
                            location.city = addresses[i].short_name;
                        }
                         
                    } else if(types.includes('country')) {
                        const shortName = addresses[i].long_name;
                        if(shortName) {
                            location.country = addresses[i].long_name;
                        }
                    }
                    if(location.country && location.city && location.country.length > 0
                        && location.city.length > 0) {
                            return location;
                        }
                }
            }
        }
        return location;
    } catch {
        return null;
    }
}

export default retrieveDetails;
