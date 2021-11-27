import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchBar = () => {

const [myOptions, setMyOptions] = useState([])

const getDataFromAPI = () => {
    const employeeDetails = [
       'Tiger Nixon', 'Devling', 'Davolio Nancy', 'Leverling Janet', 'Yoshi Nagase', 'Shweta', 'Rachel', 'Ross Geller', 'Monica', 'Chandler' 
    ]
	setMyOptions(employeeDetails)
}

return (
	<div style={{marginTop: '20px' }}>
	<Autocomplete
		style={{ width: 240, padding:0, margin:20 }}
		freeSolo
		autoComplete
		autoHighlight
		options={myOptions}
		renderInput={(params) => (
		<TextField {...params}
			onChange={getDataFromAPI}
			label="Search Box"
		/>
		)}
	/>
	</div>
);
}

export default SearchBar
