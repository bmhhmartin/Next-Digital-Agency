let BasePath = process.env.BaseURL;

export async function getHeroList(){
    const result = await fetch(`${BasePath}HeroList`)
    return result.json();
}
