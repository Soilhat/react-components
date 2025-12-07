import React, { useState, useRef, useCallback, useEffect, type ChangeEvent } from 'react';
import { Card } from '../Layout/Card';

interface ImageUploaderProps {
  initialImageUrl?: string;
  placeholderImageUrl: string;
  uploadImage: (file: File) => unknown;
  isUploading: boolean;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  initialImageUrl,
  placeholderImageUrl,
  uploadImage,
  isUploading,
}) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl || placeholderImageUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file) {
        const previewUrl = URL.createObjectURL(file);
        setImageUrl(previewUrl);

        uploadImage(file);

        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    },
    [uploadImage]
  );

  useEffect(() => {
    if (initialImageUrl) {
      setImageUrl(initialImageUrl);
    } else {
      setImageUrl(placeholderImageUrl);
    }
  }, [initialImageUrl, placeholderImageUrl]);

  return (
    <div className="relative w-full max-w-sm mx-auto shadow-md rounded-lg overflow-hidden">
      <Card className="cursor-pointer group relative" onClick={handleContainerClick}>
        <img
          src={imageUrl}
          alt="uploaded"
          className={`
            w-full h-64 object-contain mb-4 rounded-lg transition-opacity duration-300 
            ${isUploading ? 'opacity-50 blur-sm' : 'opacity-100'}
          `}
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          {isUploading ? (
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
          ) : (
            <span className="text-white text-sm font-semibold p-2 border border-white rounded-full">Upload</span>
          )}
        </div>
      </Card>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
        disabled={isUploading}
      />
    </div>
  );
};
