## Comentarios

Mauro, muy buen trabajo, valoro el extra que le pusiste con el **search** y mostrar cuando se voto una pelicula 👍, te paso a mencionar algunas cosas que se podrian mejorar: 
- Si presionas cualquiera de los dos botones para el like o dislike da el mismo resultado: quita o agrega un like, quizas deberias hacerlo disable pero el botón no en el css, ya que solo estas
  cambiando el estilo al cursor pero no deshabilitas realmente el mismo.
- si queres enviar un array en el emit esta bien pero creo que si envias un objeto con los datos seria mas explicito en vez de hacer ``msg[0]`` o ``msg[1]``seria mas claro algo como ``msg.titulo`` y ``msg.addlike``
- no entendia las capturas, pero deber por si algo falla que vea como queda ¿no?
