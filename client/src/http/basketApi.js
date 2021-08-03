import {$authHost} from "./index";

export const createBasket = async (deviceId, basketId) => {
    const {data} = await $authHost.post('api/basket', {deviceId, basketId})
    return console.log(data) 
}



