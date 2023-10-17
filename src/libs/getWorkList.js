let BasePath = process.env.BaseURL;

export async function getWorkList(){
    const result = await fetch(`${BasePath}WorkList`)
    return result.json();
}
