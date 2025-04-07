"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"

export default function GenerateOutlinePage() {
  const [step, setStep] = useState(1)
  const [thesisTitle, setThesisTitle] = useState("")
  
  const handleNext = () => {
    if (step === 1 && thesisTitle.trim()) {
      setStep(2)
    }
  }

  const handleStartResearch = () => {
    // This would connect to an AI service to perform research
    alert("Recherche gestartet! ThesGPT sammelt nun relevante Informationen für deine Gliederung...")
    // In a real app, this would redirect to a research results page or show a loading state
  }

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <h1 className="text-4xl font-bold text-center mb-4">
        ThesGPT plant deine Thesis
      </h1>

      <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
        ThesGPT findet alle relevanten wissenschaftlichen Quellen zu deinem Thema und erstellt eine passende Gliederung.
      </p>

      {/* Progress Steps */}
      <div className="flex justify-center items-center mb-12">
        <div className="flex items-center">
          {/* Step 1 */}
          <div className="relative">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
              step === 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}>
              <span className="text-sm font-medium">1</span>
            </div>
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm">
              Titel
            </span>
          </div>

          {/* Connector */}
          <div className="w-24 h-[2px] bg-gray-200 mx-1"></div>

          {/* Step 2 */}
          <div className="relative">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
              step === 2 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}>
              <span className="text-sm font-medium">2</span>
            </div>
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm">
              Gliederung & Recherche
            </span>
          </div>
        </div>
      </div>

      {/* Step 1: Title Input */}
      {step === 1 && (
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">Titel deiner Bachelorarbeit</h2>
          <div className="mb-3">
            <Input
              placeholder="z.B. Die Auswirkungen der Digitalisierung auf das Bildungssystem in Deutschland"
              value={thesisTitle}
              onChange={(e) => setThesisTitle(e.target.value)}
              className="w-full py-5 px-4 text-base border-gray-200 rounded-md"
            />
          </div>
          <p className="text-gray-600 mb-8 text-sm">
            Gib den vollständigen Titel deiner geplanten Bachelorarbeit ein
          </p>
          <div className="flex justify-center">
            <Button 
              onClick={handleNext}
              disabled={!thesisTitle.trim()}
              className="bg-blue-500 hover:bg-blue-600 px-8 py-2 rounded-md"
            >
              Weiter
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Research Initiation */}
      {step === 2 && (
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-gray-600 text-sm mb-2">Dein Bachelorarbeitsthema:</p>
              <p className="text-2xl font-bold text-blue-800 mb-6">{thesisTitle}</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center mb-12">
            <Button 
              onClick={handleStartResearch}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 text-xl font-bold rounded-md flex items-center gap-3"
            >
              <SearchIcon size={24} />
              Starte Recherche
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              ThesGPT durchsucht wissenschaftliche Quellen zu deinem Thema und erstellt eine passende Gliederung.
            </p>
          </div>
          
          <div className="flex justify-start">
            <Button
              onClick={() => setStep(1)}
              className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            >
              Zurück zum Titel
            </Button>
          </div>
        </div>
      )}
    </div>
  )
} 