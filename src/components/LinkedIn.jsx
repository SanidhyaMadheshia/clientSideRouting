import { useRecoilValue } from "recoil";
import { linkedInnetworkAtom, linkedJobAtom, linkedMessagingAtom, linkedNotificationAtom, totalNotificationSelector } from "../store/atoms/counter";

export function Linkedin(){
    const networknotificationcount=useRecoilValue(linkedInnetworkAtom);
    const jobnotificationcount=useRecoilValue(linkedJobAtom);
    const notificationcount=useRecoilValue(linkedNotificationAtom);
    const messagenotificationcount=useRecoilValue(linkedMessagingAtom);
    return(
        <>
            <button>home </button>

            <button>my networkatom({networknotificationcount>=99? "99+" : networknotificationcount})</button>
            <button>jobs({jobnotificationcount})</button>
            <button>messaging({messagenotificationcount})</button>
            <button>notification({notificationcount})</button>

            <button>Me({totalNotificationSelector})</button>
        </>
    )
}