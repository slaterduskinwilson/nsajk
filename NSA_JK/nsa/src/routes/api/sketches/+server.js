import fs from 'fs';
import path from 'path';

export async function GET() {
    const sketchbookDir = path.join(process.cwd(), 'static/sketchbook');
    let images;

    try {
        if (!fs.existsSync(sketchbookDir)) {
            console.error('Directory does not exist:', sketchbookDir);
            return new Response(JSON.stringify({ error: 'Directory does not exist' }), { status: 500 });
        }

        images = fs.readdirSync(sketchbookDir).map(file => `/sketchbook/${file}`);
        console.log('Images:', images);  // Log the images to debug
    } catch (error) {
        console.error('Error reading images:', error);  // Log the error to debug
        return new Response(JSON.stringify({ error: 'Could not read images' }), { status: 500 });
    }

    return new Response(JSON.stringify(images), {
        headers: { 'Content-Type': 'application/json' }
    });
}
