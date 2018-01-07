import path from 'path';
import { app } from "./config";
import api  from "./api";

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

// The Api application middleware.
app.post("/api/*", api);

const listener = app.listen(3001, () =>
    console.log(`Server listening on port 3001`)
);

export default listener;