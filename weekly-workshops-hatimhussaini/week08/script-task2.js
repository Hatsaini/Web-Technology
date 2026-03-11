document.getElementById("load-joke").addEventListener("click",() =>
    {
        const statusEl = document.getElementById("status");
        const jokeListEl = document.getElementById("joke-list");
    
        statusEl.textContent = 'Loading...';
        jokeListEl.textContent = '';
        fetch("https://official-joke-api.appspot.com/jokes/ten")
            .then((response) =>
            {
                if (!response.ok) throw new Error(`Network response was not ok: ${response.status}`);
                return response.json();
            })
            .then((data) =>
            {
                data.forEach(joke => {
                    const li = document.createElement("li");
                    li.innerHTML = `<strong>${joke.setup}</strong><br>${joke.punchline}`;
                    jokeListEl.appendChild(li);
                });
            })
            .catch((error) =>
            {
                statusEl.textContent = "Error loading joke";
                console.error(error);
            });
        });
    