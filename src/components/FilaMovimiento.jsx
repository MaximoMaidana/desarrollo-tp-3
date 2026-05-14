function FilaMoviento({movimiento, version}){
    const detalle = movimiento.version_group_details.find(
        (d) => d.version_group.name === version
    )

    return (
        <div>
            <span className="nombre">{movimiento.move.name.replace("-", " ")}</span>
            <span className="nivel"> - Nivel: {detalle?.level_learned_at || "MT/Otros"}</span>
        </div>
    )
}

export default FilaMoviento