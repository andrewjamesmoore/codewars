function isToday(date) {
  const today = new Date(date);
  const actualToday = new Date();
  if (
    today.getDate() === actualToday.getDate() &&
    today.getMonth() === actualToday.getMonth() &&
    today.getYear() === actualToday.getYear()
    ) { return true;
  } else { return false;
    }
}
