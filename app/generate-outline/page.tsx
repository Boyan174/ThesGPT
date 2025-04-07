"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function GenerateOutlinePage() {
  const [step, setStep] = useState(1)
  const [thesisTitle, setThesisTitle] = useState("")
  const [outline, setOutline] = useState<string[]>([])

  // This would normally come from an API call, but for now we'll generate a simple outline
  const generateOutline = (title: string) => {
    // Sample outline based on the title
    const sampleOutline = [
      "1. Einleitung",
      "   1.1 Problemstellung und Relevanz",
      "   1.2 Zielsetzung und Forschungsfragen",
      "   1.3 Methodisches Vorgehen",
      "   1.4 Aufbau der Arbeit",
      "2. Theoretische Grundlagen",
      "   2.1 Begriffsklärungen und Definitionen",
      "   2.2 Aktueller Forschungsstand",
      "   2.3 Theoretische Modelle und Konzepte",
      "3. Hauptteil / Analyse",
      "   3.1 Methodik und Datengrundlage",
      "   3.2 Darstellung der Ergebnisse",
      "   3.3 Diskussion und Interpretation",
      "4. Fazit und Ausblick",
      "   4.1 Zusammenfassung der Ergebnisse",
      "   4.2 Beantwortung der Forschungsfragen",
      "   4.3 Limitationen der Arbeit",
      "   4.4 Implikationen für Forschung und Praxis"
    ]
    
    return sampleOutline
  }

  const handleNext = () => {
    if (step === 1 && thesisTitle.trim()) {
      setStep(2)
      // Generate outline when moving to step 2
      setOutline(generateOutline(thesisTitle))
    }
  }

  const handleGenerateNew = () => {
    // In a real app, this would generate a new outline with different sections
    // For now, we'll just shuffle the existing outline a bit
    setOutline([...outline].reverse())
  }

  const handleSave = () => {
    // This would normally save the outline to a database or download it
    alert("Gliederung gespeichert! In einer vollständigen App würde diese heruntergeladen oder in deinem Konto gespeichert.")
  }

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <h1 className="text-4xl font-bold text-center mb-4">
        Bachelorarbeit-Gliederung erstellen
      </h1>

      <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
        Erstelle eine strukturierte Gliederung für deine Bachelorarbeit mit Hilfe
        unserer KI-Unterstützung.
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

      {/* Step 2: Generated Outline */}
      {step === 2 && (
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Deine Gliederung</h2>
            <p className="text-gray-600 text-sm">
              Basierend auf deinem Titel: <span className="font-medium">{thesisTitle}</span>
            </p>
          </div>
          
          <div className="border rounded-lg p-6 mb-6 bg-white">
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Vorgeschlagene Gliederung:</h3>
              <div className="space-y-1 font-mono text-sm">
                {outline.map((item, index) => (
                  <div key={index} className="pl-4">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button
              onClick={() => setStep(1)}
              className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            >
              Zurück
            </Button>
            <div className="space-x-3">
              <Button 
                onClick={handleGenerateNew}
                className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-50"
              >
                Neu generieren
              </Button>
              <Button 
                onClick={handleSave}
                className="bg-blue-500 hover:bg-blue-600"
              >
                Gliederung speichern
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 