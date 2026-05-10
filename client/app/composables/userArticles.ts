//Motheo Morena u24666981
export const useArticles = () => {
  const config = useRuntimeConfig()

  return useFetch('/articles', {
    baseURL: `${config.public.strapiUrl}/api`,
    query: {
      populate: '*',
      sort: 'createdAt:desc'
    }
  })
}