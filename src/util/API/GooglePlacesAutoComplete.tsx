import PATH from "../../constants/pathData"
import SearchableDropDownItemType from "../../types/Misc/SearchableDropDownItem";

const retrieveCities = async (searchText: string, language: string, lat: number, long: number) => {
    try {
        const response = await fetch(PATH.APIs.googlePlaces(searchText, language, lat, long), {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        });
        const results = await response.json();
        if(results) {
            let cities: SearchableDropDownItemType[] = []; 
            for(let i = 0; i < results.predictions.length; i++) {
                const city: SearchableDropDownItemType = {
                    id: i,
                    name: results.predictions[i].structured_formatting.main_text
                }
                  cities.push(city);
            };
            if(cities && cities.length > 0) {
                return cities;
            }
        }
        return [];
    } catch {
        return [];
    }
}

export default retrieveCities;
