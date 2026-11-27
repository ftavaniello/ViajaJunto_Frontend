# Planejamento de telas — ViajaJunto

Este documento reúne as decisões iniciais de interface. É uma referência para discussão e pode evoluir com o grupo. Antes de implementar, confira os campos e as regras no Swagger do backend.

## Integração com dados reais

Na implementação das funcionalidades, todas as chamadas devem usar os endpoints reais do backend e a aplicação não deve apresentar dados fictícios como se fossem reais. Quando uma API estiver indisponível ou uma funcionalidade não tiver endpoint, apresentar um estado claro e registrar a dependência, sem substituir a resposta por dados de exemplo. Componentes visuais isolados podem ser desenvolvidos antes da integração, mas isso não torna a funcionalidade concluída.

## Direção visual e navegação

Interface clean, inspirada nos princípios do Material Design, com azul como cor principal e amarelo em destaques. Usar hierarquia clara, superfícies claras, bordas discretas, poucas sombras e textos objetivos. Os tons e a tipografia ainda serão definidos. A skill em `.agents/skills/viajajunto-design/SKILL.md` reúne as orientações compartilhadas.

O cabeçalho oferece Explorar a todos. Para visitantes, apresenta Entrar e Criar conta. Após login, apresenta Minhas viagens, notificações e conta. A navegação deve adaptar-se ao celular.

## Acesso

### Cadastro e login

Telas simples com formulários claros, validação e mensagens de erro. Cadastro: nome, e-mail e senha; login: e-mail e senha, com opção de mostrar a senha. Cada tela oferece acesso à outra. Após autenticação, direcionar para Minhas viagens; o retorno a uma ação interrompida ainda precisa ser detalhado.

API: `POST /auth/register` e `POST /auth/login`. A recuperação de senha está nos requisitos, mas não foi encontrada na API analisada. Login Google depende de configuração no servidor e fica para uma etapa posterior.

## Descoberta

### Página inicial

Apresentação breve do produto e acesso a Explorar, cadastro e login. A possibilidade de destacar destinos na própria página ainda está em discussão. API disponível: `GET /destinations/top` e `GET /tourist-spots/top`.

### Explorar

Exibir destinos em cards maiores, com foto quando disponível, nome e país. Uma busca permite encontrar tanto destinos quanto pontos turísticos, apresentando os resultados agrupados por tipo. O destino abre sua própria página; o ponto abre seus detalhes diretamente. Prever carregamento, erro e busca sem resultados. Filtros específicos ainda precisam ser detalhados.

API: `GET /destinations?q=` e `GET /tourist-spots?q=`. A associação de um ponto turístico a um destino é opcional na API: pontos sem essa associação não aparecerão na página de um destino.

### Detalhes do destino

Mostrar nome, país, categoria e foto quando disponíveis, descrição e localização, pontos turísticos relacionados e avaliações. A página é pública. Oferecer acesso aos detalhes de cada ponto e, quando necessário, à lista completa de pontos ou avaliações. Para avaliar um destino, o backend exige uma viagem concluída que passou por ele; comunicar essa condição.

API: `GET /destinations/:id/details`, `GET /tourist-spots?destinationId=`, `GET /destination-reviews?destinationId=` e `POST /destination-reviews`.

### Detalhes do ponto turístico

Mostrar nome, foto, categoria, nota, descrição, endereço e localização quando disponíveis; listar avaliações e oferecer avaliação para usuários autorizados. O backend permite uma avaliação por usuário e ponto e não permite avaliar o próprio ponto cadastrado. A ideia de adicionar o ponto diretamente a um roteiro deve ser detalhada: será necessário escolher uma viagem e um destino dessa viagem.

API: `GET /tourist-spots/:id/details`, `GET /reviews?touristSpotId=` e `POST /reviews`.

## Viagens

### Minhas viagens

Mostrar viagens próprias e compartilhadas em cards com nome, período, status e papel do usuário. Usar grade no desktop e uma coluna no celular. Uma imagem é opcional e depende dos dados disponíveis. Oferecer filtros por status, Criar viagem e Entrar com código. A seleção de um card abre uma página própria de detalhes.

