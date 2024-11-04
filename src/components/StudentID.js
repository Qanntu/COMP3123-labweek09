function StudentID({number}/*props*/){
    
    const myStyle = {
        color: 'black',
        backgroundColor: 'grey'
    }
    return(
        <h1 style={myStyle}>Student ID {number}</h1>
   
    )
}

export default StudentID;