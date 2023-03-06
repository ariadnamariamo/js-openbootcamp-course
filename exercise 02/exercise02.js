//Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
//- Tu nombre (string)
//- Tu edad (number)
//- ¿Eres desarrollador? (boolean)
//- Tu fecha de nacimiento (Date)
//- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

const fullname = ["Ariadna Mora"];
const age = [25];
const developer = true;
const birth = new Date(1998, 1, 21);

const Lista = [fullname, age, developer, birth];

console.log(Lista)

const book = {
        title:"¿Por qué a mí?",
        author:"Valéria Piassa Polizzi",
        date: new Date('1997'),
        url:"https://www.amazon.com/-/es/Val%C3%A9ria-Piassa-Polizzi/dp/9681909208", 
}