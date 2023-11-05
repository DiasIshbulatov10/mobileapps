const constants = {
    sortType: [
        'All',
        'Priority',
        'Due Date',
        'Category',
        'Task Group',
        'Completed'
    ],
    completeType: [
        'All',
        'Incompleted',
        'Completed'
    ],
    categoryAll: 'categoryAll',
    groupAll: 'groupAll',
    recuttingType: [
        'Daily',
        'Weekly',
        'Bi-Weekly',
        'Semi-monthly',
        'Monthly',
        'Quarterly',
        'Semi-Annually',
        'Annually',
    ],
    oneDay: 1000 * 60 * 60 * 24,
    twoDay: 1000 * 60 * 60 * 24 * 2,
    threeDay: 1000 * 60 * 60 * 24 * 3,
    delTasksAndGroup: 0,
    delOnlyGroup: 1
}

export default constants;