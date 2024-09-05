import React, {useState} from 'react';
import Select from 'react-select';




const MakeSelect = ({searchValues,setSearchValues,options}) => {

	return (
            <Select
            	onChange={(e) => {
                    console.log(e.value)
                    setSearchValues({
                    ...searchValues ,
                    "option" : e.value,
                })}}
            	placeholder="최신순"
                options={options}
                />
    )
}

export default MakeSelect;