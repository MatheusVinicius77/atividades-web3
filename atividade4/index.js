const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("aula6_web3","aluno","ifpecjbg",{
    dialect:"mysql",
    host:"localhost"
})


sequelize.authenticate()
    .then(()=>{
        console.log("conexão bem sucedidade")
    })
    .catch(err=>{
        console.log("Ocorreu um erro" + err)
    })



const Produtos = sequelize.define('Produtos',{

    id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type: Sequelize.STRING(255),
        allowNull:false
    },

    descricao:{
        type: Sequelize.TEXT,
        allowNull:true
    },


    preco:{
        type: Sequelize.DECIMAL(10,2),
        allowNull:false
    },


    disponivel:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:true
    }
});


const Clientes = sequelize.define("Clientes", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    nome:{
        type: Sequelize.STRING(100),
        allowNull:false
    },

    email:{
        type: Sequelize.STRING(100),
        allowNull: true
    },


    endereco:{
        type: Sequelize.STRING(255),
        allowNull: false
    },

    telefone:{
        type: Sequelize.STRING(20),
        allowNull: true
    }

})


const Categorias = sequelize.define("Categorias", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    nome:{
        type: Sequelize.STRING(100),
        allowNull: false
    },

    descricao:{
        type: Sequelize.TEXT,
        allowNull:false
    },
})



const Pedidos = sequelize.define("Pedidos", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    data_pedido:{
        type: Sequelize.TIME,
        allowNull:false
    },

    status:{
        type: Sequelize.STRING(50),
        allowNull: false
    },

})


const ItensPedido  = sequelize.define("ItensPedido", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncremet:true
    },


    quantidade: Sequelize.INTEGER,

    preco_unitario: Sequelize.DECIMAL(10,2)
})


Categorias.hasMany(Produtos)
Clientes.hasMany(Pedidos)

Produtos.hasMany(ItensPedido)
Pedidos.hasMany(ItensPedido)


sequelize.sync()
    .then(()=>{
        console.log("Modelos scinronizados com o banco de dados")
    })
    .catch(err =>{
        console.log("erro" + err)
    })


module.exports = {
    sequelize,
    Categorias,
    Produtos,
    Pedidos,
    ItensPedido,
    Clientes
}