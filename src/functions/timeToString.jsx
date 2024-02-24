import digitChange from "@/functions/digitChange";

const timeToString = (time) => {
    const datetime = new Date(time);
    return `${digitChange(datetime.getHours())}:${digitChange(datetime.getMinutes())}`;
}

export default timeToString;