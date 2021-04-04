//implement back end here
import {firestore} from "./firebase"


//need functions setBikeProgress getBikeProgress, setRecycleProgress getRecycleProgress,  setFoodProgress getFoodProgress
//return the values, updating state variables should probably be done from dashboard

//using firbase? yeah sure, use the GCP thing they want use to use, the stateless nosql database within firebase, should be pretty simple because we just need to store 6 values

/*async function setProgress(type, newProgress) {

    const check = ('bike', 'recycle', 'food');
    if (!(type in check)){
        throw TypeError;
    }
    const data = {
        progress: newProgress
    }

    firestore.collection(type).add(data);
    return null;
}

async function getProgress(type){
    const check = ('bike', 'recycle', 'food');
    if (!(type in check)){
        throw TypeError;
    }   
    const ref = db.collection('Progress').doc(type);
    const doc = await ref.get();
    return(doc);
}
*/

