const d = document,
      w = window;

/**
 * Detecta un BreakPoint para móvil y escritorio
 * @param {*} id Identificador único del elemento HTML
 * @param {*} mq Media query válida para CSS
 * @param {*} mobileContent Contenido para mostrar en Móvil
 * @param {*} desktopContent Contenido para mostrar en Escritorio
 */
export default function responsiveMedia(id, mq, mobileContent, desktopContent){
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
        if (e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = mobileContent;
        }
        //console.log("MQ: " + e.matches);
    };

    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint);
}
