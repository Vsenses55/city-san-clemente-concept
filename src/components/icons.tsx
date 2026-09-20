type IconProps = { className?: string };

const base = "1.5" as const;

export function IconBill({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="6" width="32" height="36" rx="3" stroke="currentColor" strokeWidth={base} />
      <path d="M16 16h16M16 24h16M16 32h10" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <circle cx="34" cy="34" r="8" fill="var(--surface-warm)" stroke="currentColor" strokeWidth={base} />
      <path d="M34 30v8M31.5 32.5h5M31.5 35.5h5" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function IconRecreation({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="12" r="5" stroke="currentColor" strokeWidth={base} />
      <path d="M10 40c2-10 8-16 14-16s12 6 14 16" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path d="M16 28l-4 6M32 28l4 6" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function IconCompliance({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M24 6l14 6v10c0 10-6 17-14 20-8-3-14-10-14-20V12l14-6z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M18 24l4 4 8-9" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPermit({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="9" y="5" width="30" height="38" rx="3" stroke="currentColor" strokeWidth={base} />
      <path d="M16 14h16M16 21h16M16 28h10" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path d="M17 36l4 4 8-8" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMeeting({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="7" y="10" width="34" height="28" rx="3" stroke="currentColor" strokeWidth={base} />
      <path d="M7 18h34" stroke="currentColor" strokeWidth={base} />
      <path d="M16 6v8M32 6v8" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <circle cx="17" cy="27" r="2" fill="currentColor" />
      <circle cx="24" cy="27" r="2" fill="currentColor" />
      <circle cx="31" cy="27" r="2" fill="currentColor" />
    </svg>
  );
}

export function IconProjects({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M8 38V16l10-6 10 6v22" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M28 38V22l10-6 2 1.2V38" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M8 38h32" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path d="M14 22h4M14 28h4M14 33h4" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function IconADA({ className }: IconProps) {
  return (
    <svg viewBox="0 0 75 75" fill="none" className={className} aria-hidden="true">
      <g clipPath="url(#clip0_42_251)">
        <path d="M52.8953 45.8859L60.9182 58.3009C61.7236 59.546 61.751 61.0412 60.7066 62.1598C59.5055 63.4434 57.3287 63.3746 56.3255 61.8272L48.5774 49.874L31.7868 49.8547C30.3108 49.8547 29.1537 48.6096 29.151 47.1777L29.1317 30.3238C29.129 27.3609 30.5664 24.6784 33.216 23.2381C35.3626 22.0508 37.9352 21.9216 40.1862 22.8891C42.462 23.8676 44.1496 25.8547 44.7515 28.2762L55.5394 36.7965C56.4657 37.5167 56.8422 38.6271 56.5096 39.7622C56.2183 40.7626 55.2783 41.6119 54.1157 41.6559C53.6374 41.6752 53.074 41.5982 52.681 41.2904L45.1006 35.3426L45.0841 44.1213L49.7758 44.1076C51.1775 44.1048 52.145 44.7178 52.8981 45.8859H52.8953Z" fill="#112C5A" />
        <path d="M48.3218 55.217L51.1885 59.5652C47.7611 63.7677 42.8743 66.3815 37.5586 66.9202C31.7098 67.4507 26.0176 65.3865 21.8097 61.4067C12.5967 52.6939 13.6219 37.9481 23.8243 30.5794C24.5389 30.1424 25.1134 29.6669 25.883 29.3206L26.0396 34.9797C20.8642 39.1547 19.0117 46.2349 21.5101 52.4328C23.97 58.5317 30.0964 62.4511 36.6984 62.0636C41.4258 61.687 45.6722 59.1721 48.3191 55.2198L48.3218 55.217Z" fill="#112C5B" />
        <path d="M38.4711 19.8136C42.0095 19.8136 44.8779 16.9451 44.8779 13.4068C44.8779 9.86841 42.0095 7 38.4711 7C34.9328 7 32.0644 9.86841 32.0644 13.4068C32.0644 16.9451 34.9328 19.8136 38.4711 19.8136Z" fill="#112C5B" />
      </g>
      <defs>
        <clipPath id="clip0_42_251">
          <rect width="46.0128" height="60" fill="white" transform="translate(15.4936 7)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconCamera({ className }: IconProps) {
  return (
    <svg viewBox="0 0 75 75" fill="none" className={className} aria-hidden="true">
      <g clipPath="url(#clip0_42_288)">
        <path d="M64.5615 20.1973C59.1864 20.2405 53.5576 20.2405 48.1998 20.18C48.1421 20.1425 47.9548 20.1541 47.9029 20.0589L44.7729 14.6636C44.4213 14.0526 43.8276 13.7558 43.1186 13.7558L33.0255 13.75C32.3597 13.8076 31.8121 14.1276 31.4835 14.6953L28.3478 20.1483L23.6269 20.1541C23.4626 20.1541 23.3185 20.229 23.1369 20.1425L23.1312 18.5372C23.1254 17.7994 22.6037 17.0702 21.814 17.0702L14.7327 17.0817C14.0957 17.0817 13.5193 17.6726 13.5107 18.272L13.4905 20.1281C12.8939 20.2232 12.306 20.1339 11.7151 20.1771C9.74664 20.3356 8.34017 22.0101 8.3344 23.944V34.0113L8.32288 56.3419C8.32288 58.3737 9.72646 59.9359 11.7094 60.1895C11.7468 60.1895 11.7843 60.201 11.816 60.201C29.0424 60.2644 47.0642 60.2644 64.2704 60.201C66.0718 59.9935 67.6569 58.5524 67.6569 56.6445L67.6771 23.9527C67.6829 22.0707 66.3917 20.4826 64.5615 20.1944V20.1973ZM62.7429 27.2556C62.7487 28.1634 62.0743 29.08 61.0626 29.08L55.4858 29.0857C54.5174 29.0857 53.8285 28.2182 53.7853 27.3219C53.7478 26.4399 54.4395 25.4571 55.4166 25.4571L61.1578 25.4629C62.0973 25.4629 62.7372 26.4198 62.7429 27.2585V27.2556ZM38.1383 27.8003C44.9747 27.8003 50.5141 33.3397 50.5141 40.1761C50.5141 47.0125 44.9747 52.5548 38.1383 52.5548C31.302 52.5548 25.7597 47.0153 25.7597 40.1761C25.7597 33.3368 31.2991 27.8003 38.1383 27.8003Z" fill="#0F2A58" />
        <path d="M38.992 48.8235C43.7678 48.351 47.2563 44.0964 46.7838 39.3206C46.3113 34.5448 42.0568 31.0563 37.281 31.5288C32.5052 32.0013 29.0166 36.2558 29.4891 41.0316C29.9616 45.8074 34.2162 49.296 38.992 48.8235Z" fill="#EBC179" />
        <path d="M38.992 48.8235C43.7678 48.351 47.2563 44.0964 46.7838 39.3206C46.3113 34.5448 42.0568 31.0563 37.281 31.5288C32.5052 32.0013 29.0166 36.2558 29.4891 41.0316C29.9616 45.8074 34.2162 49.296 38.992 48.8235Z" fill="#0F2A58" />
      </g>
      <defs>
        <clipPath id="clip0_42_288">
          <rect width="59.3542" height="46.5" fill="white" transform="translate(8.32288 13.75)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconCityHall({ className }: IconProps) {
  return (
    <svg viewBox="0 0 75 75" fill="none" className={className} aria-hidden="true">
      <g clipPath="url(#clip0_42_293)">
        <path d="M7.89771 61.7889V66.25H68.1024V61.7889H7.89771Z" fill="#0E2958" />
        <path d="M63.122 28.2117H55.1241V59.2538H63.122V28.2117Z" fill="#0E2958" />
        <path d="M31.8819 28.2117H23.8933V59.2538H31.8819V28.2117Z" fill="#0E2958" />
        <path d="M42.288 28.2148H34.3057V59.2539H42.288V28.2148Z" fill="#0E2958" />
        <path d="M52.7127 28.2117H44.7056V59.2538H52.7127V28.2117Z" fill="#0E2958" />
        <path d="M21.5067 28.2117H14.1581V59.2538H21.5067V28.2117Z" fill="#0E2958" />
        <path d="M38.6462 20.254C39.9165 20.254 40.9463 19.2242 40.9463 17.9539C40.9463 16.6836 39.9165 15.6538 38.6462 15.6538C37.3759 15.6538 36.3461 16.6836 36.3461 17.9539C36.3461 19.2242 37.3759 20.254 38.6462 20.254Z" fill="#0E2958" />
        <path d="M38.6647 8.5L10.1267 20.86L10.1483 25.8281H67.1378V20.8538L38.6647 8.5ZM38.64 22.6253C36.0617 22.6253 33.9687 20.5323 33.9687 17.9539C33.9687 15.3756 36.0617 13.2826 38.64 13.2826C41.2183 13.2826 43.3113 15.3725 43.3113 17.9539C43.3113 20.5354 41.2214 22.6253 38.64 22.6253Z" fill="#0E2958" />
        <path d="M38.6462 20.254C39.9165 20.254 40.9463 19.2242 40.9463 17.9539C40.9463 16.6836 39.9165 15.6538 38.6462 15.6538C37.3759 15.6538 36.3461 16.6836 36.3461 17.9539C36.3461 19.2242 37.3759 20.254 38.6462 20.254Z" fill="#FEFEFE" />
        <path d="M38.6462 20.254C39.9165 20.254 40.9463 19.2242 40.9463 17.9539C40.9463 16.6836 39.9165 15.6538 38.6462 15.6538C37.3759 15.6538 36.3461 16.6836 36.3461 17.9539C36.3461 19.2242 37.3759 20.254 38.6462 20.254Z" fill="#0E2957" />
      </g>
      <defs>
        <clipPath id="clip0_42_293">
          <rect width="60.2047" height="57.75" fill="white" transform="translate(7.89771 8.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconEmail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 75 75" fill="none" className={className} aria-hidden="true">
      <g clipPath="url(#clip0_42_299)">
        <path d="M39.5782 43.0577C38.4888 44.1529 37.1557 43.8146 36.1924 42.8456L19.7192 26.3036L10.0205 16.6106C10.6885 16.1634 11.4368 16 12.3198 16H63.8723C64.6664 16 65.3401 16.1691 65.9966 16.5934L49.8331 32.757L39.5782 43.0606V43.0577Z" fill="#0E2956" />
        <path d="M64.5832 57.8367C64.3625 57.9943 64.0815 57.9485 63.7461 57.9972H12.2481C11.9356 57.9972 11.6977 57.9284 11.4396 57.8166L29.2344 40.0247L34.3261 45.1191C36.1723 47.0887 39.1482 47.3008 41.2209 45.5664L46.7827 40.0304L64.5861 57.8338L64.5832 57.8367Z" fill="#0E2956" />
        <path d="M68.0235 53.6882C68.0235 54.6887 67.7082 55.4542 67.1405 56.2082L48.8669 37.9117L67.7884 18.9873C68.0293 19.5062 68.0178 20.0223 68.0293 20.6501L68.0235 53.6882Z" fill="#0E2956" />
        <path d="M8.90531 56.1681C8.19145 55.3825 7.9707 54.3648 7.9707 53.2524V20.7476C7.98217 20.0939 7.98504 19.5549 8.20579 18.9873L27.1302 37.9117L8.90531 56.1681Z" fill="#0E2956" />
      </g>
      <defs>
        <clipPath id="clip0_42_299">
          <rect width="60.0586" height="42" fill="white" transform="translate(7.9707 16)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconWeather({ className }: IconProps) {
  return (
    <svg viewBox="0 0 75 75" fill="none" className={className} aria-hidden="true">
      <g clipPath="url(#clip0_42_303)">
        <path d="M65.946 39.8312L61.8212 39.8601C60.8333 39.8659 60.1487 38.9502 60.1112 38.0548C60.0736 37.1594 60.738 36.1108 61.7519 36.1108L65.9258 36.1166C66.8559 36.1166 67.4711 37.0756 67.5 37.9075C67.5318 38.7943 66.9512 39.8255 65.946 39.8312Z" fill="#112C5B" />
        <path d="M14.883 37.9825C14.8888 39.0426 14.0944 39.8774 13.0546 39.8716L9.18397 39.8543C8.17299 39.8485 7.50575 38.9155 7.49997 37.9739C7.4942 37.0178 8.23076 36.0963 9.25329 36.0906L12.9795 36.0703C14.0453 36.0646 14.8772 36.882 14.8859 37.9796L14.883 37.9825Z" fill="#112C5B" />
        <path d="M39.3602 13.5199C39.3602 14.5915 38.5456 15.3714 37.5202 15.3887C36.4948 15.4061 35.6427 14.6031 35.6427 13.517V9.88613C35.6427 8.82605 36.4457 8.02015 37.4451 7.99416C38.5052 7.96527 39.3602 8.77405 39.3602 9.87746V13.5199Z" fill="#112C59" />
        <path d="M56.0327 22.1104C55.299 22.844 54.1031 22.6332 53.4879 21.9659C52.786 21.2063 52.7946 20.0624 53.5197 19.3316L56.0298 16.8013C56.7808 16.0445 57.916 15.9925 58.693 16.6944C59.4295 17.3617 59.5566 18.5806 58.7941 19.3432L56.0327 22.1104Z" fill="#112C59" />
        <path d="M21.5323 19.4211C22.3065 20.1982 22.136 21.3853 21.411 22.0612C20.686 22.7372 19.5335 22.7285 18.7883 21.9717L16.2204 19.3605C15.5156 18.6441 15.5531 17.5263 16.1828 16.8244C16.8299 16.0994 18.0459 15.9232 18.768 16.6482L21.5352 19.424L21.5323 19.4211Z" fill="#112C5A" />
        <path d="M28.1355 17.2315C29.174 17.2315 30.0159 16.3896 30.0159 15.3511C30.0159 14.3126 29.174 13.4707 28.1355 13.4707C27.097 13.4707 26.2551 14.3126 26.2551 15.3511C26.2551 16.3896 27.097 17.2315 28.1355 17.2315Z" fill="#112C58" />
        <path d="M46.879 17.2287C47.9159 17.2287 48.7565 16.3881 48.7565 15.3512C48.7565 14.3142 47.9159 13.4736 46.879 13.4736C45.8421 13.4736 45.0015 14.3142 45.0015 15.3512C45.0015 16.3881 45.8421 17.2287 46.879 17.2287Z" fill="#102B58" />
        <path d="M39.3573 66.1281C39.3631 67.2199 38.5081 68.0027 37.5202 68.0056C36.5324 68.0085 35.6514 67.2228 35.6514 66.1367V62.3846C35.6514 61.3447 36.4659 60.585 37.4451 60.5533C38.4243 60.5215 39.3371 61.2465 39.34 62.2892L39.3573 66.1281Z" fill="#112C5B" />
        <path d="M46.8674 62.477C47.9043 62.477 48.7449 61.6364 48.7449 60.5995C48.7449 59.5625 47.9043 58.7219 46.8674 58.7219C45.8305 58.7219 44.9899 59.5625 44.9899 60.5995C44.9899 61.6364 45.8305 62.477 46.8674 62.477Z" fill="#112C5B" />
        <path d="M28.1383 62.4684C29.1753 62.4684 30.0159 61.6278 30.0159 60.5909C30.0159 59.554 29.1753 58.7134 28.1383 58.7134C27.1014 58.7134 26.2608 59.554 26.2608 60.5909C26.2608 61.6278 27.1014 62.4684 28.1383 62.4684Z" fill="#112C5A" />
        <path d="M58.7103 56.472C59.4988 57.2634 59.5046 58.4361 58.7507 59.1929C57.9968 59.9497 56.7721 59.8919 56.0037 59.1092L53.4647 56.5355C52.7137 55.7729 52.8206 54.554 53.5803 53.8665C54.34 53.1791 55.5069 53.2542 56.281 54.0312L58.7132 56.472H58.7103Z" fill="#112C5A" />
        <path d="M60.1574 49.1872C61.1944 49.1872 62.035 48.3466 62.035 47.3097C62.035 46.2727 61.1944 45.4321 60.1574 45.4321C59.1205 45.4321 58.2799 46.2727 58.2799 47.3097C58.2799 48.3466 59.1205 49.1872 60.1574 49.1872Z" fill="#112C59" />
        <path d="M18.7796 59.2825C18.0315 60.0277 16.8241 59.8342 16.1944 59.1265C15.5647 58.4188 15.5011 57.2865 16.2435 56.5442L18.9471 53.8406C19.6693 53.1184 20.8449 53.26 21.5063 53.9474C22.1678 54.6349 22.2718 55.7961 21.5439 56.5211L18.7767 59.2825H18.7796Z" fill="#112C5B" />
        <path d="M14.857 49.1841C15.8923 49.1841 16.7316 48.3448 16.7316 47.3095C16.7316 46.2741 15.8923 45.4348 14.857 45.4348C13.8217 45.4348 12.9824 46.2741 12.9824 47.3095C12.9824 48.3448 13.8217 49.1841 14.857 49.1841Z" fill="#112C5B" />
        <path d="M14.8484 30.5043C15.8805 30.5043 16.7172 29.6676 16.7172 28.6355C16.7172 27.6033 15.8805 26.7666 14.8484 26.7666C13.8162 26.7666 12.9795 27.6033 12.9795 28.6355C12.9795 29.6676 13.8162 30.5043 14.8484 30.5043Z" fill="#112C5A" />
        <path d="M60.1632 30.5043C61.1953 30.5043 62.032 29.6676 62.032 28.6355C62.032 27.6033 61.1953 26.7666 60.1632 26.7666C59.131 26.7666 58.2943 27.6033 58.2943 28.6355C58.2943 29.6676 59.131 30.5043 60.1632 30.5043Z" fill="#112C59" />
        <path d="M41.8121 56.2406C51.9041 53.8587 58.1544 43.7466 55.7724 33.6545C53.3905 23.5625 43.2784 17.3123 33.1864 19.6942C23.0943 22.0761 16.8441 32.1883 19.226 42.2803C21.6079 52.3723 31.7201 58.6226 41.8121 56.2406Z" fill="#112C5B" />
      </g>
      <defs>
        <clipPath id="clip0_42_303">
          <rect width="60" height="60.0116" fill="white" transform="translate(7.5 7.99414)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconPress({ className }: IconProps) {
  return (
    <svg viewBox="0 0 75 75" fill="none" className={className} aria-hidden="true">
      <g clipPath="url(#clip0_42_307)">
        <path d="M22.1764 60.2571C21.1936 62.0772 19.281 63.6517 17.1623 63.5989C13.7333 63.5144 11.2659 59.8846 11.2659 56.5665L11.25 35.7255C11.3293 32.8513 13.5642 30.4394 16.4675 30.3416L23.167 30.3152L23.1618 56.4925C23.1618 57.8557 22.8131 59.0815 22.179 60.2597L22.1764 60.2571Z" fill="#0F2A57" />
        <path d="M63.7342 16.2688C63.7342 14.3034 61.9774 12.4409 59.9961 12.4356L29.8983 12.396C27.4072 12.396 25.6821 14.2743 25.6768 16.7047L25.6557 56.9099C25.6557 60.2808 23.0641 62.9596 19.8807 63.6015L53.5581 63.6121C59.267 63.6174 63.7527 58.9388 63.7474 53.4069L63.7316 16.2715L63.7342 16.2688ZM42.5419 19.6741H55.9595C56.9924 19.6741 57.7321 20.6172 57.7611 21.5682C57.7955 22.5193 57.0637 23.5601 55.9647 23.5601L42.666 23.5866C41.5565 23.5866 40.7349 22.7623 40.6741 21.6977C40.6187 20.6885 41.4323 19.6767 42.5419 19.6767V19.6741ZM32.3684 20.073C32.3684 19.5129 32.8307 19.1008 33.3855 19.1061L36.553 19.1272C37.0153 19.1325 37.3719 19.6054 37.3719 20.0545L37.3825 23.0476C37.3878 23.6526 36.9862 24.1123 36.3998 24.1123L33.33 24.107C32.7435 24.107 32.3631 23.6394 32.3631 23.0793L32.3684 20.0756V20.073ZM55.7508 54.6908H33.6761C32.5771 54.6908 31.7317 53.8771 31.6789 52.8072C31.6287 51.8034 32.4371 50.781 33.5519 50.781L55.9066 50.7757C56.9871 50.7757 57.7744 51.7637 57.7664 52.7465C57.7559 53.827 56.8999 54.6908 55.7508 54.6908ZM55.9964 44.4407L33.47 44.446C32.3605 44.446 31.6023 43.3259 31.6815 42.3749C31.7793 41.2653 32.6326 40.5309 33.7527 40.5362L55.8934 40.552C56.9818 40.552 57.7215 41.4687 57.7664 42.4356C57.8166 43.3734 57.0584 44.4407 55.9938 44.4407H55.9964ZM56.0757 34.2065L33.4727 34.2223C32.4028 34.2223 31.6551 33.2053 31.6763 32.2463C31.7027 31.2688 32.482 30.3257 33.5387 30.3257L55.9832 30.3363C56.9977 30.3363 57.7136 31.2794 57.7664 32.1802C57.8166 33.0652 57.1509 34.2065 56.0757 34.2065Z" fill="#0F2A57" />
      </g>
      <defs>
        <clipPath id="clip0_42_307">
          <rect width="52.5" height="51.2135" fill="white" transform="translate(11.25 12.3933)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconWorld({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 10h16M10 2c2.5 2.2 2.5 13.8 0 16M10 2c-2.5 2.2-2.5 13.8 0 16" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function IconAlert({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="17" fill="var(--surface-warm)" />
      <path d="M20 12v10" stroke="var(--color-primary-700)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="27" r="1.6" fill="var(--color-primary-700)" />
    </svg>
  );
}

export function IconPlay({ className }: IconProps) {
  return (
    <svg viewBox="0 0 76 53" fill="none" className={className} aria-hidden="true">
      <rect width="76" height="53" rx="14" fill="var(--interactive-primary)" />
      <path d="M30 16l22 10.5L30 37V16z" fill="white" />
    </svg>
  );
}

export function IconChevronLeft({ className }: IconProps) {
  return (
    <svg viewBox="0 0 12 18" fill="none" className={className} aria-hidden="true">
      <path d="M10 2L3 9l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevronRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 12 18" fill="none" className={className} aria-hidden="true">
      <path d="M2 2l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 29 16" fill="none" className={className} aria-hidden="true">
      <path d="M0 8h26M19 1l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 18" fill="none" className={className} aria-hidden="true">
      <path d="M0 1h24M0 9h24M0 17h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="32" height="32" rx="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="20" r="7.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="29" cy="11" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function IconFacebook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" />
      <path d="M23 13h-3a3 3 0 0 0-3 3v3h-3v4h3v9h4v-9h3.2l.8-4H21v-2.4c0-.9.3-1.6 1.6-1.6H24z" fill="currentColor" />
    </svg>
  );
}

export function IconX({ className }: IconProps) {
  return (
    <svg viewBox="0 0 34 35" fill="none" className={className} aria-hidden="true">
      <rect x="1" y="1.5" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="2" />
      <path d="M10 10l14 15M24 10L10 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconTikTok({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 38" fill="none" className={className} aria-hidden="true">
      <path
        d="M22 2c1 4 3.5 6.5 7 7v5c-2.7 0-5-.8-7-2.2v11.7C22 29.5 17.7 33 12.6 33 7.4 33 3 28.9 3 23.7c0-5 4.2-9.2 9.4-9.2 1 0 1.9.1 2.8.4v5.4a4.7 4.7 0 0 0-2.8-.9 4.5 4.5 0 1 0 4.4 5.4V2h5.2z"
        fill="currentColor"
      />
    </svg>
  );
}
