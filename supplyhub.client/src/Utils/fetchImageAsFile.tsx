// Fetch image as a File/Blob object
export const fetchImageAsFile = async (filename: string): Promise<File | null> => {
    try {
        const response = await fetch(`${filename}`);

        if (!response.ok) {
            console.error('Image not found');
            return null;
        }

        // Get blob from response
        const blob = await response.blob();

        // Convert blob to File object
        return new File([blob], filename, {type: blob.type});
    } catch (error) {
        console.error('Error fetching image:', error);
        return null;
    }
};