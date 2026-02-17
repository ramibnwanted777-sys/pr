const techHistory = [
    {
        title: "The Dawn of Innovation",
        breadcrumb: "Foundation / Pre-Industrial",
        intro: "Human progress began millions of years ago, rooted in survival and adaptation.",
        subTitle: "Mastering the Elements",
        body: "Early humans transformed stones and sticks into tools for hunting and building. The discovery of fire provided warmth, protection, and cooked food, while the invention of the wheel revolutionized transportation.",
        extraTitle: "Expansion of Knowledge",
        extraBody: "Trade became sophisticated with the first scales, and knowledge was preserved through the development of papyrus and early writing systems."
    },
    {
        title: "The Industrial Revolution",
        breadcrumb: "Mechanical / Industrial Age",
        intro: "The transition from hand production to machines redefined the modern world.",
        subTitle: "Steam and Steel",
        body: "The steam engine powered trains and ships, moving goods across continents. Factories allowed for mass production, and the power grid eventually reached domestic homes.",
        extraTitle: "Communication Breakthroughs",
        extraBody: "The telegraph and telephone made long-distance interaction instant. Electric bulbs replaced oil lamps, illuminating cities through the night."
    },
    {
        title: "The Computer Era",
        breadcrumb: "Digital / Modern Era",
        intro: "Intelligence evolved as we moved from mechanical gears to electronic circuits.",
        subTitle: "The Silicon Revolution",
        body: "Computers shrunk from room-sized machines to desktop PCs. The birth of the Internet transformed the world into a global web of information.",
        extraTitle: "The Mobile Revolution",
        extraBody: "Smartphones merged the computer, phone, and camera into one device. Today, apps simplify education, shopping, and global remote work."
    }
];

let activeTab = 0;

function render() {
    const menu = document.getElementById('menu');
    const main = document.getElementById('content-area');
    const current = techHistory[activeTab];

    // Build Menu
    menu.innerHTML = techHistory.map((item, idx) => `
        <div class="nav-link ${idx === activeTab ? 'active' : ''}" onclick="changeTab(${idx})">
            ${item.title}
        </div>
    `).join('');

    // Build Content
    main.innerHTML = `
        <div style="color: var(--primary); font-size: 0.85rem; font-weight: 600; margin-bottom: 0.5rem;">${current.breadcrumb}</div>
        <h1>${current.title}</h1>
        <p style="font-weight: 600; color: var(--primary);">${current.intro}</p>
        <h2>${current.subTitle}</h2>
        <p>${current.body}</p>
        <div style="background: var(--primary-light); border-left: 5px solid var(--primary); padding: 1.5rem; border-radius: 0 8px 8px 0; margin: 2rem 0; font-style: italic;">
            <strong>Historical Insight:</strong> This period represents a critical junction in human evolution.
        </div>
        <h2>${current.extraTitle}</h2>
        <p>${current.extraBody}</p>
    `;
}

function changeTab(idx) {
    activeTab = idx;
    render();
    document.getElementById('sidebar').classList.remove('open'); // Close mobile menu
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Toggle Sidebar
document.getElementById('menuToggle').onclick = () => {
    document.getElementById('sidebar').classList.toggle('open');
};

// Initial Load
render();