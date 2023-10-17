let BasePath = process.env.BaseURL;

export async function getTeamList(){
    const result = await fetch(`${BasePath}TeamList`)
    return result.json();
}
