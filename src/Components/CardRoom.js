const CardRoom = ({ room }) => {
    return (
        <div className="col-6 col-sm-4 col-md-3 mb-3" key={room.id}>
            <div className="card card-room text-center py-4">
                <h4>{room.name}</h4>
                <span className={`${room.status == "disponível" ? "disponivel" : "ocupado"}`}>{room.status}</span>
            </div>
        </div>
    );
}

export default CardRoom;