import React, {useState} from 'react';
import Select from 'react-select';


const option = [
    {  label: "최신순", value: "latest " },
    {  label: "추억순", value: "mostPosted " },
    {  label: "공감순", value: "mostLiked " },
    {  label: "뱃지순", value: "mostBadge" },
  ]

const MakeSelect = ({searchValues,setSearchValues}) => {

	return (
            <Select
            	onChange={(e) => setSearchValues({
                    ...searchValues ,
                    "option" : e.value,
                })}
            	placeholder="최신순"
                options={option}
                />
    )
}

export default MakeSelect;