import { useEffect } from "react";

export function RestoreSession(): null {
    useEffect(() => {
        if (/lssid=/.test(document.cookie)) {
            document.location = '/ls/'
        }
    }, []);
    return null;
}
