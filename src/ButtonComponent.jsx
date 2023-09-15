import './libcss/button.css'

import PropTypes from 'prop-types'

const ButtonComponent = ({ 
    icon = false, iconPosition = 'left', variant, disabledShadow = false, 
    disabled, size = 'sm', color = 'danger'
}) => {
    let fullstyle = ''

    // verificando si ha colocado alguna variante
    fullstyle += `${variant} `

    // color de la sombra
    let boxShadowColor = ''

    if(color == 'danger') {
        boxShadowColor += 'boxShadowDanger'
    } else if(color == 'primary') {
        boxShadowColor += 'boxShadowPrimary'
    } else if(color == 'secondary') {
        boxShadowColor += 'boxShadowSecondary'
    } else boxShadowColor += 'boxShadowDefault'

    // verificar si está en true la sombra y agregar el color de ser el caso
    disabledShadow == false && (fullstyle += `${boxShadowColor} `)

    // verificando si el button está deshabilitado
    disabled && (fullstyle += 'disabled ')

    // agregando el tamaño que desea
    fullstyle += `${size} `
    
    // agregando el color
    fullstyle += `${color} `

    return (
        <button className={'button ' + fullstyle}> 
            <div>
                { icon && (<span className="material-icons" style={{ fontSize: '16px' }}>local_grocery_store</span>) }
                <p>Default</p>
            </div>
        </button>
    )
}

ButtonComponent.propTypes = {
    icon: PropTypes.element,
    iconPosition: PropTypes.string,
    variant: PropTypes.string,
    disabledShadow: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    color: PropTypes.string
}

export default ButtonComponent