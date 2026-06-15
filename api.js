const API_URL = 'https://backend-pi-zzw9.onrender.com/api';

async function request(method, endpoint, body) {
  const opts = { method, headers: { 'Content-Type': 'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(API_URL + endpoint, opts);
  if (!res.ok) {
    const erro = await res.json().catch(() => ({ mensagem: 'Erro desconhecido' }));
    throw new Error(erro.erro || erro.mensagem || `Erro ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

const auth = {
  login: (email, senha) => request('POST', '/auth/login', { email, senha }),
};

const dashboard = {
  metricas: () => request('GET', '/dashboard'),
  logs:     (limite) => request('GET', `/dashboard/logs?limite=${limite || 50}`),
};

const alunos = {
  listar: ()           => request('GET', '/alunos'),
  buscar: (id)         => request('GET', `/alunos/${id}`),
  criar:  (dados)      => request('POST', '/alunos', dados),
  editar: (id, dados)  => request('PUT', `/alunos/${id}`, dados),
  excluir:(id)         => request('DELETE', `/alunos/${id}`),
};

const cursos = {
  listar:    ()            => request('GET', '/cursos'),
  buscar:    (id)          => request('GET', `/cursos/${id}`),
  criar:     (dados)       => request('POST', '/cursos', dados),
  editar:    (id, dados)   => request('PUT', `/cursos/${id}`, dados),
  excluir:   (id)          => request('DELETE', `/cursos/${id}`),
  progresso: (id, idAluno) => request('GET', `/cursos/${id}/progresso/${idAluno}`),
};

const categorias = {
  listar: () => request('GET', '/categorias'),
  popular: () => request('POST', '/categorias/popular'),
};

const solicitacoes = {
  listar:         (status)    => request('GET', `/solicitacoes${status ? '?status=' + status : ''}`),
  listarPorAluno: (idAluno)   => request('GET', `/solicitacoes/aluno/${idAluno}`),
  buscar:         (id)        => request('GET', `/solicitacoes/${id}`),
  criar:          (dados)     => request('POST', '/solicitacoes', dados),
  aprovar:        (id, dados) => request('PUT', `/solicitacoes/${id}/aprovar`, dados || {}),
  rejeitar:       (id, obs)   => request('PUT', `/solicitacoes/${id}/rejeitar`, { observacao: obs }),
};

const coordenadores = {
  criar:  (dados) => request('POST', '/coordenadores', dados),
  listar: ()      => request('GET', '/coordenadores'),
};
