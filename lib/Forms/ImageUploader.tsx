import React, { useState, useRef, useCallback, useEffect, type ChangeEvent } from 'react';
import { Card } from '../Layout/Card';
import { Upload, RotateCw } from 'lucide-react';

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
  isUploading = false,
}) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl || placeholderImageUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    if (!isUploading) fileInputRef.current?.click();
  };

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const previewUrl = URL.createObjectURL(file);
        setImageUrl(previewUrl);
        uploadImage(file);
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    },
    [uploadImage]
  );

  useEffect(() => {
    setImageUrl(initialImageUrl || placeholderImageUrl);
  }, [initialImageUrl, placeholderImageUrl]);

  return (
    <div className="w-full max-w-sm mx-auto">
      <Card
        className={`
          group relative overflow-hidden transition-all duration-300
          ${isUploading ? 'cursor-not-allowed' : 'cursor-pointer hover:border-primary'}
          border-2 border-dashed border-border
          focus-within:ring-2 focus-within:ring-ring
        `}
        onClick={handleContainerClick}
      >
        <Card.Body className="p-0 sm:p-0 flex flex-col items-center justify-center min-h-64 bg-background/30">
          <img
            src={imageUrl}
            alt="Upload preview"
            className={`
              w-full h-64 object-cover transition-all duration-500
              ${isUploading ? 'opacity-30 blur-[2px] scale-95' : 'opacity-100 scale-100'}
            `}
          />

          {/* Interaction Overlay */}
          <div
            className={`
            absolute inset-0 flex flex-col items-center justify-center transition-all duration-300
            ${isUploading ? 'bg-card/40 opacity-100' : 'bg-primary/10 opacity-0 group-hover:opacity-100'}
          `}
          >
            {isUploading ? (
              <div className="flex flex-col items-center gap-2">
                <RotateCw className="h-10 w-10 animate-spin text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Uploading...</span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 scale-90 group-hover:scale-100 transition-transform">
                <div className="p-4 rounded-full bg-card shadow-xl text-primary">
                  <Upload className="h-6 w-6" />
                </div>
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Change Image
                </span>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="sr-only" /* sr-only is better than hidden for accessibility */
        accept="image/*"
        disabled={isUploading}
        data-testid="inputImageUploader"
      />

      <p className="mt-2 text-center text-xs text-muted-foreground">JPG, PNG or GIF. Max 5MB.</p>
    </div>
  );
};
