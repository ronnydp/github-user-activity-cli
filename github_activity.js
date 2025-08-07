import https from "https";
const username = process.argv[2];

if (!username) {
  console.error("Por favor, proporciona un nombre de usuario de GitHub.");
  process.exit(1);
}

const options = {
  hostname: "api.github.com",
  path: `/users/${username}/events`,
  method: "GET",
  headers: {
    "User-Agent": "node.js", // Github necesita esto
  },
};

https
  .get(options, (res) => {
    let data = "";

    if (res.statusCode !== 200 ) {
      console.log(`Error ${res.statusCode}`);
    //   res.resume();
      return;
    }

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        const events = JSON.parse(data);
        events.forEach((event) => {
          const type = event.type;
          const repo = event.repo.name;

          if (type === "PushEvent") {
            const commits = event.payload.commits.length;
            console.log(`Pushed ${commits} commit(s) to ${repo}`);
          } else if (type === "WatchEvent") {
            console.log(`Starred ${repo}`);
          } else if (type === "IssuesEvent") {
            const action = event.payload.action;
            console.log(
              `${action[0].toUpperCase() + action.slice(1)} an issue in ${repo}`
            );
          } else {
            console.log(`${type} in ${repo}`);
          }
        });
      } catch (error) {
        console.error("Error al analizar la respuesta JSON: ", error.message);
      }
    });
  })
  .on("error", (err) => {
    console.error("Error al hacer la solicitud: ", err.message);
  });
