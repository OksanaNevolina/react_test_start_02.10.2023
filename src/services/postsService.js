import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postsService = {
    getById : (id)=> apiService.get(urls.post.byId(id))
}
export {
    postsService
}