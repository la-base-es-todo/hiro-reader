const history = [
  {
    page: "home",
    title:"Capitulo Uno",
    text: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza que así ensillaba el rocín como tomaba la podadera",
    options: [
      { link: "campo", text: "...salir al campo." },
      { link: "tristeza", text: "...no hacer nada." },
    ],
  },
  {
    page: "campo",
    title:null,
    text: "Sales al campo y la brisa te hace feliz.",
    options: null,
  },
  {
    page: "tristeza",
    title:"Final Triste",
    text: "Te quedas en casa y te sientes muy triste",
    options: null,
  },
];

export default history;
