import React from 'react'

import Stylee from './Style.module.css'

function Function(){

    const mysl = {
        color:'blue'
    }

    


    return (
        <div>

        <div className={Stylee.mydiv}>
            <h1 >This is created using Class Component</h1>
            <p>This is done using external CSS</p>
            <p style={mysl}>This is done using inline CSS</p>
            {/* <button onClick={this.mybtn}>Click</button>
            {
                this.state.msg?
                <p>hello</p>:null
            } */}
            

        </div>
    </div>
    );
}

export default Function;