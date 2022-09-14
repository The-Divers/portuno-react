import CardRoom from "../CardRoom";

const RoomsList = ({ rooms }) => {
    return (
        <div className="container room-list">
            <div className="row mb-5">
                {rooms.map((room) => (
                    <CardRoom room={room} />
                ))}
            </div>
        </div>
    );
}

export default RoomsList;