
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>ADZ Supremo</title>
        <meta name="description" content="Site profissional para presença digital"/>
        <meta name="keywords" content="tráfego pago, site profissional, ADZ, presença online"/>
        <meta name="author" content="Thiago - Alcance Digital Zero"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', 'G-XXXXXXX');`,
        }} />
      </Head>
      <main className="p-10">
        <h1 className="text-4xl font-bold">Bem-vindo ao ADZ Supremo</h1>
        <p className="mt-4">Sua presença digital começa aqui.</p>
        <form action="https://wa.me/5599999999999" method="get" className="mt-6 space-y-4">
          <input type="text" placeholder="Seu Nome" className="border p-2 w-full" required />
          <input type="email" placeholder="Seu E-mail" className="border p-2 w-full" required />
          <button type="submit" className="bg-green-500 text-white px-4 py-2">Enviar para WhatsApp</button>
        </form>
      </main>
    </div>
  )
}
