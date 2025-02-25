export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gradient-start to-gradient-end flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xs sm:max-w-sm border border-white/50 rounded-lg p-6 ml-0 md:ml-12 lg:ml-24 text-white">
          <h1 className="text-3xl font-extrabold tracking-tighter mb-4">CARROLL</h1>
          <p className="text-sm font-medium tracking-widest mb-6">NEW RECORD 2025</p>
          <div className="flex flex-col gap-3">
            <a
              href="https://music.apple.com/us/artist/carroll/1218586"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gradient-start hover:bg-opacity-90 font-bold text-sm py-2 px-4 rounded-full transition-colors uppercase tracking-wider text-center"
            >
              Apple Music
            </a>
            <a
              href="https://open.spotify.com/artist/6MVgYAqn153Y25pD4iJ0qP"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gradient-start hover:bg-opacity-90 font-bold text-sm py-2 px-4 rounded-full transition-colors uppercase tracking-wider text-center"
            >
              Spotify
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

