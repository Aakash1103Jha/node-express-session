/**
 * Here, a session store is created using the connect-mongo module
 * that allows us to use MongoDB as a session store rather than using
 * memory as store
 *
 * Session options are passed to the express-session middleware
 * which then handles creation of cookie with session id and push it
 * to the mongo db session store
 *
 * Once the session is destroyed, with the ttl option in session store,
 * session data is automatically removed after that time.
 */
import MongoStore from "connect-mongo"

const sessionStore = MongoStore.create({
	mongoUrl: process.env.URI,
	ttl: 20000,
})

export const sessionOptions = {
	secret: process.env.SESSION_SECRET as string,
	cookie: { maxAge: 20000, httpOnly: true, signed: true },
	saveUninitialized: true,
	resave: false,
	store: sessionStore,
}
