import * as React from "react";
import { HelloWorld } from "my_npm_pkg2";
const Test = () => {
    return (React.createElement("div", null,
        React.createElement(HelloWorld, null)));
};
