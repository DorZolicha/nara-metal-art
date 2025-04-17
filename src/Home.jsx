import { useState } from "react";

export default function Home() {
  const [customText, setCustomText] = useState("");
  const [previewImage, setPreviewImage] = useState("/wall_mockup.jpg");

  const handleTextChange = (e) => setCustomText(e.target.value);

  return (
    <main className="min-h-screen bg-white text-black p-4 md:p-10">
      <h1 className="text-4xl font-bold mb-6">Welcome to NARA – Modern Metal Art</h1>

      <section className="mb-12">
        <p className="text-lg max-w-2xl">
          Discover the fusion of industrial strength and delicate design. Browse our
          exclusive steel art or create your own custom piece.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🎨 Create Your Own</h2>
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="flex flex-col gap-2 w-full max-w-sm">
            <label htmlFor="customText">Enter Your Custom Text:</label>
            <input
              id="customText"
              className="border px-3 py-2"
              value={customText}
              onChange={handleTextChange}
              placeholder="e.g., The Cohen Family"
            />
            <button disabled className="mt-2 bg-gray-300 px-4 py-2 rounded cursor-not-allowed">
              Generate AI Preview (Coming Soon)
            </button>
          </div>

          <div className="mt-4 md:mt-0 w-full">
            <div className="border rounded overflow-hidden relative">
              <img src={previewImage} alt="Wall mockup" className="w-full object-cover" />
              {customText && (
                <div className="absolute bottom-8 left-8 bg-white/80 px-4 py-2 rounded shadow text-xl font-semibold">
                  {customText}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🛍️ Ready-Made Art</h2>
        <p className="mb-2">Explore our most popular pieces – industrial elegance at its best.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded">Tree of Life</div>
          <div className="border p-4 rounded">Abstract Line Face</div>
          <div className="border p-4 rounded">Modern Mezuzah</div>
        </div>
      </section>
    </main>
  );
}