Prever carregamento, erro recuperável, ausência de viagens e filtro sem resultados. API: `GET /trips`, `POST /trips` e `POST /trips/join`.

Criar e editar viagem em diálogo central, inicialmente com nome, descrição e datas. A moeda tem BRL como padrão no backend. A entrada por código usa um diálogo menor. Revisar obrigatoriedade e validações conforme os DTOs da API.

### Detalhes da viagem

Mostrar nome, datas, status e papel da pessoa, com retorno à lista. Dividir em abas Roteiro, Orçamento e Participantes. Apresentar ações conforme as permissões de criador, editor e visualizador. API: `GET`, `PATCH` e `DELETE /trips/:id`.

#### Roteiro

Listar destinos na ordem da viagem e, dentro deles, atividades em ordem cronológica. Mostrar datas, horário, status e custo previsto quando disponíveis. Pessoas autorizadas podem adicionar, editar, remover e reordenar destinos e gerenciar atividades; visualizadores apenas consultam.

Usar diálogos centrais para adicionar e editar. Ao adicionar destino, pesquisar o catálogo e informar datas e descrição quando aplicável. Atividades vinculam-se a pontos turísticos do catálogo e podem ter data e hora, duração, custo previsto e status. Prever estados vazios para viagem sem destinos e destino sem atividades.

API: `/trip-destinations`, `/trip-activities` e `PUT /trips/:tripId/destinations/order`.

#### Orçamento

Apresentar orçamento total, soma planejada e saldo, com uma barra de progresso geral e indicação textual quando o planejamento ultrapassar o limite. Mostrar custos por categoria em lista discreta. Esclarecer que são custos previstos; se não houver custos, orientar a pessoa a adicioná-los às atividades. Pessoas autorizadas definem ou editam o limite em diálogo central.

API: `/budgets` e `GET /trips/:id/budget/summary`. O frontend pode calcular o percentual a partir dos valores retornados. Nomes de categorias dependem da API.

#### Participantes

Lista com nome, iniciais e papel. O criador pode alterar a permissão ou remover membros e abrir um diálogo para copiar o código de convite. A pessoa convidada usa Entrar com código em Minhas viagens; no backend atual, entra como visualizadora e o criador pode alterar seu papel. Editores e visualizadores consultam a lista.

API: `/trip-members`, `GET /trips/:id/invite-code` e `POST /trips/join`.

## Conta e notificações

Notificações abrem em painel no cabeçalho, com recentes, indicação de não lidas e ação para marcar todas como lidas. No celular, o painel pode ocupar mais espaço. API: `GET /notifications`, `GET /notifications/unread-count`, `PATCH /notifications/:id/read` e `PATCH /notifications/read-all`.

Perfil terá Minha conta (nome, e-mail e edição) e Países visitados (mapa acompanhado de lista acessível). API: `GET /auth/me`, `PATCH /users/:id` e `GET /users/me/visited-countries`. O mapa requer biblioteca no frontend. A opção de excluir conta deve ficar separada e explicar as restrições da API; confirmar sua prioridade com o grupo.

## Componentes compartilhados candidatos

Cabeçalho e navegação; botões e campos de formulário; diálogos; cards de viagem, destino e ponto; filtros e busca; abas; indicadores de status e papéis; listas e avaliações; estados de carregamento, vazio, erro e acesso negado. Criar e extrair componentes conforme as telas forem desenvolvidas, sem antecipar abstrações desnecessárias.

## Questões para o grupo

- Confirmar se a página inicial deve apresentar destinos em destaque e definir seu conteúdo.
- Detalhar filtros, formulário de avaliações e fluxo de adicionar ponto ao roteiro.
- Alinhar com o backend recuperação de senha e pontos turísticos sem destino associado.
- Decidir prioridade de moderação, exclusão de conta e recursos de despesas disponíveis na API. Pagamentos, reservas, chat e divisão de custos constam como fora do escopo no documento de requisitos original; a existência de rotas adicionais não altera o escopo por si só.
- Escolher tons finais de azul e amarelo, tipografia e biblioteca de mapas; verificar contraste e direitos das fontes antes de uso.
