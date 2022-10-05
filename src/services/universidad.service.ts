const getUniversidades = () => fetch('https://www.api.wuolah.com/v2/universities').then((res) => res.json());

export default getUniversidades;
