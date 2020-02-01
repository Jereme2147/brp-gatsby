import React from 'react'

const Category = ({category}) => {
    const style = {
        container:{
            borderRight: "solid",
            display: "flex",
            flexWrap: "wrap",
            // width: "50vw",
        },
        innerContainer: {
            width: "100%",
        }
    }
    return (
        <div style={style.container}>
            {category.map((item) => {
                return (
                    <div style={style.innerContainer}>
                        {console.log(item.name)}
                        <h2>{item.name}</h2>
                        <h3>{item.url}</h3>
                      
                    </div>
                )
            })}
        </div>
       
    )
}

export default Category