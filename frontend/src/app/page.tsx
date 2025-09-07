import Header from './top/_components/header'

export default function Top() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-pink-300 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Hello, Randam Cooking!
          </h1>
        </div>
      </main>
    </>
  )
}
