export default function ContactMe() {
  return (
    <nav>
      <ul className="flex justify-between gap-4">
        <a
          href="https://github.com/valescos"
          className="flex gap-2 [&>svg]:transition-transform [&>svg]:hover:scale-[110%]"
        >
          {github_icon}
          <span className="transition-transform hover:underline">valescos</span>
        </a>
        <a
          href="mailto:valescos1986@gmail.com"
          className="flex gap-2 [&>svg]:transition-transform [&>svg]:hover:scale-[110%]"
        >
          {email_icon}
          <span className="transition-transform hover:underline">
            valescos1986@gmail.com
          </span>
        </a>
        <a
          href="https://t.me/Valescos"
          className="flex gap-2 [&>svg]:transition-transform [&>svg]:hover:scale-[110%]"
        >
          {telegramm_icon}
          <span className="transition-transform hover:underline">
            t.me/Valescos
          </span>
        </a>
      </ul>
    </nav>
  );
}

const email_icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6 dark:fill-white"
  >
    <path
      fillRule="evenodd"
      d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
      clipRule="evenodd"
    />
  </svg>
);

const telegramm_icon = (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="size-6 dark:fill-white"
  >
    <title>Telegram</title>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const github_icon = (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="size-6 dark:fill-white"
  >
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
