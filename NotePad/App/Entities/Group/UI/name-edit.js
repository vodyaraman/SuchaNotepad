import React from "react";
import { InputText } from "../../../Pull/Note";

const EditGroupName = ({ textColor = '#000', fontSize = 18, groupName = 'Pandas' }) => {
    return (
        <InputText
          textColor={textColor}
          text={groupName}
          multiline={true}
          height={"100%"}
          fontSize={fontSize}
        />
    );
};

export default EditGroupName;