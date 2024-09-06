import React, {useState} from 'react';
import Select from 'react-select';




const MakeSelect = ({searchValues,setSearchValues,options}) => {

	return (
            <Select
                // styles={{width: "160px",
                //     height: "45px",
                //     gap:"0px",
                //     border: "1px",
                //     margin: "0 0 0 20px",}}
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