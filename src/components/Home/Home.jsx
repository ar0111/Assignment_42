import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Home = () => {
    const users = useLoaderData();
    console.log(users);

    return (
        <div className="container row row-cols-1 row-cols-md-3 g-4 mx-auto my-5 d-flex justify-content-center">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Home;