import React from "react";
import Form from "./Form"

const FormList = ({ todoforms }) => {
    return(
        <div>
            {todoforms.map(todoform =>(
                <Form key={todoform.id} todoforms={todoform.title}/>

            ))}    
        </div>
    );
};

export default FormList