import { useAuth } from "../context/AuthContext";
import { checkIn } from "../services/attendanceService";
import AIChat from "../components/AIChat";

function WorkerDashboard() {

    const { user } = useAuth();

    return (

<div className="page">

<div className="container">

<h1>👩‍⚕️ Health Worker Dashboard</h1>

<div className="card">

<img
src={user?.photoURL}
alt=""
style={{
width:"90px",
height:"90px",
borderRadius:"50%",
marginBottom:"15px"
}}
/>

<h2>{user?.displayName}</h2>

<p>{user?.email}</p>

<div style={{
display:"flex",
justifyContent:"center",
gap:"15px",
marginTop:"25px",
marginBottom:"30px"
}}>

<button
className="primary-btn"
onClick={()=>checkIn(user)}
>
📍 Check In
</button>

</div>

</div>

<div style={{marginTop:"35px"}}>

<AIChat/>

</div>

</div>

</div>

    );

}

export default WorkerDashboard;