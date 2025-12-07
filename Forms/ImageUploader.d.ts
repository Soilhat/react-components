import { default as React } from '../../node_modules/react';
interface ImageUploaderProps {
    initialImageUrl?: string;
    placeholderImageUrl: string;
    uploadImage: (file: File) => unknown;
    isUploading: boolean;
}
export declare const ImageUploader: React.FC<ImageUploaderProps>;
export {};
