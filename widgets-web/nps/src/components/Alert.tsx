import { FunctionComponent, createElement } from "react";
export const Alert: FunctionComponent<{}> = ({ children }) =>
    children ? <div className="spacing-outer-top alert alert-danger mx-validation-message">{children}</div> : null;
