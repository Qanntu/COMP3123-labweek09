function College({name}/*props*/){
    
    const myStyle = {
        color: 'black',
        backgroundColor: 'grey'
    }
    return(
        <h1 style={myStyle}>College {name}</h1>
   
    )
}

export default College;