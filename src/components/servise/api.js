import axios from "axios";

const KEY = "35302162-84574537f36714c774d06dfe1";


export const getPicFromPixabay = async (value, page)=> {
	const url=`https://pixabay.com/api/?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
	const response = await axios.get(url)
	return response.data;
}