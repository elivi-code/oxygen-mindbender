const useFontSize = (rem) => {
    return (rem * parseFloat(window.getComputedStyle(document.documentElement).fontSize));
};
export default useFontSize;
