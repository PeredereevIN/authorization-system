export const verifyEmailTemplate = (
  url: string,
  brandColor: string = "#2563EB"
) => ({
  subject: "Подтверждение аккаунта AuthGuard",
  text: `Пожалуйста подтвердите ваш адрес email перейдя по ссылке: ${url} `,
  html: `
    <html><head><style>
      body, html { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333333; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); }
      .header { background-color: ${brandColor}; font-weight:bold; font-size: 24px; color: #ffffff; padding: 20px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px; }
      .header img { max-width: 40px; margin-bottom: 10px; }
      .content { padding: 20px; text-align: center; }
      .content h1 { font-size: 24px; color: #333333; }
      .content p { font-size: 16px; color: #666666; margin: 10px 0 20px; }
      .button { display: inline-block; padding: 15px 25px; font-size: 16px; font-weight: bold;  background-color: ${brandColor}; color: #fff!important; border-radius: 5px; text-decoration: none; margin-top: 20px; }
      .footer { font-size: 14px; color: #999999; text-align: center; padding: 20px; }
    </style></head><body>
      <div class="container">
        <div class="header">AuthGuard</div>
        <div class="content">
          <h1>Подтвердите Ваш email</h1>
          <p>Благодарим Вас за регистрацию! Пожалуйста, подтвердите свою учетную запись, нажав на кнопку ниже.</p>
          <a href="${url}" class="button">Подвердить аккаунт</a>
          <p>Если вы не создавали эту учетную запись, пожалуйста, не обращайте внимания на это электронное письмо.</p>
        </div>
        <div class="footer">
          <p>Если у Вас есть какие-либо вопросы, не стесняйтесь отвечать на это электронное письмо или обращаться в нашу службу поддержки.</p>
        </div>
      </div>
    </body></html>
  `,
});

export const passwordResetTemplate = (
  url: string,
  brandColor: string = "#2563EB"
) => ({
  subject: "Сброс пароля",
  text: `Чтобы сбросить свой пароль, пожалуйста, перейдите по следующей ссылке: ${url}`,
  html: `
    <html><head><style>
      body, html { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333333; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); }
      .header { background-color: ${brandColor}; font-size: 24px;  font-weight:bold; color: #ffffff; padding: 20px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px; }
      .header img { max-width: 40px; margin-bottom: 10px; }
      .content { padding: 20px; text-align: center; }
      .content h1 { font-size: 24px; color: #333333; }
      .content p { font-size: 16px; color: #666666; margin: 10px 0 20px; }
      .button { display: inline-block; padding: 15px 25px; font-size: 16px; font-weight: bold; background-color: ${brandColor};  color: #fff !important; border-radius: 5px; text-decoration: none; margin-top: 20px; }
      .footer { font-size: 14px; color: #999999; text-align: center; padding: 20px; }
    </style></head><body>
      <div class="container">
        <div class="header">AuthGuard</div>
        <div class="content">
          <h1>Сброс пароля</h1>
          <p>Мы получили запрос на сброс вашего пароля. Нажмите на кнопку ниже, чтобы продолжить сброс вашего пароля.</p>
          <a href="${url}" class="button">Сбросить пароль</a>
          <p>Если вы не запрашивали сброс пароля, вы можете спокойно проигнорировать это электронное письмо.</p>
        </div>
        <div class="footer">
          <p>Если у вас есть какие-либо вопросы, не стесняйтесь отвечать на это электронное письмо или обращаться в нашу службу поддержки.</p>
        </div>
      </div>
    </body></html>
  `,
});
