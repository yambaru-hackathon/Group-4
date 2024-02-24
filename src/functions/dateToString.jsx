import digitChange from "@/functions/digitChange";

const dateToString = (time) => {
    const datetime = new Date(time);
    return `${digitChange(datetime.getMonth() + 1)}/${digitChange(datetime.getDate())}`;
}

export default dateToString;