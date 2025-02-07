import React, { useState } from "react";
import { AudioUpload } from "@/components/speech/AudioUpload";
import { AudioVisualizer } from "@/components/speech/AudioVisualizer";
import { TranscriptionResult } from "@/components/speech/TranscriptionResult";

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
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            SPEECH TO TEXT
          </h1>
          <p className="text-lg text-muted-foreground">
            Upload your audio file to get started
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-6">
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