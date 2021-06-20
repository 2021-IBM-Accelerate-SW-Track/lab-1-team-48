import React from 'react'
import { FormControl, Container, TextField} from '@material-ui/core'
import { Card, CardContent, Typography } from '@material-ui/core'




const Form = ({title})=>{
    return(
        <div>
            <Container maxWidth="sm">
                <form>
                    <FormControl fullWidth={true}>
                        <TextField label = "Insert here" required={true} />
                
                    </FormControl>
                </form>
            </Container>

            <Container>
                <Card variant="outlined" style={{marginTop: 35, background: "lightBlue"}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                        
                        {title}
                        </Typography>
                       
                       
                    </CardContent>

                </Card>
            </Container>


        </div>
    )
}

export default Form