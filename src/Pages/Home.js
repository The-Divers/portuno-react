import NavBar from "../Components/NavBar";
import RoomsList from "../Components/RoomsList";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const { data: rooms, isPending, error } = useFetch('http://localhost:8000/rooms')

    return (
        <div className="container">
            {error && <div>{error}</div>}
            {isPending &&
                <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border text-primary mt-5" role="status">
                    </div>
                </div>
            }
            {rooms && <RoomsList rooms={rooms} />}
            <NavBar />
        </div>
    );
}

export default Home;