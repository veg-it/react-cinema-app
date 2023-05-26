import { useParams } from 'react-router-dom';

const ActorPage = () => {
    const { cID } = useParams();
    return(
        <p>{cID}</p>
    )
}
export default ActorPage;