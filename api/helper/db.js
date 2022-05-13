const mongoose =require('mongoose');

module.export=()=>{
    mongoose.connect('mongodb://localhost:27017/blog',{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        family: 4,
      }).then(() => {
        console.log('bağlantı başarılı');
      }).catch((err) => {
        console.log(err);
      });
      
};