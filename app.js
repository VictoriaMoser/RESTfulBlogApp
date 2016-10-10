var bodyParser = require ("body-parser"),
mongoose       = require ("mongoose"),
express        = require ("express"),
app            = express();

mongoose.connect("mongodb://localhost/restful_blog_app");
//next code can use in other apps:
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
// Fields of out app
// title
// image
// body
// created

//to make sure our app is working:
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("SERVER IS RUNNING!");
})