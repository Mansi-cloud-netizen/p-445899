
import React, { useState } from "react";
import { AudioUpload } from "@/components/speech/AudioUpload";
import { AudioVisualizer } from "@/components/speech/AudioVisualizer";
import { TranscriptionResult } from "@/components/speech/TranscriptionResult";
import { Mic, AudioLines } from "lucide-react";

const Index = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string>();
  const [transcription, setTranscription] = useState<string>();

  const handleFileSelect = (file: File) => {
    setAudioFile(file);
    const url = URL.createObjectURL(file);
    setAudioUrl(url);
    // Simulated transcription - in production, this would call an API
    setTimeout(() => {
      setTranscription("This is a sample transcription of the uploaded audio file. In a production environment, this would be replaced with actual transcribed text from the audio processing service.");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#1EAEDB] relative overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-[10%] left-[10%] animate-bounce opacity-30">
          <Mic className="h-8 w-8 text-white" />
        </div>
        <div className="absolute top-[20%] left-[30%] animate-pulse opacity-20">
          <AudioLines className="h-12 w-12 text-white" />
        </div>
        
        {/* Top Right */}
        <div className="absolute top-[15%] right-[15%] animate-bounce opacity-25">
          <Mic className="h-10 w-10 text-white" />
        </div>
        <div className="absolute top-[35%] right-[25%] animate-pulse opacity-20">
          <AudioLines className="h-8 w-8 text-white" />
        </div>
        
        {/* Bottom Left */}
        <div className="absolute bottom-[20%] left-[20%] animate-pulse opacity-30">
          <AudioLines className="h-10 w-10 text-white" />
        </div>
        
        {/* Bottom Right */}
        <div className="absolute bottom-[25%] right-[15%] animate-bounce opacity-25">
          <Mic className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2 text-white animate-fade-in">
            SPEECH TO TEXT
          </h1>
          <p className="text-lg text-white/80 animate-fade-in">
            Upload your audio file to get started
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-6 animate-scale-in">
          <AudioUpload onFileSelect={handleFileSelect} />
          
          {audioUrl && (
            <>
              <AudioVisualizer audioUrl={audioUrl} />
              <TranscriptionResult text={transcription} />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
