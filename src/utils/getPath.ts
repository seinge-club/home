export const getAssetPath = (src: string) => {
    const basePath = process.env.BASE_PATH || '';
    return `${basePath}${src}`;
};
