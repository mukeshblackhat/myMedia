import Profile from '../../../components/src/Profile.jsx'

const User=({params})=>{
    console.log(params)
    return(
        <>
       <Profile params={params}/>
        </>
    )
}
export default User