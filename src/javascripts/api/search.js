export const getSearchResults = async (query, page) => {
 return fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&limit=6&page=${page}`)
   .then(res => res.json());
};
