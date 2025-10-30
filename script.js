// ===============================
// ナビゲーションメニューの制御
// ===============================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// ハンバーガーメニューのトグル
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// メニューリンクをクリックしたらメニューを閉じる
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===============================
// スクロール時のナビゲーション効果
// ===============================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===============================
// スムーススクロール
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===============================
// スクロールアニメーション
// ===============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// アニメーション対象の要素を監視
const animatedElements = document.querySelectorAll('.service-card, .stat-item, .achievement-item, .profile-story');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===============================
// Googleフォームボタン
// ===============================
// Googleフォームは外部リンクで開くため、特別な処理は不要

// ===============================
// パララックス効果
// ===============================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===============================
// カウントアップアニメーション（統計数値用）
// ===============================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// 統計セクションが表示されたらカウントアップを開始
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-item h3');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('100')) {
                    stat.textContent = '0+';
                    animateCounter(stat, 100);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// ===============================
// ページロード時のアニメーション
// ===============================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// 初期状態
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// ===============================
// サービスカードのホバーエフェクト
// ===============================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===============================
// テキストタイピング効果（オプション）
// ===============================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ===============================
// スクロール進捗バー
// ===============================
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(to right, #1a1a1a, #666);
    z-index: 9999;
    transition: width 0.2s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// ===============================
// 画像の遅延読み込み（将来の画像追加用）
// ===============================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===============================
// マウスカーソル追従エフェクト
// ===============================
const cursor = document.createElement('div');
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid #1a1a1a;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease, opacity 0.2s ease;
    opacity: 0;
`;
document.body.appendChild(cursor);

const cursorDot = document.createElement('div');
cursorDot.style.cssText = `
    position: fixed;
    width: 6px;
    height: 6px;
    background: #1a1a1a;
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    transition: transform 0.1s ease;
    opacity: 0;
`;
document.body.appendChild(cursorDot);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.opacity = '1';
    cursorDot.style.opacity = '1';
    cursorDot.style.left = mouseX - 3 + 'px';
    cursorDot.style.top = mouseY - 3 + 'px';
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor.style.left = cursorX - 10 + 'px';
    cursor.style.top = cursorY - 10 + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

// ホバー時のカーソル拡大
const hoverElements = document.querySelectorAll('a, button, .service-card, .stat-item');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.borderColor = '#666';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = '#1a1a1a';
    });
});

// ===============================
// セクションごとの視差効果
// ===============================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const scrollPercent = 1 - (rect.top / window.innerHeight);

        if (scrollPercent > 0 && scrollPercent < 1) {
            section.style.transform = `translateY(${scrollPercent * -20}px)`;
        }
    });
});

// ===============================
// 手書きアニメーション効果
// ===============================
const addHandwritingEffect = () => {
    const handwritingElements = document.querySelectorAll('.handwriting-animation');

    handwritingElements.forEach((element, index) => {
        const text = element.textContent;
        element.style.opacity = '0';
        element.textContent = '';

        setTimeout(() => {
            element.style.opacity = '1';
            let currentIndex = 0;

            const writeInterval = setInterval(() => {
                if (currentIndex < text.length) {
                    element.textContent += text[currentIndex];
                    currentIndex++;
                } else {
                    clearInterval(writeInterval);
                }
            }, 80); // 80msごとに1文字表示
        }, index * 1200 + 800); // 各要素を順番に表示（遅延時間を調整）
    });
};

// ページロード時に実行
window.addEventListener('load', () => {
    addHandwritingEffect();
});

// ===============================
// テキストのシャインエフェクト
// ===============================
const addShineEffect = () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // 手書きアニメーション完了後にシャインを開始
        setTimeout(() => {
            setInterval(() => {
                heroTitle.style.textShadow = '0 0 10px rgba(26, 26, 26, 0.3)';
                setTimeout(() => {
                    heroTitle.style.textShadow = '0 0 20px rgba(26, 26, 26, 0.5)';
                }, 500);
                setTimeout(() => {
                    heroTitle.style.textShadow = 'none';
                }, 1000);
            }, 5000);
        }, 5000); // 手書き完了まで待つ
    }
};
addShineEffect();

// ===============================
// スクロール方向の検知とアニメーション
// ===============================
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
        // 下スクロール
        document.body.classList.add('scrolling-down');
        document.body.classList.remove('scrolling-up');
    } else {
        // 上スクロール
        document.body.classList.add('scrolling-up');
        document.body.classList.remove('scrolling-down');
    }

    lastScrollTop = st <= 0 ? 0 : st;
});

// ===============================
// ランダムな浮遊アニメーション
// ===============================
const floatingElements = document.querySelectorAll('.service-number');
floatingElements.forEach((el, index) => {
    const randomDelay = Math.random() * 2;
    const randomDuration = 3 + Math.random() * 2;
    el.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
});

// フローティングアニメーション用のスタイルを動的に追加
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

console.log('Kaleidoscope&K website loaded successfully! ✨');
