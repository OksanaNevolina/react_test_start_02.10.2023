import {apiService} from "./apiService";
import {urls} from "../constants";

const carService={
    getAll:()=> apiService.get(urls.base),
create:(car)=> apiService.post(urls.base,car),
update:(id,car)=> apiService.put(urls.byId(id),car),
    delete:(id)=> apiService.delete(urls.byId(id))
}

export {
    carService
}