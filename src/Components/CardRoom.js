const CardRoom = ({ room }) => {
    return (
        <div key={room.id}>
                <div className="card card-room text-center py-3">
                    <h4>{room.name}</h4>
                    <span className={`${room.status == "disponível" ? "disponivel" : "ocupado"}`}>{room.status}</span>
                </div>
        </div>
    );
}

export default CardRoom;