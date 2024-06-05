import React, { useState } from "react";

function FormDemo1 () {
    const [{userName, city}, setFormState] = useState({
        userName: "",
        city: ""
    })
    

    function onChangeHandler(event) {
        
       // const {name,value} = event.target
        //ALTTATKİ İLE AYNI ANLAMA GELİYOR

        let name = event.target.name
        let value = event.target.value
        setFormState(prevState=>({
            ...prevState, [name]: value
        }))
        


    }

    function onSubmitHandler(event) {
        event.preventDefault() // bu fonksiyon submit tuşuna basınca sayfanın yenilenmemesini sağlar 
        alert(userName)
    }

    return( 
        <div>
            <form onSubmit={onSubmitHandler}>
                <h3>User Name</h3>
                <input name="userName" onChange={onChangeHandler} type="text" />
                <h3>User Name is {userName}</h3>

                <h3>City</h3>
                <input name="city" onChange={onChangeHandler} type="text" />
                <h3>City is {city}</h3>

                <input type="submit" value="Save" />
            </form>
        </div>
    )
}

export default FormDemo1