
const Sequelize = require('sequelize');
const config = require('./config');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

var Pet = sequelize.define('pets',{
		id:{
			type:Sequelize.STRING(50),
			primaryKey:true
		},
		name:Sequelize.STRING(100),
		gender:Sequelize.BOOLEAN,
		birth:Sequelize.STRING(10),
		createdAt:Sequelize.BIGINT,
		updatedAt:Sequelize.BIGINT,
		version:Sequelize.BIGINT
	},
	{
		timestamps:false
	});

var now = Date.now();


//用Sequelize写法
/*
Pet.create({
	id:'g-'+now,
	name:'Gaffey',
	gender:false,
	birth:'2017-07-07',
	createdAt:now,
	updatedAt:now,
	version:0
}).then(function(p){
	console.log('created.' + JSON.stringify(p));
}).catch(function(err){
	console.log('failed:'+err);
});
*/

//用await写法

//添加数据
(async ()=>{
	var dog = await Pet.create({
		id:'d-'+now,
		name:'Gaffey',
		gender:false,
		birth:'2008-08-08',
		createdAt:now,
		updatedAt:now,
		version:0
	});
	console.log('created: '+JSON.stringify(dog));
})();

//查询
(async () => {
    var pets = await Pet.findAll({
        where: {
            name: 'Gaffey'
        }
    });
    console.log(`find ${pets.length} pets:`);
    for (let p of pets) {
        console.log(JSON.stringify(p));
        console.log('update pet ...');
        p.genner = true;
        p.updatedAt = Date.now();
        p.version ++;
        await p.save();
        if(p.version === 3){
        	await p.destroy();
        	console.log(`${p.name} was destroyed.`);
        }
    }
})();

/*
(async () => {
    var p = await queryFromSomewhere();
    console.log('----------------------');
    console.log(JSON.stringify(p));
    p.gender = true;
    p.updatedAt = Date.now();
    p.version ++;
    await p.save();
})();


(async () => {
    var p = await queryFromSomewhere();
    await p.destroy();
})();

*/





















