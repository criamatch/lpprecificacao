/**
 * DIREÇÃO: Editorial de Contraste — preto e branco, tipografia de revista,
 * números como argumento e fotografias autorais como prova de processo.
 */
import {
  ArrowDownRight,
  ArrowUpRight,
  Calculator,
  Check,
  Clock3,
  FileSpreadsheet,
  MessageCircle,
  Rows3,
} from "lucide-react";

const whatsappNumber = "5515991774143";
const whatsappMessage =
  "Oi Amanda, quero saber quanto cobrar com a planilha de precificação.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const features = [
  {
    number: "01",
    icon: Calculator,
    title: "Calculadora",
    description:
      "Você coloca quanto quer faturar por mês e quantas horas quer trabalhar. Ela calcula seu valor/hora mínimo ideal. Simples assim.",
  },
  {
    number: "02",
    icon: Rows3,
    title: "Abas por serviço",
    description:
      "Social Media, Design e Copywriting. Cada uma com lista de tarefas, horas estimadas, valor do pacote e valor por hora. Você preenche, ela calcula.",
  },
  {
    number: "03",
    icon: Clock3,
    title: "Pausa incluída",
    description:
      "Registre início, pausa, retomada e fim. A planilha desconta o tempo parado e calcula suas horas reais — porque pensar na solução também é tempo seu.",
  },
  {
    number: "04",
    icon: FileSpreadsheet,
    title: "Resumo por cliente",
    description:
      "Tudo reunido automaticamente: horas por cliente, faturamento e o que seria pelo seu valor/hora fixo. Você enxerga se está valendo a pena de verdade.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function ArrowLink({ className = "" }: { className?: string }) {
  return (
    <a
      className={`cta-link ${className}`}
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
    >
      <span>Quero saber quanto cobrar</span>
      <ArrowUpRight aria-hidden="true" size={19} strokeWidth={2.2} />
    </a>
  );
}

export default function Home() {
  return (
    <main className="pricing-page">
      <a
        className="whatsapp-float"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Amanda pelo WhatsApp"
      >
        <MessageCircle size={22} />
      </a>

      <header className="site-header">
        <a href="#inicio" className="wordmark" aria-label="ORD, início">
          <span className="wordmark-mark" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>ORD.</span>
        </a>
        <div className="header-period">Semana do Cliente · 15—18 SET</div>
        <a href="#oferta" className="header-link">
          Acessar agora <ArrowDownRight size={15} />
        </a>
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-copy">
          <SectionLabel>Planilha de precificação · edição limitada</SectionLabel>
          <h1>
            Quanto custa
            <span>o seu trabalho</span>
            <em> / serviço?</em>
          </h1>
          <p className="hero-subtitle">Semana do Cliente · 15 a 18 de setembro.</p>
          <ArrowLink className="cta-inverted" />
          <p className="hero-note">Uma ferramenta para quem parou de aceitar o “quanto você cobra?” no escuro.</p>
        </div>

        <div className="hero-visual">
          <div className="date-stamp">
            <span>15</span>
            <b>—</b>
            <span>18</span>
            <small>SET</small>
          </div>
          <img
            src="/assets/amandateste2.png"
            alt="Amanda Tobias em seu ambiente de trabalho"
          />
          <p className="photo-credit">por Amanda Tobias</p>
        </div>
      </section>

      <section className="ticker" aria-label="Mensagem principal">
        <div>
          <span>O seu tempo tem valor.</span>
          <i>✦</i>
          <span>O seu tempo tem valor.</span>
          <i>✦</i>
          <span>O seu tempo tem valor.</span>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-aside">
          <SectionLabel>01 — O que é</SectionLabel>
          <p className="side-caption">Uma planilha feita para a vida real de quem vende serviço.</p>
        </div>
        <div className="intro-main">
          <p className="intro-lead">
            Uma planilha de precificação que eu criei pra mim. Que ficou só comigo por <strong>2 anos.</strong>
          </p>
          <p>
            Agora eu tô dividindo com você porque acredito que ela pode te ajudar a conquistar novos clientes sabendo quanto cobrar de verdade.
          </p>
          <div className="tool-note">
            <span>compatível com</span>
            <b>Excel</b>
            <i>+</i>
            <b>Google Sheets</b>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="story-image story-image-wide">
          <img
            src="/assets/IMG_3031.webp"
            alt="Amanda Tobias trabalhando durante um evento profissional"
          />
          <span className="image-index">02</span>
        </div>
        <div className="story-copy">
          <SectionLabel>02 — A história</SectionLabel>
          <h2>Não nasceu para vender.<br />Nasceu porque eu precisei.</h2>
          <p>
            Criei quando pensei em sair da V4 Company. Eu precisava saber quanto teria que ganhar de freela pra manter meu salário.
          </p>
          <p>
            Ela me ajudou a precificar quanto eu queria ganhar, quanto valia meu serviço e, principalmente, a minha hora.
          </p>
          <p className="story-signoff">Hoje tô entregando pra você.</p>
        </div>
      </section>

      <section className="features-section" id="por-dentro">
        <div className="features-heading">
          <SectionLabel>03 — Como funciona</SectionLabel>
          <h2>O que tem<br /><em>lá dentro.</em></h2>
          <p>Uma estrutura simples para que cada proposta faça sentido para você — e não só para o cliente.</p>
        </div>
        <div className="features-list">
          {features.map(({ number, icon: Icon, title, description }) => (
            <article className="feature-row" key={number}>
              <span className="feature-number">{number}</span>
              <div className="feature-icon"><Icon size={24} strokeWidth={1.6} /></div>
              <div className="feature-body">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <div className="feature-cells" aria-hidden="true">
                <i /><i /><i /><i /><i /><i />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-section">
        <div className="proof-copy">
          <SectionLabel>Para quem é</SectionLabel>
          <h2>
            Freelancer.<br />
            Social media.<br />
            Prestadora de serviço.<br />
            <em>Quem vende o próprio tempo.</em>
          </h2>
          <p>Para qualquer pessoa que ainda chuta o preço — e quer começar a cobrar com clareza.</p>
          <ArrowLink />
        </div>
        <div className="proof-gallery">
          <img
            className="gallery-main"
            src="/assets/amandatestejaqueta.jpeg"
            alt="Retrato de Amanda Tobias"
          />
          <img
            className="gallery-secondary"
            src="/assets/IMG_3024.JPG.webp"
            alt="Amanda Tobias participando de um painel profissional"
          />
          <div className="gallery-caption">Seu tempo não é um detalhe da proposta. É o produto.</div>
        </div>
      </section>

      <section className="offer-section" id="oferta">
        <div className="offer-topline">
          <SectionLabel>Semana do Cliente · disponível de 15 a 18 de setembro</SectionLabel>
          <span>Pagamento único</span>
        </div>
        <div className="offer-grid">
          <div className="offer-copy">
            <h2>Chega de chutar<br />o seu preço.</h2>
            <p>Você não precisa cobrar no escuro. Comece pelo número que sustenta o seu trabalho.</p>
          </div>
          <div className="price-panel">
            <div className="price-top"><span>Planilha de Precificação</span><span>ORD. 01</span></div>
            <div className="price-value"><small>R$</small>59<span>,90</span></div>
            <p>Pagamento único.</p>
            <ArrowLink className="cta-inverted full-cta" />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-rule" />
        <p>por Amanda Tobias <span>·</span> ORD <b>♥</b></p>
        <a href={whatsappLink} target="_blank" rel="noreferrer">Falar com Amanda <ArrowUpRight size={15} /></a>
      </footer>
    </main>
  );
}
