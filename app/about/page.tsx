import Link from "next/link"
import { ArrowLeft, MapPin, Star, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-blue-800 to-blue-900">
      {/* Navigation */}
      <nav className="bg-blue-950/90 backdrop-blur-sm border-b border-blue-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-blue-600 rounded-full"></div>
              <span className="text-white font-bold text-xl">FC Barcelona</span>
            </div>
            <div className="flex space-x-8">
              <Link href="/" className="text-white hover:text-red-300 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-red-300 transition-colors font-medium">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              About
              <span className="block bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
                FC Barcelona
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
              Discover the rich history, values, and legacy of one of football's most iconic institutions
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Our History</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Founded in 1899, FC Barcelona has grown from a local football club to a global phenomenon. Our journey
                spans over a century of triumphs, challenges, and unwavering commitment to excellence.
              </p>
              <p className="text-blue-100 text-lg leading-relaxed">
                From the Camp Nou to the world stage, we've consistently pushed the boundaries of what's possible in
                football, setting new standards for play, passion, and community engagement.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Excellence</h3>
                    <p className="text-blue-100">Striving for perfection in every aspect of the game</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Respect</h3>
                    <p className="text-blue-100">Honoring our opponents, fans, and the beautiful game</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Community</h3>
                    <p className="text-blue-100">Building bridges and bringing people together</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Innovation</h3>
                    <p className="text-blue-100">Pioneering new approaches to the beautiful game</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Kee and Guls Chithapa list:</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                  <div className="aspect-square relative">
                    <img 
                      src="https://media.api-sports.io/football/players/340626.png" 
                      alt="Robert Lewandowski"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg">Fermin Lopez</h3>
                    <p className="text-blue-200 text-sm">Midfielder</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                  <div className="aspect-square relative">
                    <img 
                      src="https://media.api-sports.io/football/players/538.png" 
                      alt="Frenkie de Jong"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg">Frenkie de Jong</h3>
                    <p className="text-blue-200 text-sm">Midfielder</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                  <div className="aspect-square relative">
                    <img 
                      src="https://media.api-sports.io/football/players/133609.png" 
                      alt="Pedri"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg">Pedri</h3>
                    <p className="text-blue-200 text-sm">Midfielder</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                  <div className="aspect-square relative">
                    <img 
                      src="https://media.api-sports.io/football/players/296667.png" 
                      alt="Gavi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg">Gavi</h3>
                    <p className="text-blue-200 text-sm">Midfielder</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                  <div className="aspect-square relative">
                    <img 
                      src="https://media.api-sports.io/football/players/386828.png" 
                      alt="Lamine Yamal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg">Lamine Yamal</h3>
                    <p className="text-blue-200 text-sm">Forward</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                  <div className="aspect-square relative">
                    <img 
                      src="https://media.api-sports.io/football/players/396623.png" 
                      alt="Ronald Araújo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg">Pau Cubarsi</h3>
                    <p className="text-blue-200 text-sm">Defender</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Kee and Guls Hate list:</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                  <div className="aspect-square relative">
                    <img 
                      src="https://media.api-sports.io/football/players/521.png" 
                      alt="Robert Lewandowski"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg">Robert Lewandowski</h3>
                    <p className="text-blue-200 text-sm">Striker</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                  <div className="aspect-square relative">
                    <img 
                      src="https://media.api-sports.io/football/players/127.png" 
                      alt="Frenkie de Jong"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg">Ter Stegen</h3>
                    <p className="text-blue-200 text-sm">Goalie</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>


          {/* Stats Section */}
          <div className="bg-gradient-to-r from-red-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">125+</div>
                <div className="text-blue-100 font-medium">Years of History</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">95+</div>
                <div className="text-blue-100 font-medium">Major Trophies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">400M+</div>
                <div className="text-blue-100 font-medium">Global Fans</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">99K</div>
                <div className="text-blue-100 font-medium">Stadium Capacity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-40 right-10 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-red-500/20 rounded-full blur-xl"></div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200">© 2024 FC Barcelona Frontend Project of Kees.</p>
        </div>
      </footer>
    </div>
  )
}
