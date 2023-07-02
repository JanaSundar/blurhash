import Image from 'next/image'
import BlurHash from '../components/BlurHash'

async function getBlurHash() {
  const response = await fetch('https://blurhash.janasundar.dev/api/gethash?url=https://plus.unsplash.com/premium_photo-1685077715983-772598c45360?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200', { next: { revalidate: 300 } })

  return await response.json()
}

export default async function Home() {
  const { hash } = await getBlurHash()


  return (
    <main className='main'>
      <div className='hash'>
        <BlurHash hash={hash} />
      </div>
      <Image src='https://plus.unsplash.com/premium_photo-1685077715983-772598c45360?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80' alt='' width={500} height={500} />
    </main>
  )
}
