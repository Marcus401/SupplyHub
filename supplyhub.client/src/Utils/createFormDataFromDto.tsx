export const createFormDataFromDto = (dto: Object): FormData => {
    const formData = new FormData();

    // Handle regular fields
    Object.entries(dto).forEach(([key, value]) => {
        if (value === null || value === undefined) {
            return; // Skip null/undefined
        }

        // Handle File objects
        if (value instanceof File) {
            formData.append(key, value);
        }
        // Handle File arrays
        else if (Array.isArray(value) && value[0] instanceof File) {
            value.forEach(file => {
                formData.append(key, file);
            });
        }
        // Handle regular arrays
        else if (Array.isArray(value)) {
            value.forEach(item => {
                formData.append(key, String(item));
            });
        }
        // Handle regular values
        else {
            formData.append(key, String(value));
        }
    });

    return formData;
};