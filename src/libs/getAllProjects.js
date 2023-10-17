let BasePath = process.env.BaseURL;

export async function getAllProjects(){
    const result = await fetch(`${BasePath}AllProject`)
    return result.json();
}
