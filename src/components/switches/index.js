import React from "react";
import Switch from "@material-ui/core/Switch";

export default function Switches({ toggleChacked }) {
    const [state, setState] = React.useState({
        checkedB: toggleChacked
    });

    const handleChange = (event) => {
        setState({ [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <Switch
                checked={toggleChacked}
                onChange={handleChange}
                color="primary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
            />
        </div>
    );
}