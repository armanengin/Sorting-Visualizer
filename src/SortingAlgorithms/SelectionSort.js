export function getSelectionSortAnimations(array){
    const animations = []
    if(array.length <= 1) return array
    selectionSort(array, array.length, animations)
    return animations
}

function selectionSort(array, n, animations){
    for(let last = n-1; last >= 1; last--){
        const largest = indexOfLargest(array, last + 1, animations)
        //third push is for swapping the height values
        animations.push([largest, last, true])
        swap(array, largest, last)
    }
}

function indexOfLargest(array, size, animations){
    let maxIndex = 0
    for(let currentIndex = 1; currentIndex < size; currentIndex++){
        //first push is for showing te comparison with red bars
        animations.push([currentIndex, maxIndex, false])
        //second push is for turning red bars colours green again 
        animations.push([currentIndex, maxIndex, false])
        if(array[currentIndex] > array[maxIndex]){           
        maxIndex = currentIndex
        }
    }
    return maxIndex
}

function swap(array, x, y){
    let temp = array[x]
    array[x] = array[y]
    array[y] = temp
}
