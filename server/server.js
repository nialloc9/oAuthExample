import { app } from "./config";
import api  from "./api";

// The Api application middleware.
app.post("/api/*", api);

const listener = app.listen(3001, () =>
    console.log(`Server listening on port 3001`)
);

export default listener;