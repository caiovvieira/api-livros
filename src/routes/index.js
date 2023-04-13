import express from 'express'
import livrosRoutes from '../routes/livrosRoutes.js'

const routes = (app) => {  //isso é um direcionamento, tudo o que for passado vai procurar na rota de livros

    app.route('/').get((req, res) => {
        res.status(200).send('curso node')
    })

    app.use(
        '/api',
        express.json(),
        livrosRoutes
    )
}

export default routes