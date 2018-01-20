const initialState = {
  usuarios:[{
    nombre: "Agustina",
    apellido:"Gottert",
    mail:"agottert@gmail.com",
    password:"123456",
    nacimiento:"06/02/1987", 
  },
  {
    nombre: "Eugenia",
    apellido:"Rodriguez",
    mail:"ewelynda@gmail.com",
    password:"79797897",
    nacimiento:"29/08/2014", 
  },
  {
    nombre: "Eugenia",
    apellido:"Rodriguez",
    mail:"ewelyn@gmail.com",
    password:"79797897",
    nacimiento:"29/08/2014", 
  }
  ],  
};

function appReducer(state = initialState, action) {
  switch(action.type) {
    default : return state;
  }
}
export default appReducer;


