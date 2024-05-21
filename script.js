document.getElementById('yesNoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected answer
    const answer = document.querySelector('input[name="answer"]:checked');
    
    // Check if an answer is selected
    if (answer) {
        // Display the selected answer
        document.getElementById('output').innerText = `if ${answer.value} , let catchup`;
    } else {
        // If no answer is selected, display a warning
        document.getElementById('output').innerText = 'waiting for your response';
    }
});
