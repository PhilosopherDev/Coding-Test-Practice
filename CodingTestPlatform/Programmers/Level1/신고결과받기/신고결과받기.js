function solution(id_list, report, k) {
    const id_report = id_list.reduce((obj, id) => {
        obj[id] = { setList: new Set([]), reported: 0 }
        return obj;
    }, {});

    report.forEach((value) => {
        const [userId, reportedId] = value.split(" ");
        if (!id_report[userId]["setList"].has(reportedId)) {
            id_report[userId]["setList"].add(reportedId);
            id_report[reportedId]["reported"]++;
        }
    });

    return id_list.map((id) => {
        let num = 0;
        id_report[id].setList.forEach((l) => {
            if (id_report[l].reported >= k) num++;
        });
        return num;
    });
}

module.exports = solution;