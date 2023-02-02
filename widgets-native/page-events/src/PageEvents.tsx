import { ReactElement, createElement } from "react";
import { NavigationEventCallback, NavigationEvents } from "react-navigation";
import { ActionValue } from "mendix";

import { PageEventsProps } from "../typings/PageEventsProps";

type ActionName = "onWillFocus" | "onDidFocus" | "onWillBlur" | "onDidBlur";

export function PageEvents(props: PageEventsProps<any>): ReactElement {
    const bindAction = (actionName: ActionName): NavigationEventCallback => {
        return () => {
            const action = props[actionName] as ActionValue | undefined;
            if (action?.canExecute && !action?.isExecuting) {
                action.execute();
            }
        };
    };

    return (
        <NavigationEvents
            onWillFocus={bindAction("onWillFocus")}
            onDidFocus={bindAction("onDidFocus")}
            onWillBlur={bindAction("onWillBlur")}
            onDidBlur={bindAction("onDidBlur")}
        />
    );
}
