/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,

    webpack: (config) => {
        let modularizeImports = null;
        config.module.rules.some((rule) =>
            rule.oneOf?.some((oneOf) => {
                modularizeImports =
                    oneOf?.use?.options?.nextConfig?.modularizeImports;
                return modularizeImports;
            }),
        );
        if (modularizeImports?.["@headlessui/react"])
            delete modularizeImports["@headlessui/react"];
        return config;
    },

    images: {
        domains: [
            "res.cloudinary.com"
        ]
    }
}

module.exports = nextConfig
