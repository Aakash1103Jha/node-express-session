/**
 * All express app related logic here.
 * Session config and session store related logic has been
 * abstracted to session.ts
 *
 * Here, we setup our basic express app with a / and /logout routes.
 * The / route is where and how the user starts a new session and gets
 * a cookie with session id added to the browser. This cookie is also stored
 * in the session store (mongo db for this app) and is removed when the user
 * visits /logout route.
 */
import express, { Application, Request, Response } from "express"
import cors from "cors"
import session from "express-session"

import { sessionOptions } from "./session"

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(session(sessionOptions))

app.get("/", async (req: Request, res: Response) => {
	res.send("Hello World")
})

app.get("/logout", async (req: Request, res: Response) => {
	req.session.destroy((err: Error) => {
		if (err) return console.error(err)
	})
	return res.clearCookie("connect.sid").send("Logout complete")
})

export default app
