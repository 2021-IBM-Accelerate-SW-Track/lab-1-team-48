// import React, { useState } from 'react';
// import { FormControl, Container, TextField, Button } from '@material-ui/core';

// const TodoForm = ({ addTodo }) => {
//     const [text, setText] = useState("");
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         addTodo(text);
//         setText("")
//     };
//     return (
//         <Container maxWidth="sm">
//             <form onSubmit={handleSubmit}>
//                 <FormControl fullWidth={true}>
//                     <TextField label="Enter task here" 
//                     required={true} 
//                     value={text} 
//                     onChange={e => setText(e.target.value)} />
//                     <Button variant="contained" color="primary" style={{ marginTop: 15}} type="submit">Add</Button>
//                 </FormControl>
//             </form>
//         </Container>
//     );
// }

// export default TodoForm;
