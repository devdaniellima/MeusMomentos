const format = {
  formatDateBr: (timestamp) => {
    const moment = new Date();
    moment.setTime(timestamp);
    const day = `${moment.getUTCDate()}`.padStart(2, '0');
    const month = `${moment.getUTCMonth() + 1}`.padStart(2, '0');
    const year = `${moment.getUTCFullYear()}`.padStart(2, '0');
    const hour = `${moment.getUTCHours()}`.padStart(2, '0');
    const min = `${moment.getUTCMinutes()}`.padStart(2, '0');

    return `${day}/${month}/${year} ${hour}:${min}`;
  },
};

export default format;
