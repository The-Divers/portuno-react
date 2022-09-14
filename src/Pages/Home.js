import NavBar from "../Components/NavBar";
import Pending from "../Components/Pending";
import RoomsList from "../Components/Lists/RoomsList";
import useFetch from "../Hooks/useFetch";
import Header from "../Components/Header";

const Home = () => {
    const { data: rooms, isPending, error } = useFetch('http://localhost:8000/rooms')

    return (
        <div className="container">
            <Header />
                {error && <div>{error}</div>}
                {isPending && <Pending />}
                {rooms && <RoomsList rooms={rooms} />}
            <NavBar />
        </div>
    );
}

export default Home;