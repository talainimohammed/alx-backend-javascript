export default function iterateThroughObject(reportWithIterator) {
    const employees = [];
    for (let department of reportWithIterator) {
        employees.push(...department);
    }
    return employees.join(' | ');
}