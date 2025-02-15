
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
        {/* Top Section */}
        <div className="absolute top-[5%] left-[5%] animate-bounce opacity-30">
          <Mic className="h-8 w-8 text-white" />
        </div>
        <div className="absolute top-[8%] left-[25%] animate-pulse opacity-20">
          <AudioLines className="h-12 w-12 text-white" />
        </div>
        <div className="absolute top-[3%] left-[45%] animate-bounce opacity-25">
          <Mic className="h-10 w-10 text-white" />
        </div>
        <div className="absolute top-[10%] left-[65%] animate-pulse opacity-20">
          <AudioLines className="h-8 w-8 text-white" />
        </div>
        <div className="absolute top-[6%] left-[85%] animate-bounce opacity-30">
          <Mic className="h-9 w-9 text-white" />
        </div>

        {/* Middle Section */}
        <div className="absolute top-[30%] left-[10%] animate-pulse opacity-25">
          <AudioLines className="h-10 w-10 text-white" />
        </div>
        <div className="absolute top-[35%] left-[30%] animate-bounce opacity-20">
          <Mic className="h-8 w-8 text-white" />
        </div>
        <div className="absolute top-[40%] left-[50%] animate-pulse opacity-30">
          <AudioLines className="h-12 w-12 text-white" />
        </div>
        <div className="absolute top-[32%] left-[70%] animate-bounce opacity-25">
          <Mic className="h-10 w-10 text-white" />
        </div>
        <div className="absolute top-[38%] left-[90%] animate-pulse opacity-20">
          <AudioLines className="h-9 w-9 text-white" />
        </div>

        {/* Lower Middle Section */}
        <div className="absolute top-[60%] left-[8%] animate-bounce opacity-30">
          <Mic className="h-10 w-10 text-white" />
        </div>
        <div className="absolute top-[65%] left-[28%] animate-pulse opacity-25">
          <AudioLines className="h-8 w-8 text-white" />
        </div>
        <div className="absolute top-[62%] left-[48%] animate-bounce opacity-20">
          <Mic className="h-12 w-12 text-white" />
        </div>
        <div className="absolute top-[68%] left-[68%] animate-pulse opacity-30">
          <AudioLines className="h-10 w-10 text-white" />
        </div>
        <div className="absolute top-[63%] left-[88%] animate-bounce opacity-25">
          <Mic className="h-9 w-9 text-white" />
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-[15%] left-[12%] animate-pulse opacity-20">
          <AudioLines className="h-8 w-8 text-white" />
        </div>
        <div className="absolute bottom-[10%] left-[32%] animate-bounce opacity-30">
          <Mic className="h-10 w-10 text-white" />
        </div>
        <div className="absolute bottom-[8%] left-[52%] animate-pulse opacity-25">
          <AudioLines className="h-12 w-12 text-white" />
        </div>
        <div className="absolute bottom-[12%] left-[72%] animate-bounce opacity-20">
          <Mic className="h-8 w-8 text-white" />
        </div>
        <div className="absolute bottom-[5%] left-[92%] animate-pulse opacity-30">
          <AudioLines className="h-9 w-9 text-white" />
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
