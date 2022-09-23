import { Link } from "react-router-dom/cjs/react-router-dom";
import CardRoom from "../CardRoom";

const RoomsList = ({ rooms }) => {

    return (
        <div className="container room-list">
            <div className="row mb-5">
                {rooms.map((room) => (
                    <Link to={`/room/${room.id}`} className="card-link col-6 col-sm-4 col-md-3 mb-3">
                        <CardRoom room={room} />
                    </Link>
                ))}
            </div>
        </div >
    );
}

export default RoomsList;