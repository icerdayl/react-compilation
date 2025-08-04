function ProfilePicture(){
    const imageUrl = 'https://media.tenor.com/h_knMdxo5akAAAAe/lobo-solitario.png'
    const clicked = () => console.log("Ouch")

    return(<img onClick={clicked} src={imageUrl}></img>)
}

export default ProfilePicture