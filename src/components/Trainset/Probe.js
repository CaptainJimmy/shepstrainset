import React from 'react'
import { Table, Well, Panel } from 'react-bootstrap'

const probe = props => {
    return (
        <Panel header="probe">
            <div>
                <div> <h2> Probe Status: </h2>
                </div>

                {props.probe ? props.probe.map((item, index) => {
                    return (

                        <Well key={item.id}>
                            <Table striped bordered condensed hover>
                                <thead>
                                    <tr>
                                        <th> ID: </th>
                                        <th> Action: </th>
                                        {item.config.parameters.map(turkey => {
                                            return (
                                                <th key={turkey.id}> {turkey.key} </th>
                                            )
                                        })}
                                        <th> Schedule </th>
                                        <th> Crontab </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> {item.id} </td>
                                        <td> {item.action} </td>
                                        {item.config.parameters.map(chicken => {
                                            return (<td key={chicken.id}> {chicken.value} </td>)
                                        })}
                                        <td> {item.schedule.label} </td>
                                        <td> {item.schedule.crontab} </td>
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

export default probe 