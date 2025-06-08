export const createImageLink = (size: number) => {
    return import.meta.env.VITE_IMAGES_BASE_URL + `/${size}` + "-yarder-skip.jpg";
};
