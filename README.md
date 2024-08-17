<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 36 - Imersão JavaScript | Semana 07 | 2024 | Professora Jô Corrêa

### Quem sou eu
Eu sou mãe da Alice, Botafoguense (eu acredito sempre), consultora de desenvolvimento na Thoughtworks, jogadora de beach tennis e marceneira nas horas vagas! Fui aluna da turma 06 da {Reprograma}, já fui monitora, professora, Bootcamp Tech Lead, e tô voltando agora (a mãe tá on).

- 💌 Email: joseline.correa@gmail.com
- 🐙 Github:[/JossCorrea](https://github.com/JossCorrea)

### Objetivos 🎯
- Aplicar os conceitos de Programação Orientada a Objetos (POO) na prática.
- Desenvolver APIs RESTful com NestJS utilizando o padrão Hexagonal.
- Implementar estratégias de design de código limpo e eficiente.
- Aplicar estratégias de testes, incluindo TDD, testes unitários e testes de ponta a ponta.
- Bonus: Integrar ferramentas de inteligência artificial para melhorar o processo de deenvolvimento.


# Conteúdo
- Apresentação do Projeto Guiado I
- Etapa pré-código 
  - Requisitos, regras de negócio e casos de uso
  - Entendimento das nossas classes
  - Rotas da nossa API Rest
- Mão na massa!


## Projeto guiado I   

<h2 align=center> Sistema de Gestão das Oficinas de Cultura </h2>

> 💡 As Oficinas Culturais são espaços mantidos pela Secretaria de Cultura do Estado e dedicados à promoção e à formação cultural. Elas oferecem uma variedade de atividades, incluindo cursos, workshops, palestras, exposições, apresentações artísticas, residências artísticas, entre outros. O objetivo principal das Oficinas Culturais é democratizar o acesso à cultura, fomentar o desenvolvimento artístico e cultural das comunidades locais e promover a troca de conhecimento entre artistas, produtores culturais e a população em geral.

Por problemas de gestão a Prefeitura de São Piraporinha do Sul decidiu fechar as Oficinas de Cultura, eles alegavam que tinham um sistema mas que ele estava todo por papel e que seria melhor fechar as Oficinas de Cultura do que criar um sistema digital. 
Sabendo disso a comunidade da {Reprograma} decidiu desenvolver o sistema de gestão das aulas das Oficinas de Cultura.

### Serviços que o sistema de gestão das Oficinas de Cultura deseja ter:
- Cadastro de Alunos e Professores: Registro de novos alunos e professores na plataforma.
- Matrícula em Cursos: Inscrição de alunos em cursos oferecidos pelas Oficinas de Cultura.
- Gestão de Cursos: Criação e edição de cursos, com detalhes como título e descrição.
- Registro de Presença: Marcação da presença dos alunos nas aulas dos cursos.


### Instruções de implementação:
- Criar classes separadas para Aluno, Professor e Curso, incluindo os atributos mencionados no diagrama.
- Implementar métodos nas classes para registrar alunos e professores, matricular alunos em cursos, gerenciar cursos e registrar presença.
- Organizar a estrutura do projeto de forma apropriada, seguindo as melhores práticas para uma API RESTful.
- Aplicar a arquitetura Hexagonal
- Aplicar os princípios de design de código, como SOLID, DRY e KISS.
- Implementar padrões de design, como Factory e Observer.
- Escrever testes unitários básicos para garantir a funcionalidade do sistema.

### Diagrama de classes:

```lua
+-------------------+
|       Pessoa      |
+-------------------+
| - id: string      |
| - nome: string    |
| - endereco: string|
| - telefone: string|
+-------------------+
        ^
        |
+-------+-------+
|               |
|    Professor  |
+---------------+
| - disciplinas: string[] |
+---------------+

+-----------------+
|      Aluno      |
+-----------------+
| - cursos: Curso[] |
+-----------------+
 
+----------------------+
|        Curso         |
+----------------------+
| - id: string         |
| - titulo: string     |
| - descricao: string  |
| - professores: Professor[] |
| - alunos: Aluno[]    |
+----------------------+
```
Exercício 1: Refinamento para entendimento dos requisitos, regras de negócio e casos de uso

Exercício 2: Implementação das classes do nosso domínio

Exercício 3: Definição das rotas que serão expostas pela nossa API

Exercício 4: Codemos!!!

***
### Exercícios 
* [Exercicio para sala](/exercicios/para-sala/)
* [Exercicio para casa](/exercicios/para-casa/)

### Material da aula 
* [Material](/material)

### Links Úteis
* [Artigo comparativos sobre algumas arquiteturas] (https://medium.com/@dannevesdantas/ddd-arquitetura-em-camadas-n-layer-e-n-tier-hexagonal-e-ports-and-adapters-onion-e-clean-28cd7f910b3d)


<p align="center">
Desenvolvido com :purple_heart:  
</p>

