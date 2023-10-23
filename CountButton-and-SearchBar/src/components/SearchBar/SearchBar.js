import React, { useState } from "react";
import "./SearchBar.css"

const SearchBar = (props) => {


    const [searchValue, setSearchValue] = useState("")
    
    const shouldDisplay = searchValue.length > 0

    const filteredProducts = props.products.filter((product) => {
        return product.includes(searchValue)
    })

    const handleInputChange = (event) =>{
        setSearchValue(event.target.value)
    }
    const handleClearClick = () => {
        setSearchValue("")
    }
    return(
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange}/>
            {shouldDisplay && <button onClick={handleClearClick}>Clear</button>}
            <ul>
            {filteredProducts.map((product) =>{
                return <li key={product}>{product}</li>

            })}
            </ul>
            
        </div>
    )
}

export default SearchBar