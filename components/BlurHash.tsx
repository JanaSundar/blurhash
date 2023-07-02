'use client';

import React from 'react'
import { Blurhash } from 'react-blurhash';

const BlurHash = ({ hash }: { hash: string }) => {
    return (
        <Blurhash
            hash={hash}
            width={"100%"}
            height={"100%"}
            resolutionX={32}
            resolutionY={32}
            punch={1} 
            />
    )
}

export default BlurHash