/**
 * Root and entry point of the application.
 * All express app related logic has been abstracted to app.ts
 * All session related logic has been abstracted to session.ts
 */
require("dotenv/config")

import app from "./app"

const PORT: string | number = process.env.PORT || 4000

app.listen(PORT, () => console.info(`Server running on port ${PORT}`))
