export const formatNumberOverNine = (i) => {
    if (i <= 9){
        return i;
    } else {
        return "9+";
    }
}