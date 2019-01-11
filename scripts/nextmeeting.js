function setNextMeeting() {

    const next = document.getElementById('nextmeettime');

    $.jsonp({
      "url": "https://api.meetup.com/Oak-Hill-Toastmasters/events?page=1?format=jsonp&callback=_jqjsp",
      "data": {
          "alt": "json-in-script"
      },
      "success": function(json) {
          // handle user profile here
          var meeting = json.data[0];
          if (meeting != undefined) {
              var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' };
              var date = new Date(meeting.local_date);
              var str_date = date.toLocaleDateString("en-US", options);
              next.innerHTML = "<strong>Next meeting: " + str_date + "</strong>";
              next.href = "//www.meetup.com/Oak-Hill-Toastmasters/events/" + meeting.id;
          }
      },
      "error": function(d,msg) {
      }
    });
}

setNextMeeting();
