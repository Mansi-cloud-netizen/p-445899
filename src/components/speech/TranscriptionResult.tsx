import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface TranscriptionResultProps {
  text?: string;
}

export const TranscriptionResult: React.FC<TranscriptionResultProps> = ({ text }) => {
  const handleCopy = () => {
    if (text) {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Transcription</CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          disabled={!text}
          title="Copy to clipboard"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        {text ? (
          <p className="text-sm whitespace-pre-wrap">{text}</p>
        ) : (
          <p className="text-sm text-gray-500 text-center">
            No transcription available yet
          </p>
        )}
      </CardContent>
    </Card>
  );
};