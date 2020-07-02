import React, { useState } from "react";

import _uniqueId from "../../../util/uniqueIDd";

import "./style.css";

export interface CheckboxProps {
    desc: string;
    checked: boolean | undefined;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
    desc,
    checked,
}) => {
    const [value, setValue] = useState(checked || false);
    const [id] = useState(_uniqueId("checkbox"));

    return (
        <label className="checkbox">
            <input
                type="checkbox"
                id={id}
                checked={value}
                onClick={() => setValue(!value)}
            />
            <span className="checkmark"></span>
            {desc}
        </label>
    );
};

export default Checkbox;
