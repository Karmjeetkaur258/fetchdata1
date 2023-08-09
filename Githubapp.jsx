import React, { useEffect } from 'react'


    const getUsers=async()=>
    {
        const response= await fetch('https://api.github.com/users');

    }


const Githubapp = () => {
        useEffect(()=>{
        getUsers();
    })
    

  return (
    <>
    <h2>List of Github Users</h2>
    <div classname="container">
        <div className='row'>
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

export default Githubapp