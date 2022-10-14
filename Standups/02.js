/**
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
 *
 * @example ```js
 * domainName("http://github.com/carbonfive/raygun"); // -> "github"
 * domainName("http://www.zombie-bites.com"); // -> "zombie-bites"
 * domainName("https://www.cnet.com"); // -> "cnet"
 * ```
 * @param {string} url The URL must have a schema followed by ://, a domain with name,
 * TLD and optional subdomain, and an optional path. No syntax errors allowed.
 * @returns {string} The final domain name, which is before the TLD (.com)
 */
function domainName(url) {
    // Decompose the URL into sub-elements with a regex.
    const urlElements = url.match(/^(.*:\/\/)(.*?)(\/.*)?$/).slice(1);
    // If there is a URL schema (http or https)
    if (urlElements[0].endsWith("://")) {
        urlElements.shift();
    }
    // Split the domain into multiple components with the dot as separator.
    const domainElements = urlElements[0].split(".");
    // The domain name is always the second last element of the domain.
    return domainElements[domainElements.length - 2];
}

console.log(domainName("http://github.com/carbonfive/raygun")); // -> "github"
console.log(domainName("http://www.zombie-bites.com")); // -> "zombie-bites"
console.log(domainName("https://www.cnet.com")); // -> "cnet"