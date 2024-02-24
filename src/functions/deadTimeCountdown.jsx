
const deadTimeCountdown = (deadline) => {
    const datetime = new Date(deadline);
    const nowtime = new Date();
    const todaystart = new Date(nowtime.getFullYear(), nowtime.getMonth(), nowtime.getDate());
    const deadlinestart = new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate());

    // 期限切れ
    if (datetime < nowtime) {
        return "提出期限が過ぎています";
    }

    // 残り1週間以上
    if (datetime - nowtime > 1000 * 60 * 60 * 24 * 7) {
        return null;
    }

    // 残り1時間未満
    if (datetime - nowtime < 1000 * 60 * 60) {
        return `残り1時間未満`;
    }

    // 残り1日未満かつ今日提出
    if (
        datetime - nowtime < 1000 * 60 * 60 * 24
        &&
        deadlinestart.getDate() === todaystart.getDate()
    ) {
        return `残り${Math.floor((datetime - nowtime) / (1000 * 60 * 60))}時間`;
    }

    // 翌日提出
    if (
        todaystart.getDate() + 1 == deadlinestart.getDate()
    ) {
        return `明日提出`;
    }

    // 残り1週間未満
    return `残り${Math.floor((deadlinestart - todaystart) / (1000 * 60 * 60 * 24))}日`;
}

export default deadTimeCountdown;