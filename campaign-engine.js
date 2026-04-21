/**
 * Três Iniciados — Motor de Campanhas Globais
 * Automação de conversão com 12 dias de aquecimento + piloto automático
 */

const CampaignEngine = {
    CONFIG: {
        name: "tres_iniciados_campaign",
        warmupDays: 4,
        launchDays: 8,
        autoPilotAfterDays: 12,
        channels: ["instagram", "whatsapp", "telegram", "tiktok", "email"],
        languages: ["pt-BR", "en-US", "es-ES"],
        timezones: ["America/Sao_Paulo", "America/New_York", "Europe/Lisbon", "America/Mexico_City"],
        timezoneLabels: {"pt-BR": "Brasil", "en-US": "Global EN", "es-ES": "Latam ES"}
    },

    BOOKS: [
        {id:"feca", emoji:"🔥", title:"A Fé Sem Movimento é Morta", price:19.90, kiwify:"qC8YHzK", chapters:7},
        {id:"saude", emoji:"💎", title:"Rico de Saúde e de Amigo", price:19.90, kiwify:"xcL4QxC", chapters:8},
        {id:"caneta", emoji:"✍️", title:"O Dono da Caneta", price:24.90, kiwify:"D4NExoo", chapters:9},
        {id:"posto", emoji:"🎭", title:"A Vida Não é o Que Eu Posto", price:19.90, kiwify:"qC8YHzK", chapters:8},
        {id:"prosperar", emoji:"💰", title:"Prosperar Não é Pecado", price:24.90, kiwify:"xcL4QxC", chapters:9},
        {id:"obstinado", emoji:"⚡", title:"Obstinado", price:24.90, kiwify:"D4NExoo", chapters:10}
    ],

    // ===== CONTEÚDO GLOBAL POR IDIOMA =====
    CONTENT: {
        "pt-BR": {
            teasers: [
                {hook:"A fé sem movimento é morta. Você tá parado ou em movimento?", cta:"🔥 Responde aqui se quer saber a resposta"},
                {hook:"Djonga disse: 'Sou o dono da caneta que destrói impérios.' Você sabe usar SUA caneta?", cta:"✍️ Link na bio"},
                {hook:"Delacruz: 'Sou rico de saúde e de amigo — quase não falo de dinheiro.' E você?", cta:"💎 Comenta aqui"},
                {hook:"Ret: 'Minha vida não é o que eu posto.' Sua vida REAL é o que?", cta:"🎭 Me manda DM"},
                {hook:"Djonga: 'Quem te botou nessa cabeça que é pecado prosperar?' Desafio pra você:", cta:"💰 Clica no link da bio"},
                {hook:"Obstinado: a meta é vencer. Você é obstinado ou só teimoso?", cta:"⚡ Responde nos comentários"}
            ],
            email_subjects: [
                "Você tem mérito pra esse conhecimento?",
                "A fé sem movimento é morta — e a sua?",
                "6 ebooks que os poetas brasileiros não queriam que você lesse",
                "Últimas vagas — Três Iniciados",
                "Prosperar não é pecado. Mas você acredita nisso?",
                "O teste de mérito que filtra 80% das pessoas"
            ],
            email_bodies: [
                "Você já parou pra pensar por que uns conseguem e outros não? Não é talento. Não é sorte. É MOVIMENTO. Os Três Iniciados reuniram 6 ebooks com a sabedoria dos maiores poetas-rappers do Brasil — e só vendem pra quem tem mérito. Responde o teste na bio. Se passar, o conhecimento é seu.",
                "Delacruz disse: 'Sou rico de saúde e de amigo.' Ret disse: 'Minha vida não é o que eu posto.' Djonga disse: 'Eu sou o dono da caneta que destrói impérios.' Essas não são só letras — são lições de vida. 6 ebooks. Conhecimento real. Pra quem merece. Link na bio.",
                "Você acordou hoje e fez o quê? Postou story? Visualizou story dos outros? Ou fez algo que REALMENTE muda sua vida? Os Três Iniciados criaram 6 ebooks pra quem tá cansado de performance e quer RESULTADO. Mas atenção: só vende pra quem passa no teste de mérito."
            ],
            whatsapp_status: [
                "🔥 'A fé sem movimento é morta.' Se você entendeu isso, me chama no PV.",
                "💎 Quase não falo de dinheiro — tenho mais do que preciso. Quero paz no coração. eBook disponível na bio.",
                "✍️ Quem controla a narrativa, controla a realidade. Quer aprender? Link na bio.",
                "⚡ 'Obstinado, a meta é vencer.' Se você é obstinado de verdade, clica no link da bio.",
                "💰 'Prosperar não é pecado.' Mas quem te ensinou que é? Desafio na bio.",
                "🎭 Sua vida é o que você posta ou o que você VIVE? Pensa nisso. Link na bio."
            ]
        },
        "en-US": {
            teasers: [
                {hook:"Faith without movement is dead. Are you standing still or moving forward?", cta:"🔥 Drop a 🔥 if you want the answer"},
                {hook:"'I own the pen that destroys empires.' Do you know how to use YOUR pen?", cta:"✍️ Link in bio"},
                {hook:"'I'm rich in health and friends — I barely talk about money.' Are you?", cta:"💎 Comment below"},
                {hook:"'My life isn't what I post.' What's your REAL life like?", cta:"🎭 DM me"},
                {hook:"'Who told you prospering is a sin?' Challenge for you:", cta:"💰 Click the link in bio"},
                {hook:"'Obsessed — the goal is to win. Humility makes you a king.' Are you obsessed or just stubborn?", cta:"⚡ Answer in comments"}
            ],
            email_subjects: [
                "Do you have the merit for this knowledge?",
                "Faith without movement is dead — what about yours?",
                "6 ebooks the Brazilian poets didn't want you to read",
                "Last spots — Three Initiates",
                "Prosperity isn't a sin. But do you believe that?",
                "The merit test that filters 80% of people"
            ]
        },
        "es-ES": {
            teasers: [
                {hook:"La fe sin movimiento está muerta. ¿Estás parado o en movimiento?", cta:"🔥 Comenta 🔥 si quieres la respuesta"},
                {hook:"'Soy el dueño de la pluma que destruye imperios.' ¿Sabes usar TU pluma?", cta:"✍️ Link en bio"},
                {hook:"'Soy rico en salud y amigos — casi no hablo de dinero.' ¿Y tú?", cta:"💎 Comenta aquí"},
                {hook:"'Mi vida no es lo que publico.' ¿Tu vida REAL es qué?", cta:"🎭 Escríbeme DM"},
                {hook:"'¿Quién te metió en la cabeza que prosperar es pecado?' Desafío para ti:", cta:"💰 Click en link de bio"},
                {hook:"'Obstinado, la meta es vencer.' ¿Eres obstinado o solo terco?", cta:"⚡ Responde en comentarios"}
            ],
            email_subjects: [
                "¿Tienes el mérito para este conocimiento?",
                "La fe sin movimiento está muerta — ¿y la tuya?",
                "6 ebooks que los poetas brasileños no querían que leyeras",
                "Últimos lugares — Tres Iniciados",
                "Prosperar no es pecado. ¿Pero crees eso?",
                "El test de mérito que filtra al 80% de personas"
            ]
        }
    },

    // ===== PROJEÇÕES =====
    PROJECTIONS: {
        conservative: {leads:50, conversion:0.20, ticket:22.10, result:221},
        moderate: {leads:100, conversion:0.25, ticket:23.50, result:588},
        optimistic: {leads:200, conversion:0.30, ticket:24.90, result:1494}
    },

    // ===== CALENDÁRIO 12 DIAS =====
    CALENDAR: {
        1: {phase:"aquecimento", actions:["postar_3_teasers","abrir_lista_espera","enviar_status_whatsapp"], goal:"50 leads lista espera"},
        2: {phase:"aquecimento", actions:["reel_curto_30s","whatsapp_status","email_lista_espera"], goal:"75 leads lista espera"},
        3: {phase:"aquecimento", actions:["carrossel_5_licoes","msg_personalizada_leads","teaser_epilogo"], goal:"100 leads lista espera"},
        4: {phase:"aquecimento", actions:["audio_teste_merito","whatsapp_broadcast","countdown_stories"], goal:"120 leads lista espera"},
        5: {phase:"lancamento", actions:["abrir_vendas_lista","desconto_40pct","primeiros_10_bonus"], goal:"R$200 vendas"},
        6: {phase:"lancamento", actions:["coletar_depoimentos","repost_prova_social","reel_sumario"], goal:"R$400 vendas acumuladas"},
        7: {phase:"lancamento", actions:["abrir_publico_geral","preco_normal","carrossel_antes_depois"], goal:"R$600 vendas acumuladas"},
        8: {phase:"lancamento", actions:["oferta_pacote_completo","countdown_48h","whatsapp_broadcast"], goal:"R$850 vendas acumuladas"},
        9: {phase:"aceleracao", actions:["depoimento_video","prova_social_pesada","ultimas_vagas_pacote"], goal:"R$1000 vendas acumuladas"},
        10: {phase:"aceleracao", actions:["live_15min","venda_indireta","autoridade"], goal:"R$1200 vendas acumuladas"},
        11: {phase:"aceleracao", actions:["ultimo_dia_pacote","lembrete_leads","urgencia_real"], goal:"R$1400 vendas acumuladas"},
        12: {phase:"autopilot", actions:["contar_resultados","reajustar_precos","abrir_novos_canais","ativar_automacao"], goal:"R$1500+ vendas totais"}
    },

    // ===== AUTO-PILOT PÓS DIA 12 =====
    AUTOPILOT: {
        daily: {
            instagram: {posts:1, stories:3, reels:0},
            whatsapp: {status:2, broadcast:1},
            telegram: {post:1},
            email: {sequence:true, frequency:"3x/semana"}
        },
        weekly: {
            reel: 2,
            carrossel: 1,
            live: 1,
            email_drip: 3
        },
        conversion_funnels: {
            cold: {channel:"instagram", cta:"teste_merito", conversion:"lista_espera"},
            warm: {channel:"whatsapp", cta:"desconto_exclusivo", conversion:"compra"},
            hot: {channel:"email", cta:"pacote_completo", conversion:"upgrade"},
            advocate: {channel:"telegram", cta:"programa_afiliados", conversion:"indicação"}
        },
        metrics: {
            daily_check: ["vendas","leads","conversao","ticket_medio"],
            weekly_review: ["roi_canal","cac","ltv","churn"],
            monthly_pivot: ["melhor_canal","melhor_ebook","melhor_preco","melhor_copy"]
        }
    },

    // ===== FUNÇÕES =====
    init() {
        this.state = JSON.parse(localStorage.getItem(this.CONFIG.name) || '{}');
        if (!this.state.startDate) {
            this.state = {
                startDate: new Date().toISOString(),
                currentDay: 1,
                totalRevenue: 0,
                totalLeads: 0,
                conversions: 0,
                autoPilotActive: false,
                language: 'pt-BR',
                logs: []
            };
            this.save();
        }
        console.log('🔥 Três Iniciados Campaign Engine iniciado');
        return this;
    },

    save() {
        localStorage.setItem(this.CONFIG.name, JSON.stringify(this.state));
    },

    getDay() {
        const start = new Date(this.state.startDate);
        const now = new Date();
        return Math.floor((now - start) / 86400000) + 1;
    },

    getTodayActions() {
        const day = Math.min(this.getDay(), 12);
        return this.CALENDAR[day] || this.CALENDAR[12];
    },

    getContent(lang = 'pt-BR') {
        return this.CONTENT[lang] || this.CONTENT['pt-BR'];
    },

    getRandomTeaser(lang = 'pt-BR') {
        const teasers = this.getContent(lang).teasers;
        return teasers[Math.floor(Math.random() * teasers.length)];
    },

    getRandomEmailSubject(lang = 'pt-BR') {
        const subjects = this.getContent(lang).email_subjects;
        return subjects[Math.floor(Math.random() * subjects.length)];
    },

    getRandomWhatsAppStatus(lang = 'pt-BR') {
        const statuses = this.getContent(lang).whatsapp_status;
        return statuses[Math.floor(Math.random() * statuses.length)];
    },

    getProjection(scenario = 'moderate') {
        return this.PROJECTIONS[scenario];
    },

    shouldAutoPilot() {
        return this.getDay() > this.CONFIG.autoPilotAfterDays || this.state.autoPilotActive;
    },

    activateAutoPilot() {
        this.state.autoPilotActive = true;
        this.save();
        return this.AUTOPILOT;
    },

    getAutoPilotPlan() {
        return this.AUTOPILOT;
    },

    log(action, detail) {
        this.state.logs.push({
            timestamp: new Date().toISOString(),
            day: this.getDay(),
            action,
            detail
        });
        this.save();
    },

    getStats() {
        const day = this.getDay();
        const proj = this.getProjection('moderate');
        const expectedRevenue = Math.min(day * (proj.result / 12), proj.result);
        return {
            day,
            phase: day <= 4 ? 'Aquecimento' : day <= 12 ? 'Lançamento' : 'Piloto Automático',
            totalRevenue: this.state.totalRevenue,
            totalLeads: this.state.totalLeads,
            conversions: this.state.conversions,
            conversionRate: this.state.totalLeads > 0 ? (this.state.conversions / this.state.totalLeads * 100).toFixed(1) + '%' : '0%',
            autoPilot: this.state.autoPilotActive,
            expectedRevenue: 'R$ ' + expectedRevenue.toFixed(2).replace('.', ','),
            nextAction: this.getTodayActions()
        };
    },

    getStatus() {
        const stats = this.getStats();
        let output = `═══ TRÊS INICIADOS — STATUS ═══\n`;
        output += `📅 Dia: ${stats.day}/12\n`;
        output += `📊 Fase: ${stats.phase}\n`;
        output += `💰 Faturamento: R$ ${stats.totalRevenue.toFixed(2).replace('.', ',')}\n`;
        output += `👥 Leads: ${stats.totalLeads}\n`;
        output += `🎯 Conversões: ${stats.conversions} (${stats.conversionRate})\n`;
        output += `🤖 Auto-piloto: ${stats.autoPilot ? 'ATIVO' : 'INATIVO'}\n`;
        output += `📈 Esperado (dia ${stats.day}): ${stats.expectedRevenue}\n`;
        output += `\n📋 Próximas ações:\n`;
        stats.nextAction.actions.forEach(a => {
            output += `  • ${a.replace(/_/g, ' ')}\n`;
        });
        return output;
    }
};

// Auto-init
window.addEventListener('load', () => {
    setTimeout(() => {
        window.CampaignEngine = CampaignEngine.init();
        console.log('📊 Dia atual:', CampaignEngine.getDay());
        console.log('📋 Próximas ações:', CampaignEngine.getTodayActions().actions);
    }, 4000);
});
