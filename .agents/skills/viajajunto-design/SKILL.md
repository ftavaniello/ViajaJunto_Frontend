---
name: viajajunto-design
description: Planejar, criar ou revisar interfaces do frontend ViajaJunto, mantendo uma experiência coerente para planejamento colaborativo de viagens.
---

# Design do ViajaJunto

Use esta skill ao planejar ou alterar telas e componentes do frontend. Trate as decisões abaixo como ponto de partida, sujeito à evolução com o grupo; instruções e decisões mais recentes do projeto prevalecem.

## Direção

- Priorize tarefas reais de viagem e conteúdo específico, com títulos e ações diretos em português brasileiro. Evite slogans genéricos, indicadores fictícios e decoração que não ajude na tarefa.
- Inspire-se nos princípios do Material Design do Google para hierarquia, navegação, formulários e estados, adaptando-os à identidade do ViajaJunto. Isso não exige uma biblioteca ou a reprodução literal de um produto do Google.
- Organize a interface com hierarquia clara, espaços consistentes e componentes reutilizáveis. Prefira superfícies claras, texto escuro, bordas discretas e poucas sombras; use listas e divisórias quando ajudarem a organizar o conteúdo.
- Use cor, ícones e fotografias quando ajudarem a reconhecer informações ou orientar ações. Prefira imagens de destinos relevantes e acompanhe os ícones das ações principais com texto. Não imponha o layout do protótipo anterior.
- Use azul como cor principal para transmitir tranquilidade e explore amarelo como destaque associado a alegria. Defina e valide os tons ao desenvolver o sistema visual; não herde automaticamente o laranja do estudo anterior. Garanta contraste legível também nos elementos amarelos.
- Inter é uma possível referência tipográfica, ainda sujeita à decisão do grupo. Não distribua nem incorpore a fonte Futurist sem esclarecer seus direitos de uso.
- Adapte o layout e a navegação ao espaço disponível em celular e desktop; use abas para organizar seções relacionadas quando fizer sentido. Inclua rótulos, foco visível, navegação por teclado, contraste adequado e mensagens de estado compreensíveis.

## Planejamento e implementação

- Antes de desenhar uma tela, identifique seu objetivo, público, conteúdo, ações, navegação e estados de carregamento, vazio, erro, sucesso e acesso negado quando aplicáveis. Ofereça uma ação de recuperação em erros quando possível.
- Diferencie o que o protótipo demonstra do que existe na API. Consulte a documentação atual do backend para campos, permissões e respostas; registre lacunas em vez de inventar comportamentos.
- Considere os papéis de criador, editor e visualizador nas telas de viagem. Não adicione funcionalidades fora do escopo acordado apenas por existirem no backend.
- Ao implementar, siga as convenções existentes de Next.js e os componentes e tokens já acordados. Se ainda não houver uma decisão visual, proponha uma solução coerente e registre a escolha para revisão do grupo.
- Revise a interface em tamanhos de tela relevantes e relate somente verificações realmente executadas.
