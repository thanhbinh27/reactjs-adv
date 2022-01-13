import { useParams } from 'react-router-dom';

export function OthersProfile(props) {
    let param = useParams();
    return(
        <h1>this is  profile of user's id {param.id}</h1>
    );
}
