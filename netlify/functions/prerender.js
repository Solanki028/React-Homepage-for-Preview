exports.handler = async (event, context) => {
  const { path } = event;
  const userAgent = event.headers['user-agent'] || '';
  
  // List of bot user agents
  const botUserAgents = [
    'googlebot',
    'bingbot',
    'slurp',
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'facebookexternalhit',
    'twitterbot',
    'rogerbot',
    'linkedinbot',
    'embedly',
    'quora link preview',
    'showyoubot',
    'outbrain',
    'pinterest/0.',
    'developers.google.com/+/web/snippet',
    'slackbot',
    'vkshare',
    'w3c_validator',
    'redditbot',
    'applebot',
    'whatsapp',
    'flipboard',
    'tumblr',
    'bitlybot',
    'skypeuripreview',
    'nuzzel',
    'discordbot',
    'google page speed',
    'qwantify',
    'pinterestbot',
    'bitrix link preview',
    'xing-contenttabreceiver',
    'chrome-lighthouse',
    'telegrambot'
  ];

  // Check if request is from a bot
  const isBot = botUserAgents.some(bot => 
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  if (isBot) {
    const prerenderUrl = `https://service.prerender.io/https://cafeaddaa.netlify.app${path}`;
    
    try {
      console.log("  >>>>>>>  ", React_App_PRERENDER_TOKEN);
      
      const response = await fetch(prerenderUrl, {
        headers: {
          'X-Prerender-Token': process.env.React_App_PRERENDER_TOKEN,
          'User-Agent': userAgent
        }
      });

      if (response.ok) {
        const html = await response.text();
        return {
          statusCode: 200,
          headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'public, max-age=300'
          },
          body: html
        };
      } else {
        console.error('Prerender.io error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Prerender.io fetch error:', error);
    }
  }

  // For regular users or if prerender fails, redirect to the app
  return {
    statusCode: 302,
    headers: {
      'Location': `https://cafeaddaa.netlify.app${path}`
    }
  };
};
