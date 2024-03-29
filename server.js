var matador = require("matador"),
	env = process.env.NODE_ENV || "development",
	argv = matador.argv,
	config = require("./app/config/" + env),
	app = matador.createApp(__dirname, config, {}),
	port = argv.port || 3000

app.configure(function() {

	app.set("database", require("./app/config/database"))

	app.set("view engine", "html")
	app.register(".html", matador.engine)

	//app.use(matador.favicon())
	app.use(matador.query())
	app.use(matador.bodyParser())
	app.use(matador.cookieParser())
	app.use(matador.session({secret: "boosh"}))

	// TODO: Add JSON body parser middleware
	app.use(app.requestDecorator())
	app.use(app.preRouter())
})

app.configure("development", function() {
	app.use(function query(req, res, next){
		console.log("===============================================")
		console.log("req.url: " + req.url);
		console.log("req.query: ");
		console.log(req.query);
		console.log("req.body: ");
		console.log(req.body);
		next();
	})
	app.use(matador.errorHandler({ dumpExceptions: true, showStack: true }))
	app.set("soy options", {
		tmpDir: __dirname + "/tmp/",
		eraseTemporaryFiles: true,
		allowDynamicRecompile: true,
	})
})

app.configure("production", function() {
	app.use(matador.errorHandler())
})

app.configure(function() {
	app.use(app.router({}))
})

app.prefetch()
app.mount()
app.listen(port)
console.log("matador running on port " + port)
