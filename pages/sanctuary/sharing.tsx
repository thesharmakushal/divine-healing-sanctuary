function SafeSharingPage() {
    return (
      <div className="min-h-screen p-8 bg-beige text-gray-900">
        <h1 className="text-3xl font-serif text-center mb-6">🕊️ Safe Sharing</h1>
        <p className="text-center italic">
          This space is sacred, judgment-free, and anonymous. Your thoughts are safe here.
        </p>
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white/70 rounded-xl shadow">
          <textarea
            className="w-full p-4 border rounded-lg"
            rows={5}
            placeholder="Let it out here..."
          />
          <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700">
            Send Safely
          </button>
        </div>
      </div>
    );
  }
  
  export default SafeSharingPage;
  