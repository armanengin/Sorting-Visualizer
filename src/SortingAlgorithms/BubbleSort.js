export function getBubbleSortAnimations(array){
    const animations = []
    if(array.length <= 1) return array
    bubbleSort(array, array.length, animations)
    return animations
}

function bubbleSort(array, size, animations){
    let sorted = false

    for(let i = 1; i < size && !sorted; i++){
        sorted = true
        for(let j = 0; j < size - i; j++){
            animations.push([j, j+1, false])
            if(array[j] > array[j+1]){
                animations.push([j, j+1, true])
                swap(array, j, j+1)
                sorted = false
            }
        }
    }
}

function swap(array, index1, index2){
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
}