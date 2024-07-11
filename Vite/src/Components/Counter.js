export function Counter() {
    let count = 0;

    function updateCounter() {
        document.querySelector("#counter").innerText = `Count: ${count}`;
    }

    function incrementCounter() {
        count++;
        updateCounter();
    }

    document.addEventListener("DOMContentLoaded", () => {
        updateCounter();
        document
            .querySelector("#counter")
            .addEventListener("click", incrementCounter);
    });

    return `
      <div class="text-center my-4">
        <button id="counter" class="bg-green-500 text-white p-2 rounded">Count: ${count}</button>
      </div>
    `;
}
