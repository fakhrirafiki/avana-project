import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// import { Gap, Switches } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import Switch from "@material-ui/core/Switch";




const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },

    tableContainer: {
        marginBottom: 300,
    }
});


const ModulesTable = () => {
    const classes = useStyles();

    const dispatch = useDispatch()

    const [renderDong, setRenderDong] = useState(false)

    const stateGlobal = useSelector(state => state.Home.home) //Array
    const rows = stateGlobal[7].childs

    const handleChange = (event) => {
        setRenderDong(!renderDong)

        let stateGlobalCopy = stateGlobal
        const index = rows.findIndex((module) => module.id === event.target.id)
        rows[index] = {
            ...rows[index],
            [event.target.name]: !rows[index].[event.target.name]
        }
        stateGlobalCopy[7] = {
            ...stateGlobalCopy[7],
            childs: rows
        }
        dispatch({ type: 'SET_HOME_LIST', payload: stateGlobalCopy })
    };

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Modules Id</TableCell>
                        <TableCell align="center">IsShowed</TableCell>
                        <TableCell align="center">IsAllowed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((module) => {
                        // eslint-disable-next-line no-lone-blocks
                        // { if (module.id === 'all-module') return false }
                        return (
                            <TableRow key={module.id}>
                                <TableCell component="th" scope="row">{module.id}</TableCell>
                                <TableCell align="center" >
                                    <Switch
                                        checked={module.isShowed}
                                        onChange={handleChange}
                                        color="primary"
                                        id={module.id}
                                        name='isShowed'
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <Switch
                                        checked={module.isAllowed}
                                        onChange={handleChange}
                                        color="primary"
                                        id={module.id}
                                        name='isAllowed'
                                    />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ModulesTable