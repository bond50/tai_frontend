const siteUrl = "http://localhost:3000";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    sitemapSize: 7000,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: ["/admin", "/admin/*", "/user", "/user/*", "/auth", "/auth/", "/signin"]
            },
            {userAgent: "*", allow: "/"},
        ],
        additionalSitemaps: [
            `${siteUrl}/tai.xml`,
            `${siteUrl}/categories-sitemap.xml`,
            `${siteUrl}/tags-sitemap.xml`,
            `${siteUrl}/blogs-sitemap.xml`,
        ],
    },
    exclude: [
        "/tai.xml",
        "/categories-sitemap.xml",
        "/tags-sitemap.xml",
        "/admin",
        "/admin/*",
        "/signin",
        "/signin/*",
        "/auth",
        "/auth/*",
        "/user",
        "/user/*",
        "/profile",
        "/profile/*",
        "/blogs-sitemap.xml"
    ],
};
