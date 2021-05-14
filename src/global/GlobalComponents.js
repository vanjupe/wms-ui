import Wrapper from './../components/General/Wrapper'
import Dialogo from '../components/General/Dialogo'

let load = (vue) => {
    vue.component('Wrapper', Wrapper)
    vue.component('Dialogo', Dialogo)
}

export default { load }
