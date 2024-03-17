// server/api/hello.ts
import { fromNodeMiddleware } from "h3"

export default fromNodeMiddleware(async (req, res) => {
	try {
		// Définit le code de statut de la réponse à 200 (OK)
		res.writeHead(200, { "Content-Type": "text/plain" })
		// Envoie le contenu de la réponse "Hello World!"
		res.end("Hello World!")
	} catch (error) {
		// En cas d'erreur, envoie une réponse avec un code de statut 500 (Internal Server Error)
		res.writeHead(500, { "Content-Type": "text/plain" })
		res.end(
			"Une erreur est survenue lors du traitement de la requête."
		)
	}
})
