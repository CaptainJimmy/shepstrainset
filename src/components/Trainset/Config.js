import React from 'react'
import {Table, Well, Panel} from 'react-bootstrap'

const config = props => {
    console.log("socks",props.config)
return (
        <Panel header="Config">
    <div>
<div> <h2> Config Status:  { props.message ?  props.message : null }  </h2> 
    </div>

        {props.config? props.config.map( (item,index)=>{
            return(

        <Well key={item.id}>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th colSpan="1"> ID: </th>
                        <th colSpan="1"> Action </th>
                        {item.parameters.map(turkey =>{
                            return (
                                <th colSpan="1" key={turkey.id}> {turkey.key} </th>
                            )
                        })}
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> {item.id} </td>
                        <td> {item.action} </td>
                     {item.parameters.map( chicken => {
                        return (<td key={chicken.id}> {chicken.value} </td>)
                    })}
                    </tr>
                </tbody>
            </Table>
        </Well>
        
    )
        }): null
    }
    </div>
</Panel>
)
}

export default config 