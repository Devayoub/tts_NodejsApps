let express=require('express');

var app= express();
spech=require('./models/spech')

app.set('view engine','ejs')
app.use('/assets',express.static('assets'));


app.get('/',function(req,res){

	res.render('index.ejs')
	

})
.post('/',function (req,res) {
	
	 spech("my text",function (link) {
		res.render('index.ejs',{lnk:link});
		console.log(link);
			});
})


.listen(8080);