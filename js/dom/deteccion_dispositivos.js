const d = document,
      n = navigator,
     ua = n.userAgent;

export default function userDeviceInfo(id) {
    //console.log(ua);
    const $id = d.getElementById(id),
        isMobile = {
            android: () => ua.match(/android/i),
            ios: () => ua.match(/iphone|ipad|ipod/i),
            windows: () => ua.match(/windows phone/i),
            any: function () {
                return this.android() || this.ios() || this.windows();
            }
        },
        isDesktop = {
            linux: () => ua.match(/linux/i),
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/Windows NT/i),
            any: function () {
                return this.linux() || this.mac() || this.windows();
            }
        },
        isBrowser = {
            chrome: () => ua.match(/chrome/i),
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            opera: () => ua.match(/opera|opera mini/i),
            ie: () => ua.match(/msie|iemobile/i),
            edge: () => ua.match(/edge/i),
            any: function () {
                return (
                    this.chrome() ||
                    this.safari() ||
                    this.firefox() ||
                    this.opera() ||
                    this.ie() ||
                    this.edge()
                );
            }
        };

        // console.log(isMobile.android());
        // console.log(isMobile.ios());
        // console.log(isMobile.windows());
        // console.log(isMobile.any());

        $id.innerHTML = `
            <ul>
                <li>User Agent: <b>${ua}</b></li>
                <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
                <li>Navegador: <b>${isBrowser.any()}</b></li>
            </ul>
        `;
    /**
     * Contenido Exclusivo
     */
    if (isBrowser.chrome()){
        $id.innerHTML += `<p><mark>Este contenido sólo se ve en Chrome</mark></p>`
    }
    if (isBrowser.firefox()){
        $id.innerHTML += `<p><mark>Este contenido sólo se ve en FireFox</mark></p>`
    }
    if (isDesktop.linux()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para LINUX</mark></p>`
    }
    if (isDesktop.mac()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para MAC OS</mark></p>`
    }
    if (isDesktop.windows()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para WINDOWS</mark></p>`
    }

    /**
     * Redirecciones
     */
    if (isMobile.android()){
        //window.location.href = "https://lebusistemas.github.io/contactame/"
    }

}