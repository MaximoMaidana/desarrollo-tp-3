import { useState, useEffect } from "react"
import axios from "axios"

function FilaMoviento({movimiento, version, metodo}){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [infoExtra, setInfoExtra] = useState(null)
    const detalle = movimiento.version_group_details.find((d) => 
            (d.version_group.name === version &&
            d.move_learn_method.name === metodo
            )
    )

    function obtenerInfoExtra() {
        setLoading(true)
        setError(false)
        axios.get(`${movimiento.move.url}`)
        .then((response)=>{
            setLoading(false)
            setInfoExtra(response.data)
        })
        .catch(err=>{
            setLoading(false)
            setError("No se pudieron cargar los infoExtra del Movimiento")
        })
    }

    useEffect(()=>{
        obtenerInfoExtra()
    },[movimiento.move.url])

    const descripcionEsp = infoExtra?.flavor_text_entries.find(e => e.language.name === 'es')?.flavor_text;

    return (
        <div>
            <span className="nombre">{movimiento.move.name.replace("-", " ")} |</span>
            <span className="nivel"> Nivel: {detalle?.level_learned_at} |</span>

            {loading && <span> Cargando datos...</span>}

            {infoExtra && !loading && (
                <span className="detalles-extra">
                    <span> Base: {infoExtra.damage_class.name}</span> |
                    <span> Tipo: {infoExtra.type.name}</span> |
                    <span> Pwr: {infoExtra.power || 0}</span> |  
                    <span> PP: {infoExtra.pp}</span> |
                    <span> Acc: {infoExtra.accuracy ? `${infoExtra.accuracy}%` : "--"}</span> |
                    <span> {descripcionEsp || "Sin descripción disponible."}</span>
                </span>
            )}
        </div>
    )
}

export default FilaMoviento