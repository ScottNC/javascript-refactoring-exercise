const processTransactions = (transActions) => {

    if(transActions === undefined) {
        throw new Error("Undefined collection of transactions")
    }

    let txCount = transActions.reduce((count, transAction) => {
        count[transAction] ? count[transAction]++ : count[transAction] = 1;
        return count;
    }, {});

    txCount = sortByAmountThenName(txCount);
    
    // Place them back in array for returning
    const txr = Object.keys(txCount).map(key => `${key} ${txCount[key]}`);

    return txr;
}

const sortByAmountThenName = (txCount) => {
    const sortedKeys = Object.keys(txCount).sort((itemOne, itemTwo) => {
        return txCount[itemTwo] - txCount[itemOne] || itemOne.localeCompare(itemTwo);
    });

    const sortedResults = sortedKeys.reduce((results, key) => {
        results[key] = txCount[key];
        return results;
    }, {});

    return sortedResults;
}

module.exports = processTransactions;