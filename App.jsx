import UserCard from "./stateliftinG/a/UserCard";

function App(){
    return(
        <div>
            <UserCard name="md rashid" desc="desc1" image={pic} style={{"border-radius:10px"}}/>
            <UserCard name="md one" desc="desc2" image={pic}/>
            <UserCard name="md tow " desc="descripiton3" image={pic}/>
            
        </div>
    )
}
export default App