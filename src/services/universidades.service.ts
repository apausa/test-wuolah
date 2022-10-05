const getUniversidad = () => fetch('https://www.api.wuolah.com/v2/universities/:idOrSlug').then((res) => res.json());

export default getUniversidad;
