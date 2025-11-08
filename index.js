const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 It's Working — All Set!</h1>
    <p>Image below confirms deployment success.</p>
    <img src="https://blog.hyperiondev.com/wp-content/uploads/2020/09/coders-who-changed-the-world.png" 
         alt="Deployed Image" width="300" />
  `);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
