let BasePath = process.env.BaseURL;

export async function getHomeMeta(){
    const result = await fetch(`${BasePath}SiteMeta/home`)
    return result.json();
}
