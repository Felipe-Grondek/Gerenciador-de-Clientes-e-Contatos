# Typescript

# Instruções de uso:

1. Após clonar o repositório, abra um console na pasta server e outro na pasta client

2. Instale as dependencias em ambos os projetos:
```bash
npm install
```

3. Crie um arquivo `.env` e preencha as variáveis de ambiente do server seguindo o exemplo de `.env.example`:

####   SECRET_KEY= " Secret key da aplicação "
####   DATABASE_URL= "Url com as informações do seu banco de dados"

4. Rode as migrações para inserir as models no banco de dados:
```
npm run prisma
```

5. Rode as duas aplicação para visualizar se ocorreu tudo certo:

```bash
npm run dev
```
