# Projeto a ser desenvolvido

GymPass style app
Obtendo acesso à academias associadas ao planos para praticar exercícios físicos

## RFs (Requisitos funcionais)

São as funcionalidades da aplicação.

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter um perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

São caminhos que cada requisito pode tomar. Uma regra de negócio sempre vai estar associada a um requisito funcional.

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer dois check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto 100 metros da academia;
- [ ] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não funcionais)

São requisitos que são muito mais técnicos (não partem do cliente) do que a nível de funcionalidades.

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT(JSON Web Token);

## Sobre .npmrc

A opção save-exact no arquivo .npmrc: permite fixar as versões exatas das dependências instaladas em um projeto. Isso garante a estabilidade e consistência do ambiente de desenvolvimento e produção, prevenindo problemas de compatibilidade e incompatibilidade entre as versões das dependências.
Além disso, esta configuração ajuda a evitar problemas de segurança, pois impede a instalação de versões vulneráveis das dependências.

Uma recomendação é usar bots como o Renovate (github) para ajudar na automação de atualização de dependências. Quando há uma atualização o bot baixa o projeto, roda os testes automatizados, garante a qualidade e envia um Pull Request com a nova alteração de versão da dependência.
