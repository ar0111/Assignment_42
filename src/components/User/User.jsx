import { Link } from 'react-router-dom';
import man from '../../assets/images/man.png'

const User = ({user}) => {
    const {id, email, username, name} = user;
    return (
        <div className="col">
            <div className="card">
                <img src={man} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{email}</p>
                    <p className="card-text">{username}</p>
                    <Link to={`/users/${id}`}><button className='btn btn-outline-info'>Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default User;