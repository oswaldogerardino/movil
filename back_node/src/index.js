import express from 'express';
import morgan from 'morgan';
import router from './routes/app';

const app = express();

app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:false })) ;

//routes
app.use('/api', router);

app.listen(app.get('port'), ()=>{
    console.log('Server:', app.get('port'));
});