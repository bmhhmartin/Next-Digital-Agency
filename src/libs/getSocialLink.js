let BasePath = process.env.BaseURL;

export async function getSocialLink(){
    const result = await fetch(`${BasePath}SocialLink`)
    return result.json();
}
