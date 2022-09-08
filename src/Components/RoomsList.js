const RoomsList = ({rooms}) => {
    return (
        <div className="container">
            <div className="row">
                {rooms.map((room) => (
                    <div className="col-6" key={room.id}>
                        <div className="card room py-3">
                            <h4>{room.name}</h4>
                            <span>{room.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RoomsList;