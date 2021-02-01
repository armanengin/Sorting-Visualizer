let pivotIndex 
export function getQuickSortAnimations(array){
    const animations = []
    if(array.length <= 1) return
    quickSort( array, 0, array.length -1, animations )
    return animations
}

function quickSort(array, first, last, animations){
    
    if(first < last){
        partition(array, first, last, animations)
        quickSort(array, first, pivotIndex - 1, animations)
        quickSort(array, pivotIndex + 1, last, animations)
    }
}

function partition(array, first, last, animations){
    let pivot = array[first]
    let lastS1 = first
    let firstUnknown = first + 1
    for( ; firstUnknown <= last; firstUnknown++ ){
        animations.push([first, firstUnknown, false])
        if(pivot > array[firstUnknown]){
            lastS1++
            swap(array, lastS1, firstUnknown)
            animations.push([lastS1, firstUnknown, true])
        }
    }
    swap(array, lastS1, first)
    animations.push([lastS1, first, true])
    pivotIndex = lastS1
}

function swap(array, index1, index2){
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
}