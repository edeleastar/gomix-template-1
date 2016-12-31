'use strict';

const dashboard = {
  index(request, response) {
    const viewData = {
      title: 'Template 1 Dashboard',
    };
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;
