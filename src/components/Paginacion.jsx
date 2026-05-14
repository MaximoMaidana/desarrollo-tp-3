function Paginacion({nextUrl, previousUrl, cambiarPagina}){
    
    return(
        <div>
            <button 
                disabled={!previousUrl}
                onClick={()=>cambiarPagina(previousUrl)}
            >
                Anterior
            </button>
            
            <button 
                disabled={!nextUrl}
                onClick={()=>cambiarPagina(nextUrl)}
            >
                Siguiente
            </button>
        </div>
    )
}

export default Paginacion