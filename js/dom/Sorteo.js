const d = document;

export default function draw(btn, selector) {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
              randon = Math.floor(Math.random() * $players.length),
              winner = $players[randon];

        //console.log($players);

        return `El ganador es: ${winner.textContent}`
    }

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
            //console.log(result);
        }
    });

    const rifarMicro = () => {
        const d = document,
          $comentarios = d.querySelectorAll("ytd-comment-thread-renderer");
  
        const participantes = [];
  
        $comentarios.forEach(el => participantes.push({
          nombre: el.querySelector("#author-text span").textContent.trim(),
          comentario: el.querySelector("yt-formatted-string#content-text").textContent.trim()
        }));
  
        console.log("PARTICIPANTES");
        console.log(participantes);
  
        const depurados = participantes.reduce((acc, participante) => {
          acc[participante.nombre] = ++acc[participante.nombre] || 1;
          return acc;
        }, {});
        console.log("DEPURADOS");
        console.log(depurados);
  
        const duplicados = participantes.filter((participante) => {
          return depurados[participante.nombre] !== 1;
        });
        console.log("DUPLICADOS");
        console.log(duplicados);
  
        const unicos = participantes.filter((participante) => {
          return depurados[participante.nombre] === 1;
        });
        console.log("ÚNICOS");
        console.log(unicos);
  
        let aleatorio = Math.floor(Math.random() * unicos.length),
          ganador = unicos[aleatorio];
  
        console.log(`😱El ganador del micrófono es...😱`);
        setTimeout(() => {
          console.log(`🥳🎉${ganador.nombre}🎉🥳`);
          console.log(`📝Su comentario fue...📝`);
          console.log(`🌟✨${ganador.comentario}✨🌟`);
        }, 10000);
      }

    const getWinnerComment = (selector) => {
        const $players = document.querySelectorAll(selector),
                randon = Math.floor(Math.random() * $players.length),
                winner = $players[randon];

        //console.log($players);

        return `El ganador es: ${winner.textContent}`
    }

    //getWinnerComment("ytd-comment-thread-renderer #author-text span");
}