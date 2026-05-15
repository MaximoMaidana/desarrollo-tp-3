import FilaMoviento from "./FilaMovimiento"

function TablaMovimientos ({movimientos, version, metodo}){
    
    return(
        <div>
           <ul>
                {movimientos.map((m)=>(
                    <FilaMoviento 
                        key={m.move.name} 
                        movimiento={m}
                        version={version} 
                        metodo={metodo}   
                    />
                ))}        
            </ul>
        </div>
    )
}

export default TablaMovimientos