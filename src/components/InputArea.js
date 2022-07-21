import React from 'react';
import { Grid,Input } from 'semantic-ui-react';
const InputArea = ({setCity,setShow,setLoading}) => {
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          setCity(e.target.value.toLowerCase());
        }
      };
    return (
        <>
        <Grid.Row className="input-area-row">
        <Input
          className="search-input"
          onKeyPress={handleKeyPress}
          onChange={(e) => {
            setShow(e.target.value);
            setLoading(true);
          }}
          icon="search"
          placeholder="Enter a cityname..."
        ></Input>
      </Grid.Row>
            
        </>
    );
};

export default InputArea;