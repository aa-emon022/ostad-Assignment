function dateFormat(day) {
    var weeks = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    var today;
    weeks.forEach((e) => {
      var days = day.getDay();
      if (days == weeks.indexOf(e)){
          today = weeks[day.getDay()];
      }
       
    });
    return today;
  }
  const InputDate = new Date("2015-03-25");
  var days = dateFormat(InputDate);
  console.log(days);