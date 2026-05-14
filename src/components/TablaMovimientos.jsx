import FilaMoviento from "./FilaMovimiento"

function TablaMovimientos ({movimientos, version}){
    
    return(
        <div>
           <ul>
                {movimientos.map((m)=>(
                    <FilaMoviento 
                        key={m.move.name} 
                        movimiento={m}
                        version={version}    
                    />
                ))}        
            </ul>
        </div>
    )
}

export default TablaMovimientos