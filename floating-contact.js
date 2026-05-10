/* ============================================================
   floating-contact.js — Zalo + KakaoTalk floating buttons
   Đặt file này vào thư mục gốc website (cùng cấp với index.html)
   Gọi bằng: <script src="floating-contact.js"></script>
   ============================================================ */

/* ====== CẤU HÌNH ====== */
var FC_ZALO_PHONE  = '0986627194'; 
var FC_KAKAO_PAGE  = 'kakao.html';        /* Trang QR KakaoTalk */
/* ====================== */

(function () {
  /* ---- CSS ---- */
  var style = document.createElement('style');
  style.textContent = `
    #floating-contact {
      position: fixed;
      bottom: 24px;
      left: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 9999;
      align-items: flex-start;
    }
    .fc-wrap {
      position: relative;
      display: flex;
      align-items: center;
    }
    .fc-btn {
      width: 62px;
      height: 62px;
      border-radius: 18px;
      border: none;
      cursor: pointer;
      padding: 0;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.15s ease;
    }
    .fc-btn:active { transform: scale(0.93); }
    .fc-btn svg    { display: block; border-radius: 16px; }
    #wrap-zalo  .fc-btn { box-shadow: 0 4px 18px rgba(0,104,255,0.45); }
    #wrap-kakao .fc-btn { box-shadow: 0 4px 18px rgba(58,26,26,0.3); }
    .fc-tooltip {
      position: absolute;
      left: 72px;
      top: 50%;
      transform: translateY(-50%) translateX(-8px);
      background: rgba(20,20,20,0.88);
      color: #fff;
      font-size: 12px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-weight: 500;
      padding: 5px 14px;
      border-radius: 20px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.18s ease, transform 0.18s ease;
    }
    .fc-wrap:hover .fc-tooltip {
      opacity: 1;
      transform: translateY(-50%) translateX(0);
    }

    /* Overlay mờ để đóng popup khi click ngoài — không dùng nữa */

    @keyframes shake-zalo {
      0%,55%,100% { transform: rotate(0deg); }
      57%  { transform: rotate(-13deg); }
      60%  { transform: rotate(13deg);  }
      63%  { transform: rotate(-10deg); }
      66%  { transform: rotate(10deg);  }
      69%  { transform: rotate(-6deg);  }
      72%  { transform: rotate(6deg);   }
      75%  { transform: rotate(-3deg);  }
      78%  { transform: rotate(3deg);   }
      81%  { transform: rotate(0deg);   }
    }
    @keyframes shake-kakao {
      0%,55%,100% { transform: rotate(0deg); }
      57%  { transform: rotate(-14deg); }
      60%  { transform: rotate(14deg);  }
      63%  { transform: rotate(-10deg); }
      66%  { transform: rotate(10deg);  }
      69%  { transform: rotate(-6deg);  }
      72%  { transform: rotate(6deg);   }
      75%  { transform: rotate(-3deg);  }
      78%  { transform: rotate(3deg);   }
      81%  { transform: rotate(0deg);   }
    }
    #wrap-zalo  .fc-btn { animation: shake-zalo  5s ease-in-out infinite; }
    #wrap-kakao .fc-btn { animation: shake-kakao 5s ease-in-out infinite 2.5s; }
    .fc-wrap:hover .fc-btn {
      animation-play-state: paused;
      transform: scale(1.08);
    }
    @media (max-width: 480px) {
      #floating-contact { bottom: 16px; left: 12px; gap: 10px; }
      .fc-btn { width: 54px; height: 54px; }
      .fc-btn svg { width: 54px; height: 54px; }
      #fc-kakao-popup { left: 12px; min-width: 180px; }
      #fc-kakao-popup img.fc-qr { width: 140px; height: 140px; }
    }
  `;
  document.head.appendChild(style);

  /* ---- HTML ---- */
  var html = `
    <div id="floating-contact">
      <div class="fc-wrap" id="wrap-zalo">
        <button class="fc-btn" id="fc-zalo-btn" aria-label="Liên hệ Zalo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="62" height="62">
            <rect width="100" height="100" rx="22" fill="white"/>
            <path d="M50 12 C27 12 8 28 8 48 C8 58 13 67 22 73 L18 88 L35 79 C39 80 44 81 50 81 C73 81 92 65 92 48 C92 28 73 12 50 12 Z" fill="#0068FF"/>
            <text x="50" y="57" text-anchor="middle" fill="white"
                  font-family="'Arial Black','Arial',sans-serif"
                  font-weight="900" font-size="26" letter-spacing="0.5">Zalo</text>
          </svg>
        </button>
        <span class="fc-tooltip">Chat Zalo</span>
      </div>
      <div class="fc-wrap" id="wrap-kakao">
        <button class="fc-btn" id="fc-kakao-btn" aria-label="Liên hệ KakaoTalk">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="62" height="62">
            <rect width="100" height="100" rx="22" fill="#FEE500"/>
            <path d="M50 18 C29 18 12 31 12 48 C12 58 18 67 28 73 L24 85 L39 76 C42 77 46 77 50 77 C71 77 88 64 88 48 C88 31 71 18 50 18 Z" fill="#3A1A1A"/>
            <text x="50" y="56" text-anchor="middle" fill="#FEE500"
                  font-family="'Arial Black','Arial',sans-serif"
                  font-weight="900" font-size="20" letter-spacing="1">TALK</text>
          </svg>
        </button>
        <span class="fc-tooltip">KakaoTalk</span>
      </div>
    </div>
  `;

  var container = document.createElement('div');
  container.innerHTML = html;
  while (container.firstChild) {
    document.body.appendChild(container.firstChild);
  }

  /* ---- Events ---- */

  document.getElementById('fc-zalo-btn').addEventListener('click', function () {
    window.open('https://zalo.me/' + FC_ZALO_PHONE, '_blank', 'noopener,noreferrer');
  });

  document.getElementById('fc-kakao-btn').addEventListener('click', function () {
    window.open(FC_KAKAO_PAGE, '_blank', 'noopener,noreferrer');
  });
})();