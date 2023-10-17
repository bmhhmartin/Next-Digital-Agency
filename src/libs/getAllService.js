let BasePath = process.env.BaseURL;

export async function getAllService(){
    const result = await fetch(`${BasePath}AllService`)
    return result.json();
}
