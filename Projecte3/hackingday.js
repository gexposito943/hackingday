function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
      const newTask = document.createElement('li');
      newTask.className = 'task';
      newTask.innerHTML = `
        <span>${taskInput.value}</span>
        <input type="checkbox" onchange="toggleCompletion(this)">
        <button class="deleteButton" onclick="deleteTask(this)">Delete</button>
      `;

      taskList.appendChild(newTask);
      taskInput.value = '';
    }
  }

  // Function to toggle the completion status of a task
  function toggleCompletion(checkbox) {
    const taskText = checkbox.parentNode.querySelector('span');
    taskText.classList.toggle('completed', checkbox.checked);
  }

  // Function to delete a task
  function deleteTask(deleteButton) {
    const taskToRemove = deleteButton.parentNode;
    taskToRemove.parentNode.removeChild(taskToRemove);
  }


  window.onload = function() {
    // Create a new paragraph element
    var hiiddenText = document.createElement('p');

    // Set the text content
    hiidenText.textContent = "This text is the long parametre u need .";

    // Set the style to hide the text
    hiddenText.style.display = 'none';

    // Append the paragraph to the document body
    document.body.appendChild(hiddenText);
    // Append the date "1965" to the text content
    hiddenText.textContent += "1965";


    // Later, you can use JavaScript to show the hidden text
    hiddenText.style.display = 'none'; // or 'inline', 'inline-block', etc.
  };

  //show not me 
  function notme(){
    alert("NOT ME HAHAHAHAHAH");
  }


// Function to generate a random color in hexadecimal format
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    // Function to change the background color of the document
    function changeBackgroundColor() {
      const randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor;
    }

    // Attach the changeBackgroundColor function to the button click event
    document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);