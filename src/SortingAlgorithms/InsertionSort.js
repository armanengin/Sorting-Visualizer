export function getInsertionSortAnimations(array){
    const animations = []
    if(array.length <= 1) return array
    insertionSort(array, array.length, animations)
    return animations
}

function insertionSort(array, size, animations){
    for(let unsorted = 1; unsorted < size; unsorted++){
        let newItem = array[unsorted]
        let index = unsorted
        for(;  index > 0 && array[index - 1] > newItem; index--){
            animations.push([index-1, unsorted, false, 0])
            animations.push([index-1, unsorted, false, 0])
            array[index] = array[index - 1]
            animations.push([index, index-1, true, 0])
        }

        array[index] = newItem
        animations.push([index, unsorted, true, newItem])
               
    }
}