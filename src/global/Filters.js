import FechaServices from "../services/FechaServices";
import MovimientoServices from "../services/MovimientoServices";

let load = (vue) => {
  vue.filter('fecha', function (value) {
    if (!value)
      return null;

    return FechaServices.getFecha(value);
  });

  vue.filter('tipoMovimiento', function (value) {
    return MovimientoServices.getTipoMovimiento(value)
  });
}

export default { load }
