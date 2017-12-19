import React from 'react'
import { Table, Well, Panel } from 'react-bootstrap'

const deploy = props => {
    return (
        <Panel header="deploy">
            <div>
                <div> <h2> Deploy Status:   </h2>
                </div>

                {props.deploy ? props.deploy.map((item, index) => {
                    return (

                        <Well key={item.id}>
                            <Table striped bordered condensed hover>
                                <thead>
                                    <tr>
                                        <th> ID: </th>
                                        <th> Agent </th>
                                        <th> IP Address </th>
                                        <th> Action </th>
                                        <th> Parameters </th>
                                        <th> Schedule </th>
                                        <th> Crontab </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> {item.id} </td>
                                        <td> {item.agent.label}</td>
                                        <td> {item.agent.ip_address}</td>
                                        <td> {item.probe.config.action} </td>
                                        <td> {item.probe.config.parameters} </td>
                                        <td> {item.probe.schedule.label} </td>
                                        <td> {item.probe.schedule.crontab} </td>
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

export default deploy 