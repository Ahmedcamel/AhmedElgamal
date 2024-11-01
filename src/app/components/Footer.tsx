export default function Footer() {
    return (
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p>dalyabaron [at] gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p><a href="https://github.com/dalya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://github.com/dalya/</a></p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">ADAMS fellow</h3>
            <p><a href="https://adams.academy.ac.il/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://adams.academy.ac.il/</a></p>
          </div>
          <div>
            <p className="text-sm text-gray-600">&copy; 2023 By Nicol Rider. Proudly created with <a href="https://wix.com?utm_campaign=vir_created_with" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Wix.com</a></p>
          </div>
        </div>
      </footer>
    )
  }
  