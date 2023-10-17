let BasePath = process.env.BaseURL;

export async function getBrandList(){
    const result = await fetch(`${BasePath}BrandList`)
    return result.json();
}
