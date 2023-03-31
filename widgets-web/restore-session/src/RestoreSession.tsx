import { useEffect } from "react";

export function RestoreSession(): null {
    useEffect(() => {
        if (/lscheck=1/.test(document.cookie)) {
            document.location = '/ls/'
        }
    }, []);
    return null;
}
