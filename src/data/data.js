import faker from 'faker';

const generateData = (count) => {
    let data = [];
    for (let i = 0; i < count; i ++) {
        data.push({
            id: i + 1,
            type: faker.random.arrayElement(['Incidente', 'Requerimiento']),
            description: faker.lorem.word(),
            state: faker.random.arrayElement([true, false])
        });
    }
    return data;
};

const showItemsForPage = (items, start = 0, end = 6) => {
    const ITEMS_FOR_PAGE = items.slice(start, end);
    return ITEMS_FOR_PAGE;
};

const generateDataReport = (items, type) => {
    const REPORT = {
        typeName: type,
        countTrue: items.filter(item => item.type === type && !item.state).length,
        countFalse: items.filter(item => item.type === type && item.state).length,
        totalCount: items.filter(item => item.type === type).length
    };
    return REPORT;
};

export { generateData, showItemsForPage, generateDataReport };