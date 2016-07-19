(function() {

  /* @ngInject */
  var SalesService;
  SalesService = function() {
    var createBarChartData, createLineChartData, createPieChartData, generateOrder, generateOrders, generateSales, makeid;
    generateSales = function(dateRange) {
      var date, endTime, ordersData, salesData, salesForTheDay, startTime;
      salesData = {
        totalSales: 0,
        totalEarnings: 0,
        dayTotals: [],
        orders: []
      };
      startTime = dateRange.start.toDate();
      endTime = dateRange.end.toDate();
      date = startTime.getTime();
      while (date < endTime.getTime()) {
        salesForTheDay = Math.floor(Math.random() * (100 - 0)) + 0;
        ordersData = generateOrders(salesForTheDay, date);
        salesData.orders = salesData.orders.concat(ordersData.orders);
        salesData.dayTotals.push({
          date: moment(date),
          sales: salesForTheDay,
          earnings: ordersData.totalEarnings
        });
        salesData.totalSales += salesForTheDay;
        salesData.totalEarnings += ordersData.totalEarnings;
        date += 86400000;
      }
      return salesData;
    };
    generateOrders = function(numOrders, date) {
      var o, order, ordersData;
      ordersData = {
        orders: [],
        totalEarnings: 0
      };
      o = 0;
      while (o < numOrders) {
        order = generateOrder(date);
        ordersData.totalEarnings += order.total;
        ordersData.orders.push(order);
        o++;
      }
      return ordersData;
    };
    generateOrder = function(date) {
      var emails, i, item, names, numItems, order, productAdjectives, productCategories, productColors, productTypes, statuses;
      statuses = ['complete', 'pending', 'delivered'];
      names = ['Loraine Heidenreich', 'Amie Hane', 'Rosalyn Heller V', 'Dr. Kristian Boyle II', 'Clarabelle Weber', 'Rowland Emard', 'Kitty Heller DVM', 'Winston Frami', 'Newton Welch', 'Trudie Feest', 'Vivien Sauer', 'Cleta Kuhn', 'Ruby Shields', 'Dr. Moises Beahan DDS', 'Miss Shanel Jenkins DVM', 'Kitty Heller DVM', 'Vivien Sauer', 'Clara Cremin', 'Eunice Morissette', 'Arch Sporer IV', 'Miss Shanel Jenkins DVM', 'Ryann Balistreri I', 'Norma Yost DDS', 'Manley Roberts', 'Ruby Shields', 'Miss Lavada Runolfsson', 'Kira Dooley', 'Meredith Ebert DDS'];
      emails = ['johnson.althea@gleichner.net', 'will.rhea@weber.biz', 'roslyn75@keebler.com', 'okon.glenda@hamill.com', 'estroman@cruickshank.org', 'victoria41@hartmann.com', 'bogisich.janice@wilkinson.com', 'bryce97@kris.com', 'noe59@king.com', 'wiza.litzy@kozey.com', 'oconner.cortney@gmail.com', 'kub.fannie@hotmail.com', 'adrian00@gutkowski.com', 'justice69@yahoo.com', 'torphy.toney@yahoo.com', 'bogisich.janice@wilkinson.com', 'oconner.cortney@gmail.com', 'orval63@gmail.com', 'jaime94@gmail.com', 'olaf69@okeefe.com', 'torphy.toney@yahoo.com', 'bernhard.bruen@marvin.com', 'otilia61@hotmail.com', 'bogan.lelia@bins.info', 'adrian00@gutkowski.com', 'yazmin76@hotmail.com', 'kglover@hotmail.com', 'erick.hermann@larkin.net', 'bernhard.bruen@marvin.com', 'bradly90@corkery.info', 'orval63@gmail.com', 'olaf69@okeefe.com'];
      order = {
        id: makeid(),
        buyer: emails[Math.floor(Math.random() * emails.length)],
        name: names[Math.floor(Math.random() * names.length)],
        date: moment(date + Math.floor(Math.random() * (86400000 - 0)) + 0),
        items: [],
        subTotal: 0,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        tax: 0,
        total: 0
      };
      numItems = Math.floor(Math.random() * (6 - 1)) + 1;
      productAdjectives = ['Super', 'Amazing', 'Great', 'New'];
      productTypes = ['T-Shirt', 'Book', 'Desk', 'Coat', 'Chair', 'Hat', 'Jeans'];
      productColors = ['Red', 'Green', 'Blue', 'Pink', 'Yellow', 'Orange'];
      productCategories = ['Books', 'Electronics', 'Home', 'Toys', 'Clothes', 'Shoes', 'Mobiles'];
      i = 0;
      while (i < numItems) {
        item = {
          name: productAdjectives[Math.floor(Math.random() * productAdjectives.length)] + ' ' + productColors[Math.floor(Math.random() * productColors.length)] + ' ' + productTypes[Math.floor(Math.random() * productTypes.length)],
          category: productCategories[Math.floor(Math.random() * productCategories.length)],
          price: (Math.random() * (100 - 1) + 1).toFixed(2)
        };
        order.subTotal += parseFloat(item.price);
        order.items.push(item);
        i++;
      }
      order.tax = order.subTotal * 0.2;
      order.total += order.subTotal + order.tax;
      return order;
    };
    createLineChartData = function(salesData) {
      var chartData, i, row;
      chartData = {
        labels: [],
        series: ['Sales'],
        options: {
          maintainAspectRatio: false,
          datasetFill: false,
          responsive: true,
          scaleShowGridLines: false,
          bezierCurve: true,
          pointDotRadius: 2,
          scaleFontColor: '#ffffff',
          scaleFontSize: 16
        },
        colors: ['#ffffff'],
        data: []
      };
      row = [];
      i = 0;
      while (i < salesData.dayTotals.length) {
        chartData.labels.push(salesData.dayTotals[i].date.format('M/D/YY'));
        row.push(salesData.dayTotals[i].sales);
        i++;
      }
      chartData.data.push(row);
      return chartData;
    };
    createPieChartData = function(salesData) {
      var chartData, i, index;
      chartData = {
        labels: [],
        data: []
      };
      i = 0;
      while (i < salesData.orders.length) {
        if (chartData.labels.indexOf(salesData.orders[i].status) === -1) {
          chartData.labels.push(salesData.orders[i].status);
          chartData.data.push(0);
        }
        index = chartData.labels.indexOf(salesData.orders[i].status);
        chartData.data[index]++;
        i++;
      }
      return chartData;
    };
    createBarChartData = function(salesData) {
      var chartData, index, item, order, row;
      chartData = {
        labels: [],
        series: ['Sales'],
        data: [],
        options: {
          barShowStroke: false
        }
      };
      row = [];
      order = 0;
      while (order < salesData.orders.length) {
        item = 0;
        while (item < salesData.orders[order].items.length) {
          if (chartData.labels.indexOf(salesData.orders[order].items[item].category) === -1) {
            chartData.labels.push(salesData.orders[order].items[item].category);
            row.push(0);
          }
          index = chartData.labels.indexOf(salesData.orders[order].items[item].category);
          row[index]++;
          item++;
        }
        order++;
      }
      chartData.data.push(row);
      return chartData;
    };
    makeid = function() {
      var i, possible, text;
      text = '';
      possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      i = 0;
      while (i < 5) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        i++;
      }
      return text;
    };
    return {
      generateSales: generateSales,
      createLineChartData: createLineChartData,
      createPieChartData: createPieChartData,
      createBarChartData: createBarChartData
    };
  };
  'use strict';
  angular.module('app.examples.dashboards').factory('SalesService', SalesService);
})();
