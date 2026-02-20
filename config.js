const Config = {
    // --- General Bot Info ---
    botName: "Lovely People",
    logoUrl: "https://raw.githubusercontent.com/FemTubey/Lovely-People/refs/heads/main/logo.png",
    heroSubtitle: "A curated Discord experience. Access is granted by permission only to maintain our wonderful community.",
    
    // --- Discord OAuth2 Info ---
    // Get your Client ID from Discord Dev Portal
    discordClientId: "1403583264081449061", 
    // This must match exactly what you put in the Discord Dev Portal Redirects
    redirectUri: "https://femtubey.github.io/Lovely-People/", 
    
    // --- Links ---
    requestLink: "https://forms.gle/SkD4LEZJqd16w6jf8",

    // --- Products ---
    products: [
        {
            name: "Lover Tier",
            price: "Free",
            description: "Basic access to the Lovely People community.",
            features: ["Community Access", "Basic Commands"]
        },
        {
            name: "Sweetheart Tier",
            price: "$5/mo",
            description: "Enhanced features for supporters.",
            features: ["Priority Support", "Custom Colors"]
        }
    ]
};
