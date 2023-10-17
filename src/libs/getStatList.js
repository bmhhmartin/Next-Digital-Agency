let BasePath = process.env.BaseURL;

export async function getStatList(){
    const result = await fetch(`${BasePath}StatList`)
    return result.json();
}
