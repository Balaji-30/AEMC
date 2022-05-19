import React from 'react'

const Onecourse = (props) => {
    let courseData = [
        {
            "Name": "Intro to Web Dev",
            "Desc": "Web Dev Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque consectetur ullam aut pariatur suscipit, officiis nam possimus cupiditate tempora! At ducimus aliquam dolorum ipsa odio, mollitia provident non maxime.",
            "Price": 999,
            "Duration": 1
        },
        {
            "Name": "Intro to ML",
            "Desc": "ML Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque consectetur ullam aut pariatur suscipit, officiis nam possimus cupiditate tempora! ",
            "Price": 1200,
            "Duration": 2
        },
        {
            "Name": "Intro to C",
            "Desc": "C Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque consectetur ullam aut pariatur suscipit",
            "Price": 799,
            "Duration": 3
        },
        {
            "Name": "Intro to CPP",
            "Desc": "C Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque consectetur ullam aut pariatur suscipit",
            "Price": 799,
            "Duration": 4
        }
    ]

    let newObject = courseData.find(course => course.Duration === parseInt((window.location.href).split("/")[4]))


    return (
        <>
            <div>Onecourse</div>
            {/* <div>{(window.location.href).split("/")[4]}</div> */}
            {/* <h2>{newArray}</h2> */}
            {console.log(newObject)}
            <h1>Name : {newObject.Name}</h1>
            <p>Description : {newObject.Desc}</p>
            <h4>Duration : {newObject.Duration} Weeks</h4>
            <h4>Cost : Rs {newObject.Price}</h4>
        </>
    )
}

export default Onecourse