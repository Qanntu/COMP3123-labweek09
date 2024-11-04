function SayHello({fname, lname}/*props*/){
    //const name = "Liz"
    const myStyle = {
        color: 'black',
        backgroundColor: 'grey'
    }
    return(
        <h1 style={myStyle}>Hello {fname} {lname}</h1>
        //<h1>Hello {props.fname} {props.lname}</h1>
    )
}

export default SayHello;