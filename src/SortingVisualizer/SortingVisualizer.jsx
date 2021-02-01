import React from 'react'
import { getInsertionSortAnimations } from '../SortingAlgorithms/InsertionSort.js';
import { getMergeSortAnimations } from '../SortingAlgorithms/MergeSort.js'
import { getSelectionSortAnimations } from '../SortingAlgorithms/SelectionSort.js'
import { getBubbleSortAnimations } from '../SortingAlgorithms/BubbleSort.js'
import { getQuickSortAnimations } from '../SortingAlgorithms/QuickSort.js';
import './SortingVisualizer.css'
import Sliders from '../Sliders.js'

let isEdgeValue = false
let animationSpeed = 5;
//let isDisabled = false
let animationsTimer = []

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            array: [],
            numberOfArrayBars: 70,
        }
    }

     changeNumberOfArrayBars = (value) => {
        this.setState({
            numberOfArrayBars: value
        })
        if(this.state.numberOfArrayBars !== 130 && this.state.numberOfArrayBars !== 2){
            this.resetArray()
            isEdgeValue = false
        }

        if((this.state.numberOfArrayBars === 130 || this.state.numberOfArrayBars === 2) && !isEdgeValue ){
            this.resetArray()
            isEdgeValue = true
        }
    }

    componentDidMount(){
        this.resetArray()
    }

    resetArray = () =>{
        const array = []
        for( let i = 0; i < this.state.numberOfArrayBars; i++){
            array.push(randomIntFromInterval(5, 650))
        }
            for(let i = 0; i < animationsTimer.length; i++){
                clearTimeout(animationsTimer[i])
                animationsTimer[i] = 0
            }
        const arrayBars = document.getElementsByClassName('array-bar')
        for(let i = 0; i < arrayBars.length; i++){
            arrayBars[i].style.backgroundColor =  'white'
        }
        this.setState({array})
    }

    selectionSort = () =>{
       // this.resetArray()
            //isDisabled = true
            const animations = getSelectionSortAnimations(this.state.array)
            let timer = 0
            for(let i = 0; i < animations.length; i++){
                const arrayBars = document.getElementsByClassName('array-bar')
                const [barOneIdx, barTwoIdx, swap] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const colorMain = barOneStyle.color 
                const colorComparison = 'red'
                if(!swap){               
                    animationsTimer.push(setTimeout(() => {
                        barOneStyle.backgroundColor = colorComparison
                        barTwoStyle.backgroundColor = colorComparison
                    }, timer * animationSpeed ))
                    timer++
                    animationsTimer.push(setTimeout(() => {
                        barOneStyle.backgroundColor = colorMain
                        barTwoStyle.backgroundColor = colorMain
                    }, timer * animationSpeed ))     
                }
                else{
                    animationsTimer.push(setTimeout(() => {
                        let temp = barOneStyle.height
                        barOneStyle.height = barTwoStyle.height
                        barTwoStyle.height = temp
                    }, timer * animationSpeed ))
                }
                timer++
            }
            //isDisabled = false
    }

    insertionSort = () =>{
        //this.resetArray()
        //isDisabled = true
        const animations = getInsertionSortAnimations(this.state.array)
        let timer = 0
        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar')
            const [barOneIdx, barTwoIdx, insert, newItem] = animations[i]
            const barOneStyle = arrayBars[barOneIdx].style
            const barTwoStyle = arrayBars[barTwoIdx].style
            const colorMain = barOneStyle.color 
            const colorComparison = 'red'
            if(!insert){                             
                animationsTimer.push(setTimeout(() => {
                    barOneStyle.backgroundColor = colorComparison
                   // barTwoStyle.backgroundColor = color
                }, timer * animationSpeed ))
                timer++
                animationsTimer.push(setTimeout(() => {
                    barOneStyle.backgroundColor = colorMain
                   // barTwoStyle.backgroundColor = 'rgb(142, 221, 127)'
                }, timer * animationSpeed ))     
            }
            else if(insert && newItem === 0){
                animationsTimer.push(setTimeout(() => {
                    barOneStyle.height = barTwoStyle.height
                }, timer * animationSpeed ))
            }
            else{
                animationsTimer.push(setTimeout(() => {
                barOneStyle.height = `${newItem}px`
               }, timer * animationSpeed)) 
            }
            timer++
        }
        //isDisabled = false
    }

    bubbleSort(){
        //this.resetArray()
            //isDisabled = true
            const animations = getBubbleSortAnimations(this.state.array)
            let timer = 0
            for(let i = 0; i < animations.length; i++){
                const arrayBars = document.getElementsByClassName('array-bar')
                const [barOneIdx, barTwoIdx, swap] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const colorMain = barOneStyle.color 
                const colorComparison = 'red'
                if(!swap){               
                    animationsTimer.push(setTimeout(() => {
                        barOneStyle.backgroundColor = colorComparison
                        barTwoStyle.backgroundColor = colorComparison
                    }, timer * animationSpeed ))
                    timer++
                    animationsTimer.push(setTimeout(() => {
                        barOneStyle.backgroundColor = colorMain
                        barTwoStyle.backgroundColor = colorMain
                    }, timer * animationSpeed ))     
                }
                else{
                    animationsTimer.push(setTimeout(() => {
                        let temp = barOneStyle.height
                        barOneStyle.height = barTwoStyle.height
                        barTwoStyle.height = temp
                    }, timer * animationSpeed ))
                }
                timer++
            }
            //isDisabled = false
    }

    mergeSort(){
        //this.resetArray()
            //isDisabled = true
            const animations = getMergeSortAnimations(this.state.array)
            for(let i = 0; i < animations.length; i++){
                const arrayBars = document.getElementsByClassName('array-bar')
                const isColorChange = i % 3 !== 2
                if(isColorChange){
                    const [barOneIdx, barTwoIdx] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style
                    const barTwoStyle = arrayBars[barTwoIdx].style
                    const color = i % 3 === 0 ? 'red' : barOneStyle.color
                    animationsTimer.push(setTimeout(() => {
                        barOneStyle.backgroundColor = color
                        barTwoStyle.backgroundColor = color
                    }, i * animationSpeed ))
                }
                else{
                    animationsTimer.push(setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i]
                        const barOneStyle = arrayBars[barOneIdx].style
                        barOneStyle.height = `${newHeight}px`
                    }, i * animationSpeed ))
                }
            }
            //isDisabled = false
    }

    quickSort(){
        //this.resetArray()
        let timer = 0   
       // isDisabled = true
        const animations = getQuickSortAnimations(this.state.array)
        
        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar')
            const [barOneIdx, barTwoIdx, swap] = animations[i]
            const barOneStyle = arrayBars[barOneIdx].style
            const barTwoStyle = arrayBars[barTwoIdx].style
            const colorMain = barOneStyle.color 
            const colorComparison = 'red'
            if(!swap){               
                animationsTimer.push(setTimeout(() => {
                    barOneStyle.backgroundColor = colorComparison
                    barTwoStyle.backgroundColor = colorComparison
                }, timer * animationSpeed ))
                timer++
                animationsTimer.push(setTimeout(() => {
                    barOneStyle.backgroundColor = colorMain
                    barTwoStyle.backgroundColor = colorMain
                }, timer * animationSpeed ))     
            }
             else{
                animationsTimer.push(setTimeout(() => {
                    let temp = barOneStyle.height
                    barOneStyle.height = barTwoStyle.height
                    barTwoStyle.height = temp
                }, timer * animationSpeed ))
            }
            timer++
        }
    }

    testSortingAlgorithms(){
        for(let i = 0; i < 100; i++){
            const array = []
            const length = randomIntFromInterval(1, 1000)
            for(let i = 0; i < length; i++){
                array.push(randomIntFromInterval(-1000, 1000))
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b )
            const sortedArray = array.slice()
            getSelectionSortAnimations(sortedArray)
            console.log(arraysAreEqual(javaScriptSortedArray, sortedArray))
        }
    }

    

    render(){
        const {array} = this.state      
        return (
            <div className = "array-container">
            <div className= "arrays">
            {array.map((value, idx) => (
                <div className = "array-bar" key = {idx} style = {{height: `${value}px`}}>
                </div>            
            ))}
            </div> 
            <nav className = "nav"> 
            <div className = "nav-container"> 
            <h1 className = "header">SORTING VISUALIZER</h1>
            <div className="slider-container" style = {{width:300, margin:5}}>
            <Sliders 
                changeNumberOfArrayBars = {this.changeNumberOfArrayBars}
                isDisabled = {this.isDisabled}
            />
                <label for= "range">Size</label>
            </div> 
            <ul>     
            <button onClick = {() => this.resetArray()}>New Array</button>
            <button onClick = {() => this.selectionSort()}>Selection Sort</button>
            <button onClick = {() => this.insertionSort()}>Insertion Sort</button>
            <button onClick = {() => this.bubbleSort()}>BubbleSort</button>
            <button onClick = {() => this.mergeSort()}>Merge Sort</button>
            <button onClick = {() => this.quickSort()}>Quick Sort</button>
            {/*<button onClick = {() => this.testSortingAlgorithms()}>test</button>*/}
            </ul> 
            </div>
            </nav> 
            </div>
        );
    }  
}

function randomIntFromInterval(min, max){
    return  Math.floor(Math.random() * (max - min + 1) + min)
}

function arraysAreEqual(array1, array2){
    if(array1.length !== array2.length){
        return false
    } 
    for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]) return false
    }
    return true
}

export {animationSpeed}