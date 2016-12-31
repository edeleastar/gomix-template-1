'use strict';

const start = {
  index(request, response) {
    const viewData = {
      title: 'Welcome to Template 1',
    };
    response.render('start', viewData);
  },
};

module.exports = start;
