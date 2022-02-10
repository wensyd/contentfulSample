import {createClient} from 'contentful'

const useContentful = () => {
  
    const client = createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        host:"cdn.contentful.com"

    })

    const getBlogPost  = async () =>{
        try {
           const entries = await client.getEntries({
                content_type: "blogPost",
                select:"fields",
            });
            
            const sanitizedEntries = entries.items.map((item) => {
                const hero = item.fields.heroImage.fields;

                return {
                    ...item.fields,
                    hero
                }
            })


        return sanitizedEntries;
        }
        catch (error) {
            console.log(`Error fetching About Data: $(error)`);
        }
    };
    return {getBlogPost};
}

export default useContentful