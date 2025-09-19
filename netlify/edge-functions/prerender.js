export default async (request, context) => {
  const url = new URL(request.url);
  const userAgent = request.headers.get('user-agent') || '';
  
  // List of bot user agents that should get prerendered content
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

  // Check for _escaped_fragment_ parameter (legacy AJAX crawling)
  const hasEscapedFragment = url.searchParams.has('_escaped_fragment_');

  if (isBot || hasEscapedFragment) {
    // Prerender the page using Prerender.io service
    const prerenderUrl = `https://service.prerender.io/${url.href}`;
    
    try {
      const response = await fetch(prerenderUrl, {
        headers: {
          'X-Prerender-Token': context.env.PRERENDER_TOKEN || '', // Set this in Netlify environment variables
          'User-Agent': userAgent
        }
      });

      if (response.ok) {
        const html = await response.text();
        return new Response(html, {
          headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
          }
        });
      }
    } catch (error) {
      console.error('Prerender.io error:', error);
      // Fall through to serve the regular page
    }
  }

  // For regular users, serve the normal React app
  return context.next();
};
