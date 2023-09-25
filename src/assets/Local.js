import toast from "react-hot-toast";

const getData = ()=>{
    const localData = localStorage.getItem('donate');
    return localData? JSON.parse(localData): [];
    
}
const setData = (id, title) =>{
    const intId = parseInt(id);
    const localData = getData();
    const localDataCheck = localData.find(e=>intId===e);
    if(!localDataCheck){
        const newData = [...localData, intId];
        localStorage.setItem('donate', JSON.stringify(newData));
        toast.success(`Your donation for ${title} is succesfull.`)
    }else{toast.error(`You have already donated for ${title}`)}
}
export {getData, setData};