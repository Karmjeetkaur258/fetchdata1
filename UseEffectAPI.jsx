import React, { useEffect, useState } from 'react'

 const UseEffectAPI = () => {
 const [users,setUsers]=useState([]);

 
    const getUsers=async()=>
    {
       const response= await fetch('https://api.github.com/users');
       setUsers(await response.json());

    }
 

useEffect(()=>{
    getUsers();
},[]);

  return (<>
    <div>UseEffectAPI</div>
     <h2>List of Github Users</h2>
    <div classname="container">
        <div className='row'>
        {
            users.map((curele)=>{
                return(<>          
                          <div>
                          <div className='col'>
                <div className= "card_p2">
                    <div class="d-flex">
                        <div class="image">
                            <div class="ml">
                                <h4 class="textleft">{curele.login}</h4>
                                    <div class="articles">Aticles</div>
                                        <div class="followers">Followers</div>
                                            <div className='rating'>Rating</div>
                            </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    
                          
                          </>
                )
            })
        }







            <div className='col'>
                <div className= "card_p2">
                    <div class="d-flex">
                        <div class="image">
                            <div class="ml">
                                <h4 class="textleft">karam</h4>
                                    <div class="articles">Aticles</div>
                                        <div class="followers">Followers</div>
                                            <div className='rating'>Rating</div>
                            </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default UseEffectAPI
