import * as blurhash from 'blurhash'
import { NextResponse } from 'next/server'
import sharp from 'sharp';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const url = searchParams.get('url')

    if (!url) return NextResponse.json({
        message: 'Required fields is empty'
    }, {
        status: 400
    })

    try {
        const image = await fetch(url);
        const buffer = Buffer.from(await image.arrayBuffer())

        const { data, info } = await sharp(buffer)
            .raw()
            .ensureAlpha()
            .resize(32, 32)
            .toBuffer({
                resolveWithObject: true
            });

        const hash = blurhash.encode(
            new Uint8ClampedArray(data),
            info.width,
            info.height,
            4,
            4
        )

        return NextResponse.json({
            hash
        })
    } catch (err) {
        return NextResponse.json({
            error: err
        }, {
            status: 404
        })
    }
}
