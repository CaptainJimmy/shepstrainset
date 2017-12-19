import React from 'react'
import { Table, Well, Panel } from 'react-bootstrap'

const schedule = props => {
    console.log("Schedule", props.schedule)
    return (
        <Panel header="Schedule">
            <div>
    <div> <h2> Schedule Status:  </h2>
                </div>

                {props.schedule ? props.schedule.map((item, index) => {
                    return (

                        <Well key={item.id}>
                            <Table striped bordered condensed hover>
                                <thead>
                                    <tr>
                                        <th colSpan="1"> ID: </th>
                                        <th colSpan="1"> Action </th>
                                        <th colSpan="2"> Crontab </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> {item.id} </td>
                                        <td> {item.label} </td>
                                        <td> {item.crontab} </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Well>

                    )
                }) : null
                }
            </div>
        </Panel>
    )
}

export default schedule 