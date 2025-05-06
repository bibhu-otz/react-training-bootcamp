import data from '../data.json';
function Users(){

    return(
        <div>
            <h1 className='text-center text-danger'>Users List</h1>
            <hr/>
           <div className="row">

          
            {
                //JSON.stringify(data.users)
               
                data.users.map((user)=>(
                    <div className="col-md-3">
                        <div className="card m-1">
                        <img src={user.avatar} className="card-img-top" alt={user.first_name}/>
                        <div className="card-body">
                        <h5 className="card-title">{user.first_name } {user.last_name}</h5>
                        <p className="card-text">{user.email}</p>
                        </div>
                        </div>
                    </div>
                ))
               
            }
             </div>
        </div>
    )
}

export default Users;