import { MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Hero() {
  return (
    <div className="w-full px-6">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-col items-center justify-center gap-6 py-16 lg:py-24 max-w-4xl">
          {/* KI-gestützt badge */}
          <div className="mb-2">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v8m0 0L7 5m5 5l5-5M2 17l5-5m10 0l5 5m-10-5v8" />
              </svg>
              KI-Assistent
            </span>
          </div>
          
          <div className="flex flex-col gap-4">
            <h1 className="font-regular max-w-3xl text-center text-4xl font-bold tracking-tighter md:text-6xl">
              Gestalte deine Bachelorarbeit
              <span className="block text-blue-500"> einfach smarter</span>
            </h1>

            <p className="max-w-3xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground md:mt-4 md:text-xl">
              ThesGPT unterstützt dich mit KI-gestützter Recherche, Strukturierung und
              inhaltlichen Vorschlägen bei der Erstellung deiner wissenschaftlichen Arbeit.
            </p>
          </div>
          <div className="flex flex-row gap-3 pt-4 mt-2">
            <Link href="/generate-outline">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 gap-4 px-6 py-6 text-lg font-bold">
                Erlebe die Power von ThesGPT <MoveRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
