<div className="mt-16 max-w-xl mx-auto bg-[#FFF3E6] rounded-lg shadow p-6">
  <h3 className="text-xl font-bold text-[#E94E1B] mb-2">Assine nossa newsletter</h3>
  <form className="flex flex-col gap-3">
    <input type="text" className="border rounded p-2 text-sm" placeholder="Seu nome" required />
    <input type="email" className="border rounded p-2 text-sm" placeholder="Seu email" required />
    <label className="flex items-center gap-2 text-xs text-gray-700">
      <input type="checkbox" required />
      Li e concordo com a <a href="/lgpd" target="_blank" rel="noopener noreferrer" className="text-[#E94E1B] underline">política de privacidade</a>.
    </label>
    <button type="submit" className="bg-[#E94E1B] text-white px-4 py-2 rounded font-semibold hover:bg-orange-600 transition-colors">Assinar</button>
  </form>
</div> 
