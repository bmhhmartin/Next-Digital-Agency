let BasePath = process.env.BaseURL;

export async function getAllTestimonial(){
    const result = await fetch(`${BasePath}TestimonialList`)
    return result.json();
}
