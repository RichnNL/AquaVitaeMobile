type itemValue = string | number | boolean | null;
//type itemArray = {[key: string]: itemValue[]};
type itemKey = string;

export interface ILocalStorage {
    getItem(itemKey): Promise<itemValue>;
    setItem(itemKey: itemKey, itemValue: itemValue): Promise<Boolean>;
}

class AsyncStorage {
    itemKey;
    itemValue;
    getItem(key: string) {
        if(key == this.itemKey.itemKey) {
            return this.itemValue;
        }
    };
    setItem(key: string, value:string) {
        this.itemKey = key;
        this.itemValue = value;
    };
    removeItem(key: string) {
        this.itemKey = null;
        this.itemValue = null;
    }

}

class LocalStorage implements ILocalStorage {
    asyncStorage = new AsyncStorage();
    getItem = async(itemKey: itemKey) => {
        let itemvalue: itemValue = null;
        try {
            const value = await this.asyncStorage.getItem(itemKey);
            if(value != null) {
                const retrievedObj: any = JSON.parse(value);
                if(retrievedObj.dataType == 'string'){
                    itemvalue = retrievedObj.value;
                } else if(retrievedObj.dataType == 'boolean') {
                    if(retrievedObj.value == 'true'){
                        itemvalue = true;
                    } else {
                        itemvalue = false;
                    }
                } else if (retrievedObj.dataType == 'number'){
                    itemvalue = +retrievedObj.value;  
                }
            }
            } catch(e) {
                return null;
        }
        return itemvalue;
    };    
    setItem = async(itemKey: itemKey, itemValue: itemValue) => {
        if(itemKey != null) {
            if(itemKey != ''){
                try {
                    if(itemValue == null) {
                      await this.asyncStorage.removeItem(itemKey);
                    } else {
                        const item = this.toJson(itemValue);
                        await this.asyncStorage.setItem(itemKey, item);
                    }
                    return true;
                } catch (e) {
                    return false;
                }
            }
        }
        return false;
    }

    toJson = (itemValue: itemValue) => {
        let value: string = '';
        if (typeof itemValue == "string") {
            value = JSON.stringify({'value': itemValue, 'dataType': 'string'});
        } else if(typeof itemValue == "number") {
            value = JSON.stringify({'value': itemValue, 'dataType': 'number'});
        } else if(typeof itemValue == "boolean") {
            value = JSON.stringify({'value': itemValue, 'dataType': 'boolean'});
        } 
        return value;
    }
}

export default new LocalStorage();