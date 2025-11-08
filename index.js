const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send(`
    <div style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
      font-family: Arial, sans-serif;
      background: linear-gradient(to bottom right, #eef2f3, #8e9eab);
    ">
      <h1 style="font-size: 2.5rem; color: #222;"> It's Working — All Set!</h1>
      <p style="font-size: 1.2rem; color: #444;"> Deployment success.</p>
      <img 
        src="https://blog.hyperiondev.com/wp-content/uploads/2020/09/coders-who-changed-the-world.png" 
        alt="Deployed Image" 
        width="400"
        style="margin-top: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);"
      />
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
