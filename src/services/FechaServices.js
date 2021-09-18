const dayjs = require('dayjs');
require('dayjs/locale/es');

let getFecha = (value = new Date()) => {
  return dayjs(value).startOf('day').locale('es').format('DD MMMM YYYY');
}

export default { getFecha }
