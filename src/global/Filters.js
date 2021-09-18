import FechaServices from "../services/FechaServices";

let load = (vue) => {
  vue.filter('fecha', function (value) {
    if (!value)
      return null;

    return FechaServices.getFecha(value);
  });

}

export default { load }
