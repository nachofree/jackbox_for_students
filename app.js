    const API_URL = "https://jackbox-backend.onrender.com";



    // Load submissions
    function loadSubmissions() {
      //the endpoint is at API_URL+/submissions
      //You should retrieve the submissions and put them in the ul 'submissions'
      
    }

    // Load scores
    function loadScores() {
      //the endpoint is at API_URL+/scores
      //You should retrieve the submissions and put them in the ul 'scores'
      
    }

    // Handle form submission
    document.getElementById("answerForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const team = document.getElementById("team").value;
      const answer = document.getElementById("answer").value;

      //post to the API_URL + /submit
      //use correct headers
      //api expects team and answer
      //after a successful fetch, loadSubmissions()
        
    });


    /*

    DON'T MODIFY ANYTHING BELOW THIS

    */
       const roundTime = 120; // seconds per round

    // Load prompt
    function loadPrompt() {
      fetch(API_URL + "/prompt")
        .then(response => response.json())
        .then(data => {
          document.getElementById("prompt").textContent = data.prompt;
          startTimer();
        })
        .catch(err => console.error("Error loading prompt:", err));
    }

    // Auto-refresh every 5s
    setInterval(function() {
      loadSubmissions();
      loadScores();
    }, 5000);

    // Countdown timer
    function startTimer() {
      let timeLeft = roundTime;
      const timerEl = document.getElementById("timer");
      timerEl.textContent = `Time left: ${timeLeft}s`;

      const interval = setInterval(function() {
        timeLeft--;
        if (timeLeft >= 0) {
          timerEl.textContent = `Time left: ${timeLeft}s`;
        } else {
          timerEl.textContent = "Time's up!";
          document.getElementById("answerForm").querySelector("button").disabled = true;
          clearInterval(interval);
        }
      }, 1000);
    }

    // Initialize
    loadPrompt();
    loadSubmissions();
    loadScores();