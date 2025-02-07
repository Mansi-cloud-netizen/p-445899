import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";

interface AudioUploadProps {
  onFileSelect: (file: File) => void;
}

export const AudioUpload: React.FC<AudioUploadProps> = ({ onFileSelect }) => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('audio/')) {
      onFileSelect(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => document.getElementById('audio-input')?.click()}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-4 text-lg font-semibold">Add Audio File</h3>
          <p className="mt-2 text-sm text-gray-500">
            Drag and drop your audio file here, or click to select
          </p>
          <input
            id="audio-input"
            type="file"
            accept="audio/*"
            className="hidden"
            onChange={handleFileInput}
          />
          <Button className="mt-4" variant="outline">
            Select File
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};