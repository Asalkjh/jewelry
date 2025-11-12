"use client"

import axios from "axios"
import { useEffect, useState } from "react"

function Data() {
    const[dat,setDat]=useState([])
    useEffect(() => {
        fetch("/assets/database/data.json").then((res) => {
            res.json().then(data => {
                console.log(data.product)
                setDat(data.product)
        })
    })
},[])

    return (
        <div>
            data
            {
                dat.map((item) =>
                    <div>
                        
                        
                    </div>
                )
            }

        </div>
    )
}

export default Data;