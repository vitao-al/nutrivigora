export default function Projects(){
    return (
        <section id="projetos" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Projetos Realizados</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos mais recentes e deixe-se inspirar para sua próxima construção.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                alt="Projeto Residencial"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">Casa Moderna</h3>
                  <p className="text-gray-200">Projeto residencial completo</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
                alt="Projeto Comercial"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">Espaço Comercial</h3>
                  <p className="text-gray-200">Reforma e modernização</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
                alt="Projeto Luxo"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">Residência de Luxo</h3>
                  <p className="text-gray-200">Construção personalizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}