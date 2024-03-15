const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const port = process.env.PORT || 3000;


const connection = mysql.createConnection({
    host:"localhost",
    user:"aluno",
    password:"ifpecjbg",
    database:"att3_web3"
});


connection.connect((err)=>{
    if(err){
        console.err("Erro ao conectar ao MySql:" + err.message)
    }else{
        console.log("Conectando ao MySql")
    }
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());



// CLIENTES
{
// PEGAR TODOS OS CLIENTES
app.get('/clientes', (req,res)=>{
    const sql = "SELECT * FROM CLIENTES"
    connection.query(sql, (err,results)=>{
        if (err) {
            console.error('Erro ao obter registros:', err.message);
            res.status(500).json({ error: 'Erro ao obter registros do banco de dados' });
        } else {
            res.status(200).json(results);
        }
    })
    
    
})

app.get('/clientes/:nome', (req,res)=>{
    const sql = `select * from clientes where nome LIKE ?`
    const nome = req.params.nome
    connection.query(sql, ["%" + nome + "%" ], (err,results)=>{
        if (err) {
            console.error('Erro ao obter registros:', err.message);
            res.status(500).json({ error: 'Erro ao obter registros do banco de dados' });
        } else {
            res.status(200).json(results);
        }

    })
})

// CADASTRAR CLIENTE

app.post('/clientes', (req,res)=>{
    const sql = "INSERT INTO CLIENTES (nome,email,endereco,telefone) VALUES(?,?,?,?)"
    const {nome, email, endereco, telefone} = req.body;
    connection.query(sql,[nome,email,endereco,telefone], (err,results)=>{
        if (err) {
            console.error('Erro ao obter registros:', err.message);
            res.status(500).json({ error: 'Erro ao obter registros do banco de dados' });
        } else {
            res.status(200).json("Usuário cadastrado com sucesso");
        }
    })
})

// ALTERAR INFO DOS CLIENTES
app.put('/clientes/:change/:id', (req,res)=>{
    const {change,id} = req.params;
    const valor = req.body[change];
    const sql = `update clientes set ${change}=? where id=? `;
    connection.query(sql,[valor,Number(id)], (err,results)=>{
        if (err) {
            console.error('Erro ao obter registros:', err.message);
            res.status(500).json({ error: 'Erro ao atualizar registros do banco de dados' });
        } else {
            res.status(200).json({ message: 'Registro atualizado com sucesso' });
        }
    })
})

// DELETAR CLIENTES
app.delete('/clientes/:id', (req,res)=>{
    const id = req.params.id;
    const sql = "delete from clientes where id = ?"

    connection.query(sql, [Number(id)], (err,result)=>{
        if (err) {
            console.error('Erro ao excluir registro:', err.message);
            res.status(500).json({ error: 'Erro ao excluir registro no bd' });
        } else {
            if (result.affectedRows > 0) {
                console.log('Registro excluído com sucesso!');
                res.status(200).json({ message: 'Registro excluído com sucesso' });
            } else {
                console.log('Registro não encontrado.');
                res.status(404).json({ message: 'Nenhum registro encontrado para excluir' });
            }
        }
    })

})

}


// CATEGORIAS
{
app.get("/categorias", (req,res)=>{
    const sql = "select * from categorias";

    connection.query(sql, (err,results)=>{
        if (err) {
            console.error('Erro ao obter registros:', err.message);
            res.status(500).json({ error: 'Erro ao obter registros do banco de dados' });
        } else {
            res.status(200).json(results);
        }
    })
})


app.post("/categorias", (req,res)=>{
    const {nome, descricao} = req.body;
    const sql = "insert into Categorias (nome, descricao) values(?,?)";
    connection.query(sql, [nome,descricao],(err,results)=>{
        if (err) {
            res.status(500).json({ error: 'Erro a criar categorias' });
        } else {
            res.status(200).json("Categoria criada");
        }
    })
})

app.put('/categorias/:change/:id', (req,res)=>{
    const {change,id} = req.params;
    const valor = req.body[change];
    const sql = `update categorias set ${change}=? where id=? `;
    connection.query(sql,[valor,Number(id)], (err,results)=>{
        if (err) {
            console.error('Erro ao obter registros:', err.message);
            res.status(500).json({ error: 'Erro ao atualizar registros do banco de dados' });
        } else {
            res.status(200).json({ message: 'Registro atualizado com sucesso' });
        }
    })
})

app.delete("/categorias/:id", (req,res)=>{
    const id = req.params.id;
    const sql = "delete from Categorias where id = ?";
    connection.query(sql, [Number(id)],(err,results)=>{
        if (err) {
            res.status(500).json({ error: 'Erro ao deletar' });
        } else {
            res.status(200).json("Categoria deletada");
        }
    })
})

}


// PRODUTOS
{
app.get("/produtos", (req,res)=>{
    const sql = "select * from Produtos";
    
    connection.query(sql, (err,results)=>{
        if (err) {
            console.error('Erro ao obter registros:', err.message);
            res.status(500).json({ error: 'Erro ao obter registros do banco de dados' });
        } else {
            res.status(200).json(results);
        }
    })
})


app.post("/produtos", (req,res)=>{
    const {nome, descricao, preco, id_categoria, disponivel} = req.body;
    const sql = "insert into produtos (nome, descricao,preco,id_categoria,disponivel) values(?,?,?,?,?)";
    connection.query(sql, [nome,descricao, preco, id_categoria, disponivel],(err,results)=>{
        if (err) {
            res.status(500).json({ error: 'Erro a criar produto' });
        } else {
            res.status(200).json("Produto criado");
        }
    })
})

app.put('/produtos/:change/:id', (req,res)=>{
    const {change,id} = req.params;
    const valor = req.body[change];
    const sql = `update produtos set ${change}=? where id=? `;
    connection.query(sql,[valor,Number(id)], (err,results)=>{
        if (err) {
            console.error('Erro ao obter registros:', err.message);
            res.status(500).json({ error: 'Erro ao atualizar registros do banco de dados' });
        } else {
            res.status(200).json({ message: 'Registro atualizado com sucesso' });
        }
    })
})

app.delete("/produtos/:id", (req,res)=>{
    const id = req.params.id;
    const sql = "delete from Produtos where id = ?";
    connection.query(sql, [Number(id)],(err,results)=>{
        if (err) {
            res.status(500).json({ error: 'Erro ao deletar' });
        } else {
            res.status(200).json("Produto deletada");
        }
    })
})

}

// PEDIDOS
{
app.get("/pedidos", (req,res)=>{
    const sql = "select * from Pedidos";
    
    connection.query(sql, (err,results)=>{
        if (err) {
            console.error('Erro ao obter registros:', err.message);
            res.status(500).json({ error: 'Erro ao obter registros do banco de dados' });
        } else {
            res.status(200).json(results);
        }
    })
})


app.post("/pedidos", (req,res)=>{
    const {id_cliente, data_pedido, status} = req.body;
    const sql = "insert into pedidos (id_cliente,data_pedido,status) values(?,?,?)";
    connection.query(sql, [Number(id_cliente), data_pedido, status],(err,results)=>{
        if (err) {
            res.status(500).json({ error: 'Erro a criar produto' });
        } else {
            res.status(200).json("Produto criado");
        }
    })
})

app.put('/pedidos/:change/:id', (req,res)=>{
    const {change,id} = req.params;
    const valor = req.body[change];
    const sql = `update pedidos set ${change}=? where id=? `;
    connection.query(sql,[valor,Number(id)], (err,results)=>{
        if (err) {
            console.error('Erro ao obter registros:', err.message);
            res.status(500).json({ error: 'Erro ao atualizar registros do banco de dados' });
        } else {
            res.status(200).json({ message: 'Registro atualizado com sucesso' });
        }
    })
})

app.delete("/pedidos/:id", (req,res)=>{
    const id = req.params.id;
    const sql = "delete from pedidos where id = ?";
    connection.query(sql, [Number(id)],(err,results)=>{
        if (err) {
            res.status(500).json({ error: 'Erro ao deletar' });
        } else {
            res.status(200).json("Produto deletada");
        }
    })
})
}


//ItensPedido
{
app.get("/ItensPedido/:id_pedido", (req,res)=>{
    const sql = "select * from ItensPedido where id_pedido = ?";
    
    connection.query(sql, [Number(req.params.id_pedido)], (err,results)=>{
        if (err) {
            console.error('Erro ao obter registros:', err.message);
            res.status(500).json({ error: 'Erro ao obter registros do banco de dados' });
        } else {
            res.status(200).json(results);
        }
    })
})


app.post("/ItensPedido", (req,res)=>{
    const {id_pedido, id_produto, quantidade, preco_unitario} = req.body;
    const sql = "insert into ItensPedido (id_pedido,id_produto,quantidade,preco_unitario) values(?,?,?,?)";
    connection.query(sql, [Number(id_pedido), Number(id_produto), Number(quantidade), Number(preco_unitario)],(err,results)=>{
        if (err) {
            res.status(500).json({ error: 'Erro a criar produto' });
        } else {
            res.status(200).json("Produto criado");
        }
    })
})

app.put('/ItensPedido/:change/:id', (req,res)=>{
    const {change,id} = req.params;
    const valor = req.body[change];
    const sql = `update ItensPedido set ${change}=? where id=? `;
    connection.query(sql,[valor,Number(id)], (err,results)=>{
        if (err) {
            console.error('Erro ao obter registros:', err.message);
            res.status(500).json({ error: 'Erro ao atualizar registros do banco de dados' });
        } else {
            res.status(200).json({ message: 'Registro atualizado com sucesso' });
        }
    })
})

app.delete("/ItensPedido/:id", (req,res)=>{
    const id = req.params.id;
    const sql = "delete from ItensPedido where id = ?";
    connection.query(sql, [Number(id)],(err,results)=>{
        if (err) {
            res.status(500).json({ error: 'Erro ao deletar' });
        } else {
            res.status(200).json("Produto deletada");
        }
    })
})
}
//
app.listen(port, ()=>{
    console.log("Servidor rodando na porta:" + port);

});