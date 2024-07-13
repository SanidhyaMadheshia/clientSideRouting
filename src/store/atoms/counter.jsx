import {atom, selector} from "recoil"
export const countAtom =atom({
    key : "counter",
    default : 0
});
export const evenSelector=selector({
    key : "evenSelector",
    get : ({get})=>{
        const count =get(countAtom);
        return count %2;
    }
});

export const linkedInnetworkAtom=atom({
    key : "networkatom",
    default : 102
});
export const linkedJobAtom=atom({
    key : "jobatom",
    default : 102
});
export const linkedNotificationAtom=atom({
    key : "notificationatom",
    default : 102
});
export const linkedMessagingAtom=atom({
    key : "messageatom",
    default : 102
});
export const totalNotificationSelector= selector({
    key : "totalnotificationselector",
    get : ({get})=>{
        const networkAtomCount =get(linkedInnetworkAtom);
        const jobatomcount =get(linkedJobAtom);
        const notificationatomCount=get(linkedNotificationAtom);
        const messageatomcount=get(linkedMessagingAtom);
        return networkAtomCount + jobatomcount + notificationatomCount + messageatomcount;
        

    }
})