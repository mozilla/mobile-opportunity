var calendars = {};

$(document).ready( function() {
  function describeDay(target) {
    $('#day').html(target.date.format("MMM Do YYYY"));
    if (target.events.length) {
      console.log(target.events);
      var bunches = _.reduce(target.events, function(bunch, one) {
        console.log(one)
        if (one.url) {
          return bunch + "<li><a href='"+ one.url+"'>" + one.title + "</a></li>";
        }
        return bunch + "<li>" + one.title + "</li>";
      }, "")
    } else {
      bunches = '<li>no events scheduled</li>';
    }
      $('#events').html(bunches);
  }
  var thisMonth = moment().format('YYYY-MM');
  calendars.clndr1 = $('.cal1').clndr({
    template: $('#template-calendar').html(),
    events: [],
    weekOffset: 1,
    clickEvents: {
      click: function(target) {
        describeDay(target);
      },
      nextMonth: function() {
        console.log('next month.');
      },
      previousMonth: function() {
        console.log('previous month.');
      },
      onMonthChange: function() {
        console.log('month changed.');
      },
      nextYear: function() {
        console.log('next year.');
      },
      previousYear: function() {
        console.log('previous year.');
      },
      onYearChange: function() {
        console.log('year changed.');
      }
    },
    multiDayEvents: {
      startDate: 'startDate',
      endDate: 'endDate'
    },
    showAdjacentMonths: true,
    adjacentDaysChangeMonth: false
  });

  // bind both clndrs to the left and right arrow keys
  $(document).keydown( function(e) {
    if(e.keyCode == 37) {
      // left arrow
      calendars.clndr1.back();
    }
    if(e.keyCode == 39) {
      // right arrow
      calendars.clndr1.forward();
    }
  });
  $.get('events.json', function(data,err) {
    for (var i=0; i<data.events.length; i++) {
      var event = data.events[i];
      if (event.date) {
        event.startDate = event.endDate = event.date;
      }
    }
    calendars.clndr1.setEvents(data.events);
//    console.log(calendars.clndr1);
  });

});