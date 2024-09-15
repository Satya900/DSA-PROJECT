let array = [];
const arrayContainer = document.getElementById("array-container");

// Generate random array
function generateArray(size = 20) {
    array = [];
    arrayContainer.innerHTML = "";
    for (let i = 0; i < size; i++) {
        const height = Math.floor(Math.random() * 300) + 50;
        array.push(height);
        const bar = document.createElement("div");
        bar.style.height = `${height}px`;
        bar.classList.add("bar");
        arrayContainer.appendChild(bar);
    }
}

// Update bars in the DOM
function updateBars(array) {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        bars[i].style.height = `${array[i]}px`;
    }
}

// Bubble Sort
async function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                updateBars(arr);
                await sleep(100); // Slow down the sorting to visualize better
            }
        }
    }
}

// Insertion Sort
async function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j -= 1;
            updateBars(arr);
            await sleep(100);
        }
        arr[j + 1] = key;
        updateBars(arr);
        await sleep(100);
    }
}

// Selection Sort
async function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            updateBars(arr);
            await sleep(100);
        }
    }
}

// Sleep function to slow down sorting
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Start the sorting algorithm based on user selection
function startSorting(algorithm) {
    generateArray();
    if (algorithm === "bubble") {
        bubbleSort(array);
    } else if (algorithm === "insertion") {
        insertionSort(array);
    } else if (algorithm === "selection") {
        selectionSort(array);
    }
}

// Generate initial random array on load
window.onload = generateArray;
