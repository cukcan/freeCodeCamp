function checkCashRegister(price, cash, cid) {
  // Calculate the total cash in the drawer
  var totalCashInDrawer = cid.reduce(function (acc, curr) {
    return acc + curr[1];
  }, 0);

  // Calculate the change due
  var changeDue = cash - price;

  // Prepare an object to store the change
  var change = { status: '', change: [] };

  // Handle different scenarios based on change due and cash in the drawer
  if (changeDue > totalCashInDrawer) {
    change.status = 'INSUFFICIENT_FUNDS';
  } else if (changeDue === totalCashInDrawer) {
    change.status = 'CLOSED';
    change.change = cid;
  } else {
    var changeArray = [];

    // Create a copy of the cash in the drawer array
    var cidCopy = cid.map(function (item) {
      return item.slice();
    });

    // Define the currency units and their values
    var currencyUnits = [
      ['PENNY', 0.01],
      ['NICKEL', 0.05],
      ['DIME', 0.1],
      ['QUARTER', 0.25],
      ['ONE', 1],
      ['FIVE', 5],
      ['TEN', 10],
      ['TWENTY', 20],
      ['ONE HUNDRED', 100]
    ];

    // Iterate through the currency units from highest to lowest
    for (var i = currencyUnits.length - 1; i >= 0; i--) {
      var currencyName = currencyUnits[i][0];
      var currencyValue = currencyUnits[i][1];
      var currencyAvailable = cidCopy[i][1];
      var currencyChange = 0;

      // Calculate the maximum amount of current currency unit to give as change
      while (changeDue >= currencyValue && currencyAvailable > 0) {
        changeDue -= currencyValue;
        changeDue = Math.round(changeDue * 100) / 100;
        currencyAvailable -= currencyValue;
        currencyAvailable = Math.round(currencyAvailable * 100) / 100;
        currencyChange += currencyValue;
      }

      // Update the change array with the currency unit and the amount given as change
      if (currencyChange > 0) {
        changeArray.push([currencyName, currencyChange]);
      }
    }

    // Check if change is possible or not based on changeDue and cash in the drawer
    if (changeDue > 0) {
      change.status = 'INSUFFICIENT_FUNDS';
    } else {
      change.status = 'OPEN';
      change.change = changeArray;
    }
  }

  return change;
}
