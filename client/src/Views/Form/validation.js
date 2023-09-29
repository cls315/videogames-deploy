var regxp = /^([a-zA-Z0-9\s])+$/i;
var allowedExtensionsImage = /(.jpg|.jpeg|.png|.gif)$/i;

export const validator = (videogame) => {
  let errors = {};

  if (!videogame.name) {
    errors.name1 = "El campo Nombre no puede estar vacio";
  }
  if (!regxp.test(videogame.name)) {
    errors.name2 = "El campo de nombre solo permite datos alfanuméricos";
  }
  if (!videogame.background_image) {
    errors.background_image1 = "El campo Imagen no puede estar vacio";
  }
  /*if (!allowedExtensionsImage.test(videogame.background_image)) {
    errors.background_image2 =
      "Solo se permiten extenciones jpg, jpeg, png, gif";
  }*/
  if (!videogame.description) {
    errors.description1 = "El campo Descripcion no puede estar vacio";
  }
  if (videogame.description.length > 100 || videogame.description.length < 30) {
    errors.description2 = "Descripcion debe contener entre 10 y 100 caracteres";
  }
  if (!videogame.currentPlatform) {
    errors.platforms1 = "El campo Plataformas no puede estar vacio";
  }
  if (!videogame.released) {
    errors.released1 = "El campo Fecha de lanzamiento no puede estar vacio";
  }
  if (!videogame.rating) {
    errors.rating1 = "El campo Rating no puede estar vacio";
  }
  if (videogame.rating < 1 || videogame.rating > 10) {
    errors.rating2 = "El rating debe ser entre 1 y 5";
  }
  if (videogame.genres < 1) {
    errors.genres1 = "El campo Generos no puede estar vacio";
  }
  return errors;
};
